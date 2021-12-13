import axios from "axios";
import config from "./config.json";

export const createUsdFormatter = () =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

export const createPercentFormatter = () =>
  new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: 2,
  });

export const camelCaseToSnakeCase = (camelCase: string) => {
  let snakeCase = "";

  let index = 0;
  for (const letter of camelCase) {
    if (letter == letter.toUpperCase()) {
      if (index > 0) {
        snakeCase += "_";
      }

      snakeCase += letter.toLowerCase();
    } else {
      snakeCase += letter;
    }

    index++;
  }

  return snakeCase;
};

export const snakeCaseToCamelCase = (snakeCase: string) => {
  let camelCase = "";

  for (let i = 0; i < snakeCase.length; i++) {
    const letter = snakeCase[i];

    if (i === 0) {
      camelCase += letter.toUpperCase();
    } else if (letter === "_") {
      camelCase += snakeCase[i + 1].toUpperCase();
      i++;
    } else {
      camelCase += letter;
    }
  }

  return camelCase;
};

export const getSpaPrice = async () => {
  const response = await axios.post(
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
  );

  const [{ open, close }] = response.data.data.candles;

  const parsedOpen = 1 / open / 10 ** 9;
  const parsedClose = 1 / close / 10 ** 9;

  return { open: parsedOpen, close: parsedClose };
};
