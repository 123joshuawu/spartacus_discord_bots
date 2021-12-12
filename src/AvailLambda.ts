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

  init() {
    this.bentoBox = new this.web3.eth.Contract(
      BentoBoxAbi as any,
      config.contracts.bentoBox.address
    ) as any as BentoBox;
  }

  ready() {
    if (!this.client.user) {
      console.error("Discord client user unset");
      return;
    }

    this.client.user.setActivity(`Borrow - ${this.collateralAssetName}`, {
      type: "WATCHING",
    });
  }

  run() {
    this.bentoBox.methods
      .balanceOf(config.contracts.lambda.address, this.collateralAssetAddress)
      .call()
      .then((availableLambdaString) => {
        const availableLambda = parseFloat(availableLambdaString) / 10 ** 18;
        console.log(`${this.name} lambda balance: ${availableLambda}`);
        const displayString =
          availableLambda < 5 ? "0" : this.formatter.format(availableLambda);

        this.setNickName(displayString + " LAMBDA");
      });
  }
}
