// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  // console.log('dancer',makeDancer.prototype);
  //var dancer = {};

  // use jQuery to create an HTML <span> tag
  // var boundNode = function() {
  //   this.$node = $('<span class="dancer"></span>');
  // }.bind(makeDancer);
  // boundNode();
  this.$node = $('<span class="dancer"></span>');
  var a = this.step.bind(makeBlinkyDancer);
  console.log('this is a', a)

  this.step.call(makeDancer, timeBetweenSteps, a);


  this.setPosition(top,left);
  //return dancer;
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  // console.log('css', this)
  this.$node.css(styleSettings);
};

makeDancer.prototype.step = function(timeBetweenSteps) {
  var a = this.step.bind(makeBlinkyDancer);
  console.log('this is a', a)
  //var newStep = this.step.bind(makeBlinkyDancer);
  //var newStep = this.step.bind(makeBlinkyDancer);
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // var boundNode = function() {
  //   this.step;
  //   console.log('inside bound', this)
  // }.bind(makeDancer);
  console.log('from blinkydancer', this);
  setTimeout(a.step, timeBetweenSteps);
  //this.step.bind(makeDancer);
};