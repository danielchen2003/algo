const TreeNode = function () {
  this.next = [] //指向子节点的指针数组,每个结点最多有26个子结点,也就是说数组长度最多为26
  this.isEnd = false //标示此位置是某个字符串的结尾
}
var Trie = function () {
  this.root = new TreeNode() //初始化前缀树
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root
  for (let ch of word) {
    //找有没有指向字符ch的边
    if (!node.next[ch]) {
      //没有的话就新建
      node.next[ch] = new TreeNode()
    }
    node = node.next[ch] //处理下一个字符
  }
  node.isEnd = true //插入完成，标示此单词在这个位置结束
  return null
}

/**
 * @param {string} word
 * @return {boolean}
 */

Trie.prototype.searchPrefix = function (prefix) {
  //找prefix是否存在于前缀树里
  let node = this.root
  for (let ch of prefix) {
    if (!node.next[ch]) {
      //没有链接ch的边
      return null //结束
    } else node = node.next[ch] //找下一个
  }
  return node
}
Trie.prototype.search = function (word) {
  let node = this.searchPrefix(word)
  return node !== null && node.isEnd === true //如果node存在，说明在前缀树里找到了word，如果isEnd等于true，说明插入时是把word当作一个完整的单词插入的
}

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.searchPrefix(prefix)
  return node !== null //如果node存在，说明在前缀树里找到了word
}
