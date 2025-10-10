const { v4: uuid } = require('uuid');
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, PutCommand } = require('@aws-sdk/lib-dynamodb');
const { created, error } = require('../utils/response.js');

const client = new DynamoDBClient({});
const ddb = DynamoDBDocumentClient.from(client);

exports.main = async (event) => {
  try {
    console.log("Event received:", event);
    const data = JSON.parse(event.body || '{}');

    if (!data.name) return error(400, 'name is required');

    const now = new Date().toISOString();
    const item = {
      id: uuid(),
      name: data.name,
      description: data.description || '',
      updatedAt: now,
    };

    await ddb.send(new PutCommand({
      TableName: process.env.TABLE_NAME,
      Item: item,
    }));

    console.log("Item successfully saved:", item);

    return created(item);
  } catch (err) {
    console.error('Error creating item:', err);
    return error(500, 'Failed to create item');
  }
};
