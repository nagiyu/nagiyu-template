import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

import SecretsManagerUtil from '@common/aws/SecretsManagerUtil';

export default class DynamoDBUtil {
  /**
   * Creates a DynamoDBClient based on the environment.
   * If the environment is 'local', it uses credentials from AWS Secrets Manager.
   * Otherwise, it uses the default credentials provider chain.
   * @returns {DynamoDBClient} The configured DynamoDBClient.
   */
  private async getDynamoClient(): Promise<DynamoDBClient> {
    if (process.env.PROCESS_ENV !== 'local') {
      return new DynamoDBClient({
        region: await SecretsManagerUtil.getSecretValue('ClientNextjsTemplate', 'AWS_REGION'),
      });
    }

    return new DynamoDBClient({
      region: await SecretsManagerUtil.getSecretValue('ClientNextjsTemplate', 'AWS_REGION'),
      credentials: {
        accessKeyId: await SecretsManagerUtil.getSecretValue('ClientNextjsTemplate', 'AWS_ACCESS_KEY'),
        secretAccessKey: await SecretsManagerUtil.getSecretValue('ClientNextjsTemplate', 'AWS_SECRET_ACCESS_KEY')
      }
    });
  }
}
