## C³  
[![Add me to your server!](https://badgen.net/badge/add%20me/to%20your%20server!/F2A900)](https://discord.com/api/oauth2/authorize?client_id=827663203298312203&permissions=0&scope=bot)

A Discord bot for checking crypto to crypto/fiat prices.



Dependencies
-------

- [cryptocompare](https://github.com/ExodusMovement/cryptocompare) JavaScript API to provide realtime data.
- [currency-symbol-map](https://www.npmjs.com/package/currency-symbol-map) to provide currency symbols.
- [discord.js](https://discord.js.org/#/) JavaScript discord API.
- [node-fetch](https://github.com/node-fetch/node-fetch) to allow for API calls to be made.
- [NodeJS](https://nodejs.org/en/) version 13.0.0++ (to enable [ECMA script module imports](#ecma-module-import)).

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
 _This works as the package.json has `{ "type": "module" }` and the scripts have the flag `--experimental-modules`_
 
- To create an API Key, go to https://www.cryptocompare.com/cryptopian/api-keys and make sure you give it the "Read All Price Streaming and Polling Endpoints" permission.
