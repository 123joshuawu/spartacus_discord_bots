import AvailLambda from "./AvailLambda";
import config from "./config.json";

export default class AvailLambdaWsspa extends AvailLambda {
  public name: string = "AvailLambdaWsspa";
  protected collateralAssetName: string = "wsSPA";
  protected collateralAssetAddress: string =
    config.contracts.lambdaWsspaMarket.address;
}
