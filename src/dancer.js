// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  // console.log('dancer',makeDancer.prototype);
  //var dancer = {};
  debugger
  // use jQuery to create an HTML <span> tag
  // var boundNode = function() {
  //   this.$node = $('<span class="dancer"></span>');
  // }.bind(makeDancer);
  // boundNode();
  this.$node = $('<span class="dancer"></span>');


  this.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    var boundNode = function() {
      this.step;
      console.log('inside bound', this)
    }.bind(makeDancer);

    // console.log(this)
    setTimeout(boundNode(), timeBetweenSteps);
    //this.step.bind(makeDancer);
  };
  this.step();

  // dancer.setPosition = function(top, left) {
  //   // Use css top and left properties to position our <span> tag
  //   // where it belongs on the page. See http://api.jquery.com/css/
  //   //
  //   var styleSettings = {
  //     top: top,
  //     left: left
  //   };
  //   dancer.$node.css(styleSettings);
  // };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  //var boundSetPosition = makeDancer.prototype.setPosition.bind(makeDancer)
  //boundSetPosition(top, left);

  this.setPosition(top,left)
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