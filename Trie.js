let Node = function () {
  this.keys = new Map();
  this.wordEnd = false; 
  this.setEnd = function (value) {  
    this.wordEnd = value;
  };
  this.isEnd = function () { 
    return this.wordEnd;
  };
};
let Trie = function () {
  this.root = new Node();
};
Trie.prototype.insert = function (input) {
  let node = this.root;
  for (let i = 0; i < input.length; i++) {
    if (!node.keys.has(input[i])) {
      let temp = new Node();
      node.keys.set(input[i], temp);
      node = temp;
    } else {
      node = node.keys.get(input[i]);
    }
  }
  node.setEnd(true);
  console.log(this.root);
};
Trie.prototype.isExists = function (word) {
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    if (node.keys.has(word[i])) {
      node = node.keys.get(word[i]);
    } else {
          return false;
    }
  }
  return node.isEnd();
};
Trie.prototype.delete = function (word) {
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    if (node.keys.has(word[i])) {
      node = node.keys.get(word[i]);
    } else {
      return false;
    }
  }  node.setEnd(false);
  return true;
};
Trie.prototype.printAllWords = function () {
   let words = [];
  let node = this.root;
  let search = function (node, str) {
    for (const entry of node.keys.entries()) {
      let char = entry[0]; 
      node = entry[1];
      if (node.isEnd()) {
        words.push(str.concat(char));
      }
      search(node, str.concat(char));
    }
  };
  search(node, ""); 
  return words;
};
const myTrie = new Trie();
myTrie.insert("Jan");
myTrie.insert("Feb");
myTrie.insert("March");
myTrie.insert("Apr");
myTrie.insert("May");
myTrie.insert("Jun");
myTrie.insert("Jul");

console.log("deleted Feb", myTrie.delete("Feb"));
console.log("deleted May", myTrie.delete("May"));
console.log("Exists Feb", myTrie.isExists("Feb"));
console.log("Exists May", myTrie.isExists("May"));
console.log("Exists Apr", myTrie.isExists("Apr"));
console.log("Exists Dec", myTrie.isExists("Dec"));
console.log(myTrie.printAllWords());
