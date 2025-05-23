import { HallOfFameEntry } from "@/app/lib/types";
import { ddb } from "@/app/lib/dynamodb";
import { TABLE_NAME } from "@/app/lib/contants";
import { QueryCommand } from "@aws-sdk/lib-dynamodb";

export const getAllHallOfFameEntries = async (): Promise<HallOfFameEntry[]> => {
  const result = await ddb.send(
    new QueryCommand({
      TableName: TABLE_NAME,
      KeyConditionExpression: "pk = :pk",
      ExpressionAttributeValues: {
        ":pk": "HOF",
      }, 
    })
  );

  return result.Items as HallOfFameEntry[];
}
