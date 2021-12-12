import AvailLambda from "./AvailLambda";
import config from "./config.json";

export default class AvailLambdaWftm extends AvailLambda {
  protected collateralAssetName: string = "wFTM";
  protected collateralAssetAddress: string =
    config.contracts.lambdaWftmMarket.address;
}
