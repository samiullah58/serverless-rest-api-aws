const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, DeleteCommand } = require('@aws-sdk/lib-dynamodb');
const { ok, error } = require('../utils/response');

const client = new DynamoDBClient({});
const ddb = DynamoDBDocumentClient.from(client);

exports.main = async (event) => {
  try {
    const { id } = event.pathParameters || {};
    if (!id) return error(400, 'id is required');

    await ddb.send(
      new DeleteCommand({
        TableName: process.env.TABLE_NAME,
        Key: { id },
      })
    );

    return ok({ deleted: id });
  } catch (err) {
    console.error('Error deleting item:', err);
    return error(500, 'Failed to delete item');
  }
};
