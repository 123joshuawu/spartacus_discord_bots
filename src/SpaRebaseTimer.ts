import Web3DiscordBot from "./Web3DiscordBot";

const EPOCH_INTERVAL = 33100;
const BLOCK_RATE_SECONDS = 0.87;

// Extracted from website source code
const getRebaseBlock = (currentBlock: number) => {
  // Not sure what this is, I'm guessing it's the first
  //  epoch block number?
  const t = 20909100;
  const n = currentBlock - t;
  return t + Math.ceil(n / EPOCH_INTERVAL) * EPOCH_INTERVAL;
};

// Copied from the ohm-frontend
const secondsUntilBlock = (startBlock: number, endBlock: number) => {
  const blocksAway = endBlock - startBlock;
  const secondsAway = blocksAway * BLOCK_RATE_SECONDS;

  return secondsAway;
};

const prettifySeconds = (seconds: number, resolution?: string) => {
  if (seconds !== 0 && !seconds) {
    return "";
  }

  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);

  if (resolution === "day") {
    return d + (d == 1 ? " day" : " days");
  }

  const dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  const hDisplay = h > 0 ? h + (h == 1 ? " hr, " : " hrs, ") : "";
  const mDisplay = m > 0 ? m + (m == 1 ? " min" : " mins") : "";

  let result = dDisplay + hDisplay + mDisplay;
  if (mDisplay === "") {
    result = result.slice(0, result.length - 2);
  }

  return result;
};

export default class SpaRebaseTimer extends Web3DiscordBot {
  public name: string = "SpaRebaseTimer";
  async init() {}
  async ready() {
    this.setWatching("Rebase Timer");
  }
  async run() {
    const blockNumber = await this.web3.eth.getBlockNumber();
    this.log(`Retrieved block number ${blockNumber}`);

    const rebaseBlock = getRebaseBlock(blockNumber);
    const seconds = secondsUntilBlock(blockNumber, rebaseBlock);
    const prettified = prettifySeconds(seconds);

    const displayString = prettified !== "" ? prettified : "Less than a minute";

    this.setNickName(displayString);
  }
}
