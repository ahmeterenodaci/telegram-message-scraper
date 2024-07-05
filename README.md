# telegram-message-scraper

Designed for extracting and processing message data from Telegram channels. It utilizes web scraping techniques to fetch HTML content from a specified Telegram channel and parses relevant information such as message text, sender details, timestamps, and associated media.

## Installation

```bash
npm i @erenodaci/telegram-message-scraper
```

## Usage

```javascript
import { TelegramMessageScraper } from "@erenodaci/telegram-message-scraper";

console.log(await TelegramMessageScraper("telegram"));
```

## Example Output

```javascript
[
  {
    userName: 'Telegram News',
    userImage: 'https://cdn1.cdn-telegram.org/file/Gz87zTwdCsjY0MC5yIQyD_DcdFxuaWoRGpSnsHv12Cmbroq-RRSSGXCr7oaJMyHNqxELa-_-38PtV8L5Xp0n54qn0n19XTTt9UX0sUTlaRkTpLph5QEjLligC_aY-BM26g-E3gH4emL0z4saGwiJh_g0UB9jli62O2kmPzfMQ6SWlQLd4ZCpAj2b9AXbPnvFHv-5rDgjNeqjmJQHpbC7nXxeq6O5x-rtc7xEYB2Gbp4mzOXDUl1U5LH7P1t6VbHZKUiD9jaEIC0fhMdjUwcwFE4izBcST7aeFhhnmX22dhDOXjJLuRMhAK1FgZRrNOlvpt4JHunu2rme__eBXfgDWg.jpg',
    userLink: 'https://t.me/telegram',
    date: '2024-06-10T13:13:25+00:00',
    message: 'For the full details about all the features released last month, see our blog
post: https://telegram.org/blog/message-effects-and-moreMay Features1 • 2 • 3 • 4 • 5 • More',
    image: 'https://cdn4.cdn-telegram.org/file/iB7G4bheBkaWilLUESKb6thdE_q4n13_X_I9Wv5sDXCKrP1cgSCTLnEQQD0CEGGxzz2z3Hh9GvOk2Q3p_o_4TW68sMwY_rYes5bQ81e7pStXBjHjcrd4BC2wkc3_SWSCHxj4d-7ZVXUGcoRFB3eMPwEZnelZwo8xVJ2OK2Ujy4kuWVUr4E1uAKRjw5HvGMpM8j9lKjUy9CqIIerQD-acOK9stBxHP2nP-OuiWN40phglBkU60Or5J0CLUjidTH18Q5hGKXFlJq3R80d7x5QhFmLwZPq9NPsYhlTA0gOPoyXae3LgN6-L7FdhGcGSJ0EWypYPfR9BH8Crhn8n2zNSRA.jpg',
    views: '2.8M'
  }
]
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.
