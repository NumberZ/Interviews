/*
 * @lc app=leetcode.cn id=212 lang=javascript
 *
 * [212] 单词搜索 II
 */
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

class TrieTree {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let currenNode = this.root;
    for (let i = 0; i < word.length; i++) {
      if (currenNode.nodes[word[i]]) {
        currenNode = currenNode.nodes[word[i]];
      } else {
        const node = new TrieNode();
        currenNode.nodes[word[i]] = node;
        currenNode = node;
      }
      currenNode.count++;
    }
    currenNode.value = word;
    currenNode.isWord = true;
  }

  startWith(prefix) {
    let currenNode = this.root;
    for (let i = 0; i < prefix.length; i++) {
      if (currenNode.nodes[prefix[i]]) {
        currenNode = currenNode.nodes[prefix[i]];
      } else {
        return false;
      }
    }
    return currenNode.count > 0;
  }
}

function TrieNode(v) {
  this.nodes = {};
  this.count = 0;
  this.value = v;
  this.isWord = false;
}

var findWords = function(board, words) {
  const result = [];
  let row = board.length;
  let col = board[0].length;

  const trie = new TrieTree();
  for (let k = 0; k < words.length; k++) {
    trie.insert(words[k]);
  }


  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (trie.startWith(board[i][j])) {
        dfs(i, j, trie.root, board, result);
      }
    }
  }

  return result.sort((a, b) => {
    return a.charCodeAt() - b.charCodeAt();
  });

  function dfs(i, j, trieNode, board, result) {
    if (!trieNode) return;
    if (trieNode.isWord) {
      result.push(trieNode.value);
    }
    if (i < 0 || i >= board.length) return;
    if (j < 0 || j >= board[0].length) return;
    if (board[i][j] === 0) return;
    const char = board[i][j];
    board[i][j] = 0;
    dfs(i, j + 1, trieNode.nodes[char], board, result);
    dfs(i, j - 1, trieNode.nodes[char], board, result);
    dfs(i + 1, j, trieNode.nodes[char], board, result);
    dfs(i - 1, j, trieNode.nodes[char], board, result);
    board[i][j] = char;
  }
};

console.log(
  findWords(
    [
      ['o', 'a', 'a', 'n'],
      ['e', 't', 'a', 'e'],
      ['i', 'h', 'k', 'r'],
      ['i', 'f', 'l', 'v']
    ],
    ['oath', 'pea', 'eat', 'rain']
  )
);
