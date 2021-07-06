// https://api.github.com/repos/mikosramek/miko-queue/branches/master
const axios = require('axios');
const _get = require('lodash.get');

const getBranchDetails = async (org, repo, branch) => {
  try {
    const data = (await axios.get(`https://api.github.com/repos/${org}/${repo}/branches/${branch}`)).data;
    const commit = _get(data, 'commit', {});
    const author = _get(commit, 'author', {});
    return {
      sha : _get(commit, 'sha', 'error - sha'),
      authorName : _get(author, 'login', 'error - author.login'),
      message : _get(commit, 'commit.message', 'No update message'),
      commitUrl : _get(commit, 'html_url', null)
    }
  }
  catch (error) {
    console.error('github-api.js@getBranchDetails:', error.message);
    return error;
  }
}

module.exports = { getBranchDetails };
