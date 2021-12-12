import AvailLambda from "./AvailLambda";
import config from "./config.json";

export default class AvailLambdaWsspa extends AvailLambda {
  protected collateralAssetName: string = "wsSPA";
  collateralAssetAddress = config.contracts.lambdaWsspaMarket.address;
}
