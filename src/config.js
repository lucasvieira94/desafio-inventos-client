export default {
   s3: {
    REGION: "us-east-1",
    BUCKET: "minion-store-uploads"
  },

  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ju4f5zvwab.execute-api.us-east-1.amazonaws.com/dev"
    //URL: "http://localhost:3000"
  },

   cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_XSfTFuHeh",
    APP_CLIENT_ID: "3tm52r4eslcvbhki23mudjj7qn",
    IDENTITY_POOL_ID: "arn:aws:cognito-idp:us-east-1:514777035509:userpool/us-east-1_XSfTFuHeh"
  }
};
