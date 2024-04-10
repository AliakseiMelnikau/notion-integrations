const dotenv = require('dotenv');
const axios = require('axios')
const { Client } = require('@notionhq/client')

dotenv.config();

const notion = new Client({auth: process.env.NOTION_API_KEY});

async function createNotionPage() {
  

      const data = {
        "parent": {
          "type": "database_id",
          "database_id": process.env.NOTION_DATABASE_ID
        }, 
        "properties": {
          "Name": {
            "title": [
              {
                "text": {
                  "content": "Test Name"
                }
              }
            ]
          },

        }
      }
      
      console.log(`Sending data to Notion`)
      const response = await notion.pages.create( data )
      console.log(response)
}

createNotionPage();

console.log(process.env.NOTION_API_KEY);