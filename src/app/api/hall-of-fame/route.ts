import { NextResponse } from "next/server";
import { QueryCommand, GetCommand, PutCommand } from "@aws-sdk/lib-dynamodb";
import { BUCKET_NAME, TABLE_NAME } from "@/app/lib/contants";
import { ddb } from "@/app/lib/dynamodb";
import { s3 } from "@/app/lib/s3";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { randomUUID } from "crypto";
import { nameToSlug } from "@/app/lib/utils";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sk = searchParams.get("sk");

  if (sk) {
    const { Item } = await ddb.send(
      new GetCommand({
        TableName: TABLE_NAME,
        Key: { pk: "HOF", sk },
      })
    );    
    if (!Item) return NextResponse.json({}, { status: 404 });
    return NextResponse.json(Item);
  }

  const result = await ddb.send(
    new QueryCommand({
      TableName: TABLE_NAME,
      KeyConditionExpression: "pk = :pk",
      ExpressionAttributeValues: {
        ":pk": "HOF",
      },
    })
  );

  return NextResponse.json(result.Items ?? []);
}

export async function POST(req: Request) {
  const formData = await req.formData();
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageFile = formData.get("image") as File | null;

  if (!name || !description || !imageFile) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Upload image to S3
  const extension = imageFile.name.split(".").pop();
  if (!extension || !["jpg", "jpeg", "png"].includes(extension.toLowerCase())) {
    // Check if the file is a valid image
    return NextResponse.json({ error: "Invalid image file" }, { status: 400 });
  }
  const imageKey = `${randomUUID()}.${extension}`;
  const buffer = Buffer.from(await imageFile.arrayBuffer());

  await s3.send(
    new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: imageKey,
      Body: buffer,
      ContentType: imageFile.type,
    })
  );

  // TODO: use actual s3 url
  const imageUrl = `http://localhost:4566/${BUCKET_NAME}/${imageKey}`;

  const pk = "HOF";
  const sk = nameToSlug(name);
  const item = { pk, sk, name, description, imageUrl, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
  await ddb.send(
    new PutCommand({
      TableName: TABLE_NAME,
      Item: item,
    })
  );

  return NextResponse.json({ success: true });
}

