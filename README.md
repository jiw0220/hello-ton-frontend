# Hello Ton Frontend

## Open in Telegram

To access the bot in Telegram:

1. Send a message to "@EMCHubBot" or search for "EMCHubBot".
2. Click on "@EMCHubBot" to open the bot.

## Run Demo

To run the demo locally, follow these steps:

1. Install the necessary dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```

## The Telegram Validation in Server

To handle Telegram authentication data on the server, use the following code:

```javascript
import { validate, parse, type InitDataParsed } from '@tma.js/init-data-node';
const TELEGRAM_BOT_ACCESS_TOKEN = 'xxxxxxxxxx:xxxxxxxxxxxxxxxxxxxx';

function handleTelegramAuthData(authData: string) {
  try {
    // Validate init data.
    validate(authData, TELEGRAM_BOT_ACCESS_TOKEN, {
      // We consider init data sign valid for 1 hour from their creation moment.
      expiresIn: 3600,
    });
    // Parse init data. We will surely need it in the future.
    const data: InitDataParsed = parse(authData);
    return ['', data];
  } catch (e) {
    return [e.message, null];
  }
}

export const handler = async (request: any, response: any) => {
  const { raw: authData } = request.body;
  const [err, data] = handleTelegramAuthData(authData);
  response.code(200).send({ _result: 0, data: data });
};
```
