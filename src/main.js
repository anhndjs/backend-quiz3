const _ = require("lodash");
const findOneCoin = require('./Coin')
const handle = require('./ago');
let findone = new findOneCoin([1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1]);
const result = handle(findone.arr, findone.weight)
console.log(result)