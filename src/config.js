const REGION = "us-west-2";

export default {
  s3: {
    REGION,
    BUCKET: "mrc-serverless-notes-uploads",
  },
  apiGateway: {
    REGION,
    URL: "https://o8i1woxdjj.execute-api.us-west-2.amazonaws.com/prod",
  },
  cognito: {
    REGION,
    USER_POOL_ID: "us-west-2_dtiQcPiZK",
    APP_CLIENT_ID: "2rcr4v6cr9ri0gis9i3stjjjgc",
    IDENTITY_POOL_ID: "us-west-2:d0fd8baa-1ff2-4232-8b6e-09f718eacbee",
  },
  MAX_ATTACHMENT_SIZE: 5000000,
};
