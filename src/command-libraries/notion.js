// https://github.com/makenotion/notion-sdk-js
// https://developers.notion.com/reference/intro

const { Client } = require("@notionhq/client");

// Initializing a client
const notionClient = new Client({
  auth : process.env.NOTION_TOKEN
});

const notion = {};

notion['ham-db'] = async () => {
  try {
    const response = await notionClient.databases.list();
    console.info({ response }, 'notion.js@databases');
    return 'Success';
  }
  catch (error) {
    console.error('notion.js@databases:', error.message);
    return error.message;
  }
}

module.exports = notion;
