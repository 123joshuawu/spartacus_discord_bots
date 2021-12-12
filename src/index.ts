import dotenv from "dotenv";
import Web3 from "web3";
import AvailLambdaWsspa from "./AvailLambdaWsspa";
import { Client } from "discord.js";
import config from "./config.json";
import { snakeCaseToCamelCase } from "./util";
import Web3DiscordBot, { fromToken } from "./Web3DiscordBot";
import AvailLambdaWftm from "./AvailLambdaWftm";
import SpaRebaseTimer from "./SpaRebaseTimer";

dotenv.config();

const web3 = new Web3(new Web3.providers.HttpProvider(config.providers.rpc));

const globalRunCron = process.env.RUN_CRON ?? "*/1 * * * *";

const bots: Record<
  string,
  new (
    web3: Web3,
    token: string,
    runCron: string,
    client: Client
  ) => Web3DiscordBot
> = {
  AvailLambdaWsspa,
  AvailLambdaWftm,
  SpaRebaseTimer,
};

const tokenKeys = Object.keys(process.env).filter((key) =>
  key.endsWith("_TOKEN")
);

if (tokenKeys.length === 0) {
  throw new Error("Must have at least one token");
}

tokenKeys.forEach((tokenKey) => {
  const botKey = snakeCaseToCamelCase(
    tokenKey.slice(0, tokenKey.length - 6).toLowerCase()
  );

  if (process.env[tokenKey] === undefined) {
    throw new Error(`Must provide token value: ${tokenKey}`);
  }

  if (!bots[botKey]) {
    throw new Error(`Bad token key: ${tokenKey}`);
  }

  const runIntervalMs = process.env[`${botKey}_RUN_INTERVAL_MS`];

  if (runIntervalMs !== undefined && isNaN(parseInt(runIntervalMs))) {
    throw new Error("Run interval must be an integer");
  }
});
console.log("Environment variables verified");

tokenKeys.forEach((tokenKey) => {
  const botSnakeCaseKey = tokenKey.slice(0, tokenKey.length - 6);
  const botKey = snakeCaseToCamelCase(botSnakeCaseKey.toLowerCase());

  const params = Object.fromEntries(
    Object.entries(process.env)
      .filter(([key]) => key.startsWith(botSnakeCaseKey))
      .map(([key, value]) => [
        key.slice(botSnakeCaseKey.length + 1).toLowerCase(),
        value,
      ])
  );

  const runCron = params.run_cron ?? globalRunCron;

  fromToken(bots[botKey], web3, params.token!, runCron);
});
console.log("All bots started");
