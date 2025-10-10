const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, GetCommand } = require('@aws-sdk/lib-dynamodb');
const { ok, error } = require('../utils/response');

const client = new DynamoDBClient({});
const ddb = DynamoDBDocumentClient.from(client);

exports.main = async (event) => {
  try {
    const { id } = event.pathParameters || {};
    if (!id) return error(400, 'id is required');

    const res = await ddb.send(new GetCommand({
      TableName: process.env.TABLE_NAME,
      Key: { id },
    }));

    if (!res.Item) return error(404, 'Item not found');

    return ok(res.Item);
  } catch (err) {
    console.error('Error fetching item:', err);
    return error(500, 'Failed to get item');
  }
};
