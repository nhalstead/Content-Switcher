/*!
 * Switch Text JavaScript Library v1.0.1
 * https://github.com/nhalstead/Content-Switcher
 *
 * Copyright Noah Halstead and other contributors
 * Released under the MIT license
 *
 * Date: 2017-12-24
 */
function contentSwitcher(className, timeSwitch, list){
  this.className = className;
  this.clockTime = timeSwitch;
  this.items     = list;
  this.clockHold = null;

  // Start the Interval for the Switching Action
  this.startSwitching = function(){
    this.clockHold = setInterval( function(inClassName, inItems){
      console.log("Switch Content for: " + inClassName);
      var el = document.getElementsByClassName(inClassName);
      for (var key in el) {
        let e = el[key];
        let n = inItems[Math.floor(Math.random()*inItems.length)];
        e.innerHTML = n;
      }
    } , this.clockTime, this.className, this.items);
  };

  // Clear the setInterval
  this.stopSwitching = function(){
    clearInterval(this.clockHold);
  };

  this.add = function(itm){
    this.items.push(itm);
    this.stopSwitching();
    this.startSwitching();
  }
}
