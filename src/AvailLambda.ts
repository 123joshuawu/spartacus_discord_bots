import config from "./config.json";
import Web3DiscordBot from "./Web3DiscordBot";
import { BentoBox } from "../types/web3-v1-contracts/bentoBox";
import BentoBoxAbi from "../abi/bentoBox.json";

export default abstract class AvailLambda extends Web3DiscordBot {
  protected bentoBox!: BentoBox;
  protected readonly formatter: Intl.NumberFormat = new Intl.NumberFormat(
    "en",
    {
      notation: "compact",
      compactDisplay: "short",
    }
  );

  protected abstract readonly collateralAssetAddress: string;
  protected abstract readonly collateralAssetName: string;

  async init() {
    this.bentoBox = new this.web3.eth.Contract(
      BentoBoxAbi as any,
      config.contracts.bentoBox.address
    ) as any as BentoBox;
  }

  async ready() {
    this.setWatching(`Borrow - ${this.collateralAssetName}`);
  }

  async run() {
    const availableLambdaString = await this.bentoBox.methods
      .balanceOf(config.contracts.lambda.address, this.collateralAssetAddress)
      .call();

    const availableLambda = parseFloat(availableLambdaString) / 10 ** 18;
    this.log(`Lambda balance ${availableLambda}`);

    const displayString =
      availableLambda < 5 ? "0" : this.formatter.format(availableLambda);

    this.setNickName(displayString + " LAMBDA");
  }
}
