/**
 * 给定一个CSV文件，格式是 “some_name|some_address|some_phone|some_job”，
 * 要求输出Json format “{name:some_name, address:some_addres,phone:some_phone, job:some_job}”。
 */

function parseCSV(csv) {
  let result = '';
  const objects = csv.split('|').map(item => {
    const a = item.split('_');
    return {
      key: a[1],
      value: item
    };
  });
  objects.forEach((obj, index) => {
    const isEnd = index === objects.length - 1;
    result = result + obj.key + ':' + obj.value + (isEnd ? '' : ', ');
  });
  return `{${result}}`;
}

// console.log(parseCSV('some_name|some_address|some_phone|some_job'));

/*
John,Smith,john.smith@gmail.com,Los Angeles,1
Jane,Roberts,janer@msn.com,"San Francisco, CA",0
"Alexandra ""Alex""",Menendez,alex.menendez@gmail.com,Miami,1
"""Alexandra Alex"""
John|Smith|john.smith@gmail.com|Los Angeles|1
Jane|Roberts|janer@msn.com|San Francisco, CA|0
Alexandra "Alex"|Menendez|alex.menendez@gmail.com|Miami|1
"Alexandra Alex"
*/
/**
 * 1.对于, 转 |
 * 2.如果,在""内部 去掉引号
 * 3.If there are double quotes, remove one. e.g. "Alexandra ""Alex""" => Alexandra "Alex". 
Note that """Alexandra Alex""" becomes "Alexandra Alex" because we first remove the outer-most quote, and then remove one quote of the double quote.
 */
/**
 * 
 * @param {*} str 
 * 解题思路: 有限状态机器 
 * 三个状态
 * QUOTE_START
 * QUPTE_IN_QUOTE
 * NO_QUPTE
 * 
 * 1.QUOTE遇到"后的下一个状态是QUOTE IN QUOTE 
 * 2.QUOTE IN QUOTE遇到"的下一个状态是NO_QUOTE
 * 3.QUOTE IN QUOTE遇到"的下一个状态是QUOTE IN START
 */
function parseCSV2(str) {
  const itemList = str.split('\n');
  const parsedData = itemList.map(item => {
    return convertToCsv(item);
  });
  return parsedData.reduce((pre, cur, index) => {
    return pre + cur + '\n';
  }, '');
  function convertToCsv(data) {
    const QUOTE_START = 'QUOTE_START';
    const QUOTE_IN_QUOTE = 'QUOTE_IN_QUOTE';
    const NO_QUOTE = 'NO_QUOTE';
    let status = NO_QUOTE;
    let result = '';
    for (let i = 0; i < data.length; i++) {
      let char = data[i];
      switch (status) {
        case NO_QUOTE: {
          if (char === '"') {
            status = QUOTE_START;
            continue;
          }
          if (char === ',') char = '|';
          break;
        }
        case QUOTE_START:
          if (char === '"') {
            status = QUOTE_IN_QUOTE;
            continue;
          }
          break;
        case QUOTE_IN_QUOTE:
          if (char === '"') status = QUOTE_START;
          if (char === ',') {
            char = '|';
            status = NO_QUOTE;
          }
          break;
      }
      result = result + char;
    }
    return result;
  }
}

console.log(
  parseCSV2(
    'John,Smith,john.smith@gmail.com,Los Angeles,1\nJane, Roberts, janer@msn.com, "San Francisco, CA", 0\n"Alexandra ""Alex""", Menendez, alex.menendez@gmail.com, Miami, 1\n"""Alexandra Alex"""'
  )
);
