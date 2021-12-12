import { Client, Intents } from "discord.js";
import Web3 from "web3";

export const fromToken = async <T extends Web3DiscordBot>(
  Bot: new (
    web3: Web3,
    token: string,
    runIntervalMs: number,
    client: Client
  ) => T,
  web3: Web3,
  token: string,
  runIntervalMs: number,
  client: Client = new Client({
    intents: [Intents.FLAGS.GUILDS],
  })
) => {
  await client.login(token);

  const bot = new Bot(web3, token, runIntervalMs, client);

  bot.init();
  console.log("Bot initialized");

  client.once("ready", () => {
    console.log("Bot ready");
    bot.ready();

    bot.run();

    setInterval(() => {
      bot.run();
    }, runIntervalMs);
  });

  return bot;
};

export default abstract class Web3DiscordBot {
  public abstract readonly name: string;

  constructor(
    protected readonly web3: Web3,
    protected readonly token: string,
    protected readonly runIntervalMs: number,
    protected readonly client: Client
  ) {}

  abstract init(): void;
  abstract ready(): void;
  abstract run(): void;

  setNickName(nickname: string) {
    this.client.guilds.cache.forEach((guild) => {
      if (!guild.me) {
        console.error(`No guild me: ${guild.name}`);
        return;
      }

      guild.me.setNickname(nickname);
    });
  }
}
