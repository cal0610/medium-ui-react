import * as cdk from "aws-cdk-lib";
import { SPADeploy } from "cdk-spa-deploy";
import { Construct } from "constructs";

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new SPADeploy(this, "example-id", {
      encryptBucket: true,
    }).createSiteFromHostedZone({
      zoneName: "example.com",
      indexDoc: "index.html",
      websiteFolder: "../website/build",
    });
  }
}
