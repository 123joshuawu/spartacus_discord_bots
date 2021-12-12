import AvailLambda from "./AvailLambda";
import config from "./config.json";

export default class AvailLambdaWftm extends AvailLambda {
  public name: string = "AvailLambdaWftm";
  protected collateralAssetName: string = "wFTM";
  protected collateralAssetAddress: string =
    config.contracts.lambdaWftmMarket.address;
}
