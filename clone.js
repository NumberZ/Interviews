function shodowCopy(obj) {
  let result = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}


function deepCloneV1(obj) {
  if (!isObject(obj)) return obj;
  let result = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object') {
        result[key] = deepClone(obj[key]);
      } else {
        result[key] = obj[key];
      }
    }
  }
  return result;
}

function cloneJSON(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function deepCloneV2(o) {
  const copyedObjcts = [];
  function _deepClone(target) {
    if (!isObject(target)) return target;
    for (let i = 0; i < copyedObjcts.length; i++) {
      if (copyedObjcts[i].target === target) {
        return copyedObjcts[i].copyTarget;
      }
    }
    let obj = {};
    if (Array.isArray(target)) {
      obj = [];
    }
    copyedObjcts.push({
      target,
      copyTarget: obj
    });
    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        obj[key] = _deepClone(target[key]);
      }
    }
    return obj;
  }
  return _deepClone(o);
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

var a = {
  arr:[1,2,3,{key:'123'}],//数组测试
};
a.self = a;//循环引用测试
a.common1 = {name:'ccc'};
a.common2 = a.common1;//相同引用测试
var c = deepCloneV2(a);
c.common1.name = 'changed';
console.log(a);
console.log(c);
