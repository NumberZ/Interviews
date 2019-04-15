//https://davidwalsh.name/javascript-debounce-function

/**
 * 明确两个参数 action delay
 * 1.let 一个 timer
 * 2. context = this; args = arguments;
 * 3.cleatTimeout timer
 * 4.timer = setTimeOut
 */
function debounce(action, delay) {
  let timer = null;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function() {
      action.apply(this, args);
    }, delay);
  };
}

function resizeHandle() { 
  console.log('resize');
}


/**
 * 1.闭包维护一个startTime
 * 2.currentTime = +new Date();
 * 3.判断 currentTime - startTime >= delay
 * 4.startTime = currentTime; 
 */
function throttle(action, delay) {
  let startTime;
  return function () { 
    const currentTime = +new Date();
    if (currentTime - startTime >= delay) { 
      action.apply(this.arguments);
      startTime = currentTime;
    }
  }
}

window.onresize = debounce(resizeHandle, 1000);