import Web3DiscordBot from "./Web3DiscordBot";
import sSpaAbi from "../abi/sSpa.json";
import { SSpa } from "../types/web3-v1-contracts/sSpa";
import config from "./config.json";

export default class SpaCurrentIndex extends Web3DiscordBot {
  public name: string = "SpaIndex";
  private sSpaContract!: SSpa;
  private startIndex!: number;
  private readonly formatter = new Intl.NumberFormat("en", {
    maximumFractionDigits: 3,
  });

  async init() {
    this.sSpaContract = new this.web3.eth.Contract(
      sSpaAbi as any,
      config.contracts.sSPA.address
    ) as any as SSpa;

    const { index } = await this.sSpaContract.methods.rebases(0).call();

    this.startIndex = parseInt(index);
  }

  async ready() {
    this.setWatching("SPA Index");
  }

  protected async getCurrentIndex() {
    const indexString = await this.sSpaContract.methods.index().call();

    const index = parseInt(indexString);

    const currentIndex = index / this.startIndex;

    return currentIndex;
  }

  async run() {
    const currentIndex = await this.getCurrentIndex();

    this.setNickName(this.formatter.format(currentIndex));
  }
}
