import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const isLocal = process.env.NODE_ENV === "development";

export const client = new DynamoDBClient({
  region: "us-east-1",
  endpoint: isLocal ? "http://localhost:4566" : undefined,
  credentials: isLocal
    ? {
        accessKeyId: "test",
        secretAccessKey: "test",
      }
    : undefined,
});

export const ddb = DynamoDBDocumentClient.from(client);
