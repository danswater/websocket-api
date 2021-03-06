// eslint-disable-next-line import/no-unresolved
const AWS = require('aws-sdk');

const doc = new AWS.DynamoDB.DocumentClient();

module.exports = ({ tableName, additionalSyncFields } = {}) => async (evt, connection) => {
  if (!tableName) {
    throw new Error('Must provide a tableName to sync clients with');
  }

  const { stage, domainName, connectionId, event } = connection;
  switch(event) {
    case 'connect': {
      doc.put({
        TableName: tableName,
        Item: {
          ...additionalSyncFields,
          connectionId,
          domainName,
          stage,
        },
      }).promise();
      break;
    }
    case 'close': {
      await doc.delete({
        TableName: tableName,
        Key: { connectionId },
      }).promise();
      break;
    }
  }
};
