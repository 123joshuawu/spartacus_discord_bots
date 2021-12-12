import { Client, Intents } from "discord.js";
import Web3 from "web3";
import cron from "node-cron";

export const fromToken = async <T extends Web3DiscordBot>(
  Bot: new (web3: Web3, token: string, runCron: string, client: Client) => T,
  web3: Web3,
  token: string,
  runCron: string,
  client: Client = new Client({
    intents: [Intents.FLAGS.GUILDS],
  })
) => {
  const bot = new Bot(web3, token, runCron, client);

  bot.init();
  console.log(`${bot.name} initialized`);

  const task = cron.schedule(
    runCron,
    () => {
      bot.run();
    },
    { scheduled: false }
  );

  client.once("ready", () => {
    console.log(`${bot.name} ready`);
    bot.ready();

    task.start();
  });

  await client.login(token);
  console.log(`${bot.name} logged in`);

  return bot;
};

export default abstract class Web3DiscordBot {
  public abstract readonly name: string;

  constructor(
    protected readonly web3: Web3,
    protected readonly token: string,
    protected readonly runCron: string,
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
