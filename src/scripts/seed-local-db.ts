import { BUCKET_NAME, TABLE_NAME } from "@/app/lib/contants";
import { ddb } from "@/app/lib/dynamodb";
import { s3 } from "@/app/lib/s3";
import { HallOfFameEntry } from "@/app/lib/types";
import {
  CreateTableCommand,
  DeleteTableCommand,
  PutItemCommand,
} from "@aws-sdk/client-dynamodb";
import {
  CreateBucketCommand,
  DeleteBucketCommand,
  ListObjectsV2Command,
  DeleteObjectsCommand,
} from "@aws-sdk/client-s3";
import { marshall } from "@aws-sdk/util-dynamodb";

async function resetTable() {
  try {
    await ddb.send(new DeleteTableCommand({ TableName: TABLE_NAME }));
    console.log(`🗑️ Deleted table: ${TABLE_NAME}`);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    console.warn(`⚠️ Could not delete table: ${TABLE_NAME} (maybe it doesn't exist)`);
  }
}

async function createTable() {
  await ddb.send(
    new CreateTableCommand({
      TableName: TABLE_NAME,
      BillingMode: "PAY_PER_REQUEST",
      AttributeDefinitions: [
        { AttributeName: "pk", AttributeType: "S" },
        { AttributeName: "sk", AttributeType: "S" },
      ],
      KeySchema: [
        { AttributeName: "pk", KeyType: "HASH" },
        { AttributeName: "sk", KeyType: "RANGE" },
      ],
    })
  );
  console.log(`✅ Created table: ${TABLE_NAME}`);
}

async function seedData() {
  const items: Omit<HallOfFameEntry, "createdAt" | "updatedAt">[] = [
    {
      pk: "HOF",
      sk: "JaneDoe",
      name: "Jane Doe",
      description: `
  **2025 Champion**
  
  - Won Ironman 70.3 World Championship  
  - Volunteer of the Year  
  - Led weekly training rides
  `,
    },
    {
      pk: "HOF",
      sk: "JohnSmith",
      name: "John Smith",
      description: `
  ## 2024 Highlights
  
  - Completed 6 triathlons  
  - Raised \$10,000 for local youth sports  
  - Mentored new club members
  `,
    },
  ];

  for (const item of items) {
    await ddb.send(
      new PutItemCommand({
        TableName: TABLE_NAME,
        Item: marshall(item),
      })
    );
    console.log(`➕ Seeded: ${item.name}`);
  }
}

async function resetBucket() {
  try {
    const objects = await s3.send(
      new ListObjectsV2Command({ Bucket: BUCKET_NAME })
    );

    if (objects.Contents && objects.Contents.length > 0) {
      await s3.send(
        new DeleteObjectsCommand({
          Bucket: BUCKET_NAME,
          Delete: {
            Objects: objects.Contents.map((obj) => ({ Key: obj.Key! })),
          },
        })
      );
      console.log("🧹 Cleared bucket objects");
    }

    await s3.send(new DeleteBucketCommand({ Bucket: BUCKET_NAME }));
    console.log(`🗑️ Deleted bucket: ${BUCKET_NAME}`);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    console.warn(`⚠️ Could not delete bucket: ${BUCKET_NAME}`);
  }
}

async function createBucket() {
  await s3.send(
    new CreateBucketCommand({
      Bucket: BUCKET_NAME,
    })
  );
  console.log(`✅ Created bucket: ${BUCKET_NAME}`);
}

async function main() {
  const shouldReset = process.argv.includes("--reset");

  if (shouldReset) {
    console.log("🔄 Resetting DynamoDB and S3...");
    await resetTable();
    await resetBucket();
  }

  await createTable();
  await createBucket();
  await seedData();
}

main().catch((err) => {
  console.error("❌ Seeding failed:", err);
  process.exit(1);
});
