## C³  
[![Add me to your server!](https://badgen.net/badge/add%20me/to%20your%20server!/F2A900)](https://discord.com/api/oauth2/authorize?client_id=827663203298312203&permissions=0&scope=bot)
[![prettier](https://badgen.net/badge/code%20style/Prettier/green)](https://prettier.io/)

A Discord bot for checking crypto to crypto/fiat prices.



Dependencies
-------

- [cryptocompare](https://github.com/ExodusMovement/cryptocompare) JavaScript API to provide realtime data.
- [chart.js](https://www.chartjs.org/) Generating charts based on realtime & historical data.
- [chartjs-node-canvas](https://www.npmjs.com/package/chartjs-node-canvas) Rendering charts server side
- [crypto-color](npmjs.com/package/crypto-color) Getting accurate RGBA color data for cryptocurrencies.
- [currency-symbol-map](https://www.npmjs.com/package/currency-symbol-map) to provide currency symbols.
- [cryptocurrencies](https://www.npmjs.com/package/cryptocurrencies) Allows for coverting tickers into readable names.
- [format-currency](https://github.com/ExodusMovement/format-currency) to format currency data.
- [discord.js](https://discord.js.org/#/) JavaScript discord API.

Run Locally
-------

- The script `npm run dev` depends on [nodemon](https://www.npmjs.com/package/nodemon) being installed. 
- Does not use the NodeJS import standard, instead uses ECMA script modules
#### ECMA module import:
 ```js
 // instead of
 const Discord = require('discord.js');
 
 // we can now write
 import * as Discord from "discord.js"; 
 import { Client, Intents } from "discord.js";
 ```
 _This works as the package.json has `{ "type": "module" }` and is run with the flag `--experimental-modules`_
 
- To create an API Key, go to https://www.cryptocompare.com/cryptopian/api-keys and make sure you give it the "Read All Price Streaming and Polling Endpoints" permission.
