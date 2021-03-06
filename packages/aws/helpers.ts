import * as SSM from '@aws-cdk/aws-ssm';
import * as CDK from '@aws-cdk/core';

export const getParam = (scope: CDK.Construct, name: string) => {
  return SSM.StringParameter.valueForStringParameter(scope, name);
};

export class ModeStack extends CDK.Stack {
  public readonly mode: string = this.node.tryGetContext('mode') || 'development';
  public readonly Mode: string =
    this.node.tryGetContext('mode').replace(/^\w/, (c: string) => c.toUpperCase()) || 'Development';

  constructor(scope: CDK.Construct, id: string) {
    super(scope, id);
  }
}
