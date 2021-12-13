import Web3DiscordBot from "./Web3DiscordBot";
import axios from "axios";
import config from "./config.json";
import { createPercentFormatter, createUsdFormatter } from "./util";

export default class SpaPrice extends Web3DiscordBot {
  public name: string = "SpaPrice";
  private static readonly usdFormatter = createUsdFormatter();
  private static readonly percentFormatter = createPercentFormatter();

  async init() {}

  async ready() {
    this.setWatching("SPA Price");
  }

  async run() {
    const [dexcandlesResponse, spookyswapResponse] = await Promise.all([
      axios.post(
        "https://api.thegraph.com/subgraphs/name/" +
          config.providers.thegraph.dexcandles,
        {
          query: `{
          candles(
            skip: 1,
            first: 1,
            orderBy: time,
            orderDirection: desc,
            where: {
              period: 60,
              token0: "${config.contracts.SPA.address}",
              token1: "${config.contracts.DAI.address}"
            }
          ) {
            open
            close
          }
        }`,
        }
      ),
      axios.post(
        "https://api.thegraph.com/subgraphs/name/" +
          config.providers.thegraph.spookyswap,
        {
          query: `{
            pair(id: "${config.contracts.spaDaiLp.address}") {
              pairHourData(
                skip: 1,
                first: 1,
                orderBy: hourStartUnix,
                orderDirection: desc
              ){
                hourStartUnix
                reserve0
                reserve1
              }
            }
            pairDayDatas(
              first: 1,
              orderBy: date,
              orderDirection: desc,
              where: { pairAddress:"${config.contracts.spaDaiLp.address}" }
            ){
              date
              reserve0
              reserve1
            }
          }`,
        }
      ),
    ]);

    const [{ hourStartUnix, reserve0: spaHour, reserve1: daiHour }] =
      spookyswapResponse.data.data.pair.pairHourData;
    const priceHour = daiHour / spaHour;
    const [{ date, reserve0: spaDay, reserve1: daiDay }] =
      spookyswapResponse.data.data.pairDayDatas;
    const priceDay = daiDay / spaDay;
    const [{ open, close }] = dexcandlesResponse.data.data.candles;

    const parsedOpen = 1 / open / 10 ** 9;
    const parsedClose = 1 / close / 10 ** 9;

    const delta = parsedClose - priceHour;

    const percentage = delta / parsedClose;

    this.setNickName(
      `${SpaPrice.usdFormatter.format(
        parsedClose
      )} (${SpaPrice.percentFormatter.format(percentage)})`
    );
  }
}
