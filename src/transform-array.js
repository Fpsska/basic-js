const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error();
    } else {
        let vArr = [];

        for (let j = 0; j < arr.length; j++) {
            switch (arr[j]) {
                case '--discard-next':
                    j++;
                    break;
                case '--discard-prev':
                    (vArr.length && arr[j - 2] != '--discard-next') ? vArr.pop() : vArr;
                    break;
                case '--double-next':
                    (j < arr.length - 1) ? vArr.push(arr[j + 1]) : vArr;
                    break;
                case '--double-prev':
                    (j > 0 && arr[j - 2] != '--discard-next') ? vArr.push(arr[j - 1]) : vArr;
                    break;
                default:
                    vArr.push(arr[j]);
                    break;
            }
        }
        return vArr;
    }

};
