/**
 * @param {number} turnedOn
 * @return {string[]}
 */
let HOURS = [1, 2, 4, 8];
let MINUTES = [1, 2, 4, 8, 16, 32];

var readBinaryWatch = function (num) {
  let res = [];

  let combine = (arr, num) => {
    if (num === 0) {
      return [0];
    }
    let res = [];
    let helper = (start, prevCount, prevSum) => {
      if (prevCount === num) {
        res.push(prevSum);
        return;
      }

      for (let i = start; i < arr.length; i++) {
        let cur = arr[i];
        helper(i + 1, prevCount + 1, prevSum + cur);
      }
    };
    helper(0, 0, 0);
    return res;
  };

  for (let i = 0; i <= num; i++) {
    let hours = combine(HOURS, i);
    let minutes = combine(MINUTES, num - i);

    for (let hour of hours) {
      if (hour > 11) continue;
      for (let minute of minutes) {
        if (minute > 59) {
          continue;
        }
        res.push(`${hour}:${padLeft(minute)}`);
      }
    }
  }
  return res;
};

function padLeft(num) {
  let str = num.toString();
  if (str.length === 1) {
    str = `0${str}`;
  }
  return str;
}

var readBinaryWatch = function (num) {
  // 拿到各种组合情况
  let commonResult = (list, maxNum) => {
    if (maxNum === 0) {
      return [[0]];
    }
    let res = [];
    let helper = (index, pre) => {
      for (let dig = index; dig < list.length; dig++) {
        let cur = pre.concat(list[dig]);
        if (cur.length === maxNum) {
          res.push(cur);
          // return
        }
        helper(dig + 1, cur);
      }
    };
    helper(0, []);
    return res;
  };
  // var getHourSize = commonResult(HOURS, 11)
  // var getHourSize = commonResult(HOURS, 3)
  // var getMinSize = commonResult(MINUTES, 3)
  // getMinSize = getMinSize.filter((item) => {
  //   return getSum(item) <= 59
  // })
  // getHourSize = getHourSize.filter((item) => {
  //   return getSum(item) <= 11
  // })
  let res = [];
  for (let i = 0; i <= num; i++) {
    let j = num - i;
    let getHourSize = commonResult(HOURS, i);
    let getMinSize = commonResult(MINUTES, j);
    console.log("getHourSize", JSON.stringify(getHourSize));
    console.log("getMinSize", JSON.stringify(getMinSize));
    // getMinSize = getMinSize.filter((item) => {
    //   return getSum(item) <= 59
    // })
    // getHourSize = getHourSize.filter((item) => {
    //   return getSum(item) <= 11
    // })
    // console.log("getHourSize", getHourSize, i)
    // console.log("getMinSize", getMinSize, j)

    for (let x = 0; x < getHourSize.length; x++) {
      let hour = getSum(getHourSize[x]);
      if (hour > 11) {
        continue;
      }
      for (let y = 0; y < getMinSize.length; y++) {
        let minute = getSum(getMinSize[y]);
        if (minute > 59) {
          continue;
        }
        res.push(`${hour}:${padLeft(minute)}`);
      }
    }
  }

  // for (let x = 0; x < getHourSize.length; x++) {
  //   let hour = getSum(getHourSize[x])
  //   if (hour > 11) {
  //     continue
  //   }
  //   for (let y = 0; y < getMinSize.length; y++) {
  //     let minute = getSum(getMinSize[y])
  //     if (minute > 59) {
  //       continue
  //     }
  //     res.push(`${hour}:${padLeft(minute)}`)
  //   }
  // }

  console.log("res", res);

  return res;
};

var getSum = (arr) => {
  return arr.reduce((pre, item) => pre + item, 0);
};

readBinaryWatch(1);
