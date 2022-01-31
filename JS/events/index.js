class Events {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    const event = this.events[eventName];
    if(event) {
      event.push(callback);
    } else {
      event = [callback];
    } 
  }

  trigger(eventName) {
    const event = this.events[eventName];
    if(event) {
      for(cb of event) {
        cb();
      } 
    }
  }

  off(eventName) {
    const event = this.events[eventName];
    delete event;
  }
}