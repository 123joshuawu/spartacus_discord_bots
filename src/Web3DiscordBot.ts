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

  await bot.init();
  console.log(`${bot.name} initialized`);

  const clientReady = new Promise((res) => client.once("ready", res));

  await client.login(token);
  console.log(`${bot.name} logged in`);

  await clientReady;
  console.log(`${bot.name} ready`);

  await bot.ready();

  try {
    await bot.run();
    console.log(`${bot.name} finished first run`);
  } catch (err) {
    console.error(err);
  }

  cron.schedule(runCron, bot.run.bind(bot));
  console.log(`${bot.name} scheduled`);

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

  abstract init(): Promise<void>;
  abstract ready(): Promise<void>;
  abstract run(): Promise<void>;

  protected log(message: string) {
    console.log(`${this.name}: ${message}`);
  }

  protected setWatching(activity: string) {
    if (!this.client.user) {
      console.error(`${this.name}: No client user`);
      return;
    }

    this.client.user.setActivity(activity, {
      type: "WATCHING",
    });
  }

  protected setNickName(nickname: string) {
    this.client.guilds.cache.forEach((guild) => {
      if (!guild.me) {
        console.error(`${this.name}: No guild me - ${guild.name}`);
        return;
      }

      guild.me.setNickname(nickname);
    });
  }
}
