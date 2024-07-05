import sanitizeHtml from "sanitize-html";

export async function TelegramMessageScraper(channelName) {
   function cleanText(item) {
      return sanitizeHtml(item, {
         allowedTags: [],
         allowedAttributes: {},
      });
   }
   function getUserImage(html) {
      const regex = /<img src="(.*?)"/g;
      return regex.exec(html)?.[1];
   }
   function getUserLink(html) {
      const regex = /<a class="tgme_widget_message_owner_name" href="(.*?)"/g;
      return regex.exec(html)?.[1];
   }
   function getUserName(html) {
      const regex = /<span dir="auto">(.*?)<\/span>/g;
      return regex.exec(html)?.[1];
   }
   function getMessageDate(html) {
      const regex = /<time datetime="(.*?)"/g;
      return regex.exec(html)?.[1];
   }
   function getImage(html) {
      const regex = /url\('(.*?)'/g;
      return regex.exec(html)?.[1];
   }
   function getMessage(html) {
      const regex =
         /<div class="tgme_widget_message_text js-message_text" dir="auto">(.*?)<\/div>/g;
      return cleanText(regex.exec(html)?.[1]);
   }
   async function getChannelMessages(channelName) {
      const url = `https://t.me/s/${channelName}`;
      const result = await fetch(url);
      const data = await result.text();
      if (data.indexOf("tgme_channel_history js-message_history") === -1) {
         console.error("Channel not found");
         return null;
      }
      const messageContainer = data.split('class="tgme_widget_message_user">');
      messageContainer.shift();

      const messages = [];
      messageContainer.forEach((message) => {
         messages.push({
            userName: getUserName(message),
            userImage: getUserImage(message),
            userLink: getUserLink(message),
            date: getMessageDate(message),
            message: getMessage(message),
            image: getImage(message),
         });
      });
      return messages;
   }

   return await getChannelMessages(channelName);
}
