const TurndownService = require('turndown');
const { JSDOM } = require('jsdom');
const turndownService = new TurndownService();
// import axios
const axios = require('axios');

turndownService.addRule('code blocks', {
  filter: 'pre',
  replacement: function (content, node) {
    return "```\n" + content + "\n```"
  }
})

const getMarkdownFromUrl = async (url) => {
  const response = await axios.get(url);
  const dom = new JSDOM(response.data);
  const article = dom.window.document.querySelector('article');
  // remove article header
  article.querySelector('.pw-post-byline-header').remove();
  const markdown = turndownService.turndown(article);
  return markdown;
};

exports.getMarkdownFromUrl = getMarkdownFromUrl;