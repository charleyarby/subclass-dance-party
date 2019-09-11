var makeJumpyDancer = function(top, left, timeBetweenSteps) {



  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="jumpyDancer"></span>');
  this.setPosition(top, left);


};

makeJumpyDancer.prototype = Object.create(makeDancer.prototype);
makeJumpyDancer.prototype.constructor = makeJumpyDancer;

makeJumpyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step

  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.


  this.$node.animate({top: '-=20%'}, 'slow');
  this.$node.animate({top: '+=20%'}, 'slow');

};
