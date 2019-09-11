var makeShakyDancer = function(top, left, timeBetweenSteps) {


  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="shakyDancer"></span>');
  this.setPosition(top, left);
};

makeShakyDancer.prototype = Object.create(makeDancer.prototype);
makeShakyDancer.prototype.constructor = makeShakyDancer;

makeShakyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step

  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.


  this.$node.animate({left: '+=5%'}, 'fast');
  this.$node.animate({left: '-=5%'}, 'fast');

};
