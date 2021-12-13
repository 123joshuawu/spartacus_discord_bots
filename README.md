# spartacus_discord_bots

Discord bots for [Spartacus](https://spartacus.finance/#/) and [Spartacadabra](https://spartacadabra.money/) ecosystem

## How to Run

1. Create a `.env` file
2. Create a discord token for each bot you would like to run
3. Specify the discord token for each bot in the `.env` file using the following format `<BOT_NAME_IN_UPPER_SNAKE_CASE>_TOKEN=<token>`  
   e.g. to run the **SPA Rebase Timer** bot, the `.env` will need a line like: `SPA_REBASE_TIMER_TOKEN=xxxxxxx`

## Available bots

- **SPA Rebase Timer**: Shows the time remaining until the next rebase  
  [Add to Server](https://discord.com/api/oauth2/authorize?client_id=909643341535281153&permissions=0&scope=bot)

- **Avail Lambda wsSPA**: Shows total amount of LAMBDA available to borrow using wsSPA as collateral  
  [Add to Server](https://discord.com/api/oauth2/authorize?client_id=919589837894475887&permissions=0&scope=bot)

- **Avail Lambda wFTM**: Shows total amount of LAMBDA available to borrow using wFTM as collateral  
  [Add to Server](https://discord.com/api/oauth2/authorize?client_id=919422131027189790&permissions=0&scope=bot)

- **SPA Current Index**: Shows current SPA index  
  [Add to Server](https://discord.com/api/oauth2/authorize?client_id=919717510700498995&permissions=0&scope=bot)

- **SPA Price**: Shows current SPA price  
  [Add to Server](https://discord.com/api/oauth2/authorize?client_id=919729399677485107&permissions=0&scope=bot)

- **wsSPA Price**: Shows current wsSPA price  
  [Add to Server](https://discord.com/api/oauth2/authorize?client_id=919749085697835089&permissions=0&scope=bot)
