const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, UpdateCommand } = require("@aws-sdk/lib-dynamodb");
const { success, error } = require("../utils/response");

const client = new DynamoDBClient({});
const ddb = DynamoDBDocumentClient.from(client);

exports.main = async (event) => {
  try {
    const id = event.pathParameters.id;
    const data = JSON.parse(event.body || "{}");

    if (!data.name) return error(400, "name is required");

    const now = new Date().toISOString();

    const params = {
      TableName: process.env.TABLE_NAME,
      Key: { id },
      UpdateExpression: "SET #n = :name, description = :desc, updatedAt = :updatedAt",
      ExpressionAttributeNames: {
        "#n": "name"  // Alias for reserved keyword
      },
      ExpressionAttributeValues: {
        ":name": data.name,
        ":desc": data.description || "",
        ":updatedAt": now
      },
      ReturnValues: "ALL_NEW"
    };

    const result = await ddb.send(new UpdateCommand(params));
    return success(200, result.Attributes);
  } catch (err) {
    console.error("Error updating item:", err);
    return error(500, "Failed to update item");
  }
};
