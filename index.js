const sanitizeHtml = require("sanitize-html");
function cleanText(item) {
  return sanitizeHtml(item, {
    allowedTags: [],
    allowedAttributes: {},
  });
}
async function getChannelDataFromUrl(channelName) {
  const url = `https://t.me/s/${channelName}`;
  const result = await fetch(url);
  const data = await result.text();
  if (
    data.indexOf(
      '<section class="tgme_channel_history js-message_history">'
    ) === -1
  ) {
    console.log("Channel not found");
    return;
  }
  const regex =
    /<div class="tgme_widget_message_text js-message_text" dir="auto">(.*?)<\/div>/g;

  const channelMessages = [];
  let match;

  while ((match = regex.exec(data)) !== null) {
    channelMessages.push(cleanText(match[1]));
  }
  return channelMessages;
}
async function main() {
  const channelMessages = await getChannelDataFromUrl("telegramtips");
  console.log(channelMessages);
}
main();
