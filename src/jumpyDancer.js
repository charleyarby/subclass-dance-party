var makeJumpyDancer = function(top, left, timeBetweenSteps) {



  makeDancer.call(this, top, left, timeBetweenSteps);


};

makeJumpyDancer.prototype = Object.create(makeDancer.prototype);
makeJumpyDancer.prototype.constructor = makeJumpyDancer;

makeJumpyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step

  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  console.log(this)
  this.$node.animate({'this.top': '0px'}, 'fast');
  this.$node.animate({top: '-=200px'}, 'slow');
  this.$node.animate({top: '+=200px'}, 'slow');

};
