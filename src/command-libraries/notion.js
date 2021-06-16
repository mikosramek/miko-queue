// https://github.com/makenotion/notion-sdk-js
// https://developers.notion.com/reference/intro

const { Client } = require("@notionhq/client");

const SECRET = process.env.NOTION_TOKEN;

const IDS = {
  tradeWinds : process.env.NOTION_TRADE_WINDS_ID
}

// Initializing a client
const notionClient = new Client({
  auth : process.env.NOTION_TOKEN
});

const notion = {};

notion['ham-db'] = async () => {
  try {
    const response = await notionClient.databases.list();
    console.info({ response }, 'notion.js@databases');
    return null;
  }
  catch (error) {
    console.error('notion.js@databases:', error.message);
    return error.message;
  }
}

notion['trade-winds'] = async () => {
  try {
    const response = await notionClient.pages.retrieve({ page_id : IDS.tradeWinds });
    const { properties : { title : { title }} } = response;
    console.info({ response, title }, 'notion.js@');
    const blocks = await notion.blocks.children.list({
      block_id: IDS.tradeWinds,
      page_size: 50,
    });
    console.log(blocks);
    return null;
  }
  catch (error) {
    console.error('notion.js@:', error.message);
  }
}

module.exports = notion;
