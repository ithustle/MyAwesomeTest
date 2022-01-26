import AWS from 'aws-sdk';

const dynamodbConfig = __DEV__ !== true ?
    {
        region: 'us-west-2',
        apiVersion: '2012-08-10',
        credentials: {
            "accessKeyId": "fakeKey",
            "secretAccessKey": "fakeAccessKey"
        },
        endpoint: 'http://192.168.2.129:8000'
    } :
    {
        region: 'us-west-2',
        apiVersion: '2012-08-10',
        credentials: {
            "accessKeyId": "AKIA55E2A5T23HOAGHFQ",
            "secretAccessKey": "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"
        }
    };

export default new AWS.DynamoDB.DocumentClient(dynamodbConfig);

export const PLAYLIST_TABLE = 'playlists';