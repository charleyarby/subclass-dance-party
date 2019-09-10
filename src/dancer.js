// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  // console.log('dancer',makeDancer.prototype);
  //var dancer = {};

  // use jQuery to create an HTML <span> tag
  // var boundNode = function() {
  console.log(2);
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  console.log(3);
  this.step();


  this.setPosition(top, left);

};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};

makeDancer.prototype.step = function() {

  //var a = this.step.bind(makeBlinkyDancer)
  console.log(' set timeout this', this);
  console.log(' set timeout this.step', this.step);
  console.log(' set timeout time', this.timeBetweenSteps);
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};