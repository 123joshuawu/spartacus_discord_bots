import SpaCurrentIndex from "./SpaCurrentIndex";
import { createUsdFormatter, getSpaPrice } from "./util";

export default class WsspaPrice extends SpaCurrentIndex {
  public name: string = "WsspaPrice";
  private static readonly formatter = createUsdFormatter();

  async ready() {
    this.setWatching("wsSPA Price");
  }

  async run() {
    const currentIndex = await this.getCurrentIndex();

    const { close } = await getSpaPrice();

    this.setNickName(WsspaPrice.formatter.format(close * currentIndex));
    this.setWatching("wsSPA Price");
  }
}
