const { insert } = require("./insert");
const { get } = require("./get");
const { update } = require("./update");
const { remove } = require("./remove");

exports.userController = { insert, get, update, remove };
