// 工具函数
const isFunction = fn => {
  return typeof fn === 'function';
};

// 状态定义
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class CustomPromise {
  static resolve(value) {
    if (value instanceof CustomPromise) return value;
    return new Promise(resolve => resolve(value));
  }
  // let [i, p] of list.entries()
  static all(list) {
    return new CustomPromise((resolve, reject) => {
      let count = 0;
      const values = [];
      for (let [i, p] of list.entries()) {
        this.resolve(p).then(
          res => {
            value[i] = res;
            count++;
            if (count === list.length) resolve(values);
          },
          err => {
            reject(err);
          }
        );
      }
    });
  }

  static race(list) {
    return new CustomPromise((resolve, reject) => {
      for (let p of list) {
        this.resolve(p).then(
          res => {
            resolve(res);
          },
          err => {
            reject(err);
          }
        );
      }
    });
  }

  static finally(cb) {
    return this.then(
      value => CustomPromise.resolve(cb()).then(() => value),
      reason => CustomPromise.resolve(cb()).then(() => throw reason)
    );
  }

  constructor(handle) {
    if (!isFunction(handle)) {
      throw new Error('Promise must accept a function as a parameter');
    }
    this._value = null;
    this._status = PENDING;

    // 成功回调队列
    this._fulfilledQueues = [];
    // 失败回调队列
    this._rejectQueues = [];

    try {
      handle(this._resolve.bind(this), this._reject.bind(this));
    } catch (err) {
      this._reject(err);
    }
  }

  _resolve(val) {
    if (this._status !== PENDING) return;

    const runFulfilled = value => {
      let cb;
      while ((cb = this._fulfilledQueues.shift())) {
        cb(value);
      }
    };

    const runRejected = error => {
      let cb;
      while ((cb = this._rejectQueues.shift())) {
        cb(error);
      }
    };
    // 如果参数是promise
    if (val instanceof CustomPromise) {
      val.then(
        value => {
          this._value = value;
          this._status = FULFILLED;
          runFulfilled(value);
        },
        err => {
          this._value = err;
          this._status = REJECTED;
          runRejected(err);
        }
      );
    } else {
      this._value = val;
      this._status = FULFILLED;
      runFulfilled(val);
    }
  }

  _reject(val) {
    if (this._status !== PENDING) return;
    this._value = val;
    this._status = REJECTED;
    let cb;
    while ((cb = this._rejectQueues.shift())) {
      cb(val);
    }
  }

  then(onFulfilled, onRejected) {
    const { _value, _status } = this;
    return new CustomPromise((onFulfilledNext, onRejectNext) => {
      let fulfilled = value => {
        try {
          // onFulfilled是否是函数
          if (!isFunction(onFulfilled)) {
            onFulfilledNext(value);
          } else {
            // 执行函数
            let res = onFulfilled(value);
            // 函数返回值是否是promise
            if (res instanceof CustomPromise) {
              res.then(onFulfilledNext, onRejectNext);
            } else {
              onFulfilledNext(res);
            }
          }
        } catch (err) {
          onRejectNext(err);
        }
      };

      let reject = error => {
        try {
          if (!isFunction(onRejected)) {
            onRejectNext(error);
          } else {
            let res = onRejected(error);
            if (res instanceof CustomPromise) {
              res.then(onFulfilledNext, onRejectNext);
            } else {
              onRejectNext(res);
            }
          }
        } catch (err) {
          onRejectNext(err);
        }
      };

      switch (_status) {
        case PENDING:
          this._fulfilledQueues.push(fulfilled);
          this._rejectQueues.push(reject);
          break;
        case FULFILLED:
          fulfilled(_value);
          break;
        case REJECTED:
          reject(_value);
          break;
      }
    });
  }

  catch(fn) {
    return this.then(undefined, fn);
  }
}

module.exports = CustomPromise;

/**
 * 1.定义三种状态和isFunction工具函数
 * 2.构造函数中执行handle ⚠️: 1.bind 2.try {} catch {}
 * 3.this._resolve 和 this._reject  改变状态
 * 4.then switch status
 */
