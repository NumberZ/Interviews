class EventEmitter {
  constructor() {
    this.events = {};
    this._maxListeners = 10;
  }

  on(type, listener) {
    if (this.events[type]) {
      this.events[type].push(listener);
      if (
        this._maxListeners !== 0 &&
        this.events[type].length > this._maxListeners
      ) {
        throw new Error('MaxListener');
      }
    } else {
      this.events[type] = [listener];
    }
  }

  emit(type, ...rest) {
    if (this.events[type]) {
      this.events[type].forEach(listener => listener.apply(this, rest));
    }
  }

  off(type, listener) {
    if (this.events[type]) {
      this.events[type] = this.events[type].filter(l => l !== listener);
    }
  }

  once(type, listener) { 
    const wrapListener = (...args) => { 
      listener(args);
      this.off(type, listener);
    }
    this.on(type, listener);
  }
}
