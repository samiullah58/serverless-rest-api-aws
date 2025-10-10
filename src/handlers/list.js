const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, ScanCommand } = require('@aws-sdk/lib-dynamodb');
const { ok, error } = require('../utils/response');

const client = new DynamoDBClient({});
const ddb = DynamoDBDocumentClient.from(client);

exports.main = async () => {
  try {
    const res = await ddb.send(new ScanCommand({
      TableName: process.env.TABLE_NAME,
    }));

    return ok(res.Items || []);
  } catch (err) {
    console.error('Error listing items:', err);
    return error(500, 'Failed to list items');
  }
};
