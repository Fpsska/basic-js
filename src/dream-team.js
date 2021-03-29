const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if (Array.isArray(members)) {
    let names = members.filter(item => typeof item == "string");
    let sort = names.map(item => item.trim()[0].toUpperCase()).sort();

    return sort.join("");

  } else {
    return false;
  }

};
