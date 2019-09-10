var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

  // console.log('test of prototype assignment:', makeBlinkyDancer.prototype);
  console.log(1);

  makeDancer.call(this, top, left, timeBetweenSteps);
  console.log(4);
  //this.oldStep = makeDancer.prototype.step;
  //console.log('this is old step', this.oldStep)
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function


  //console.log(oldStep)
  //console.log(this)



  //this.step();
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  //console.log(' step' ,this.oldStep)
  //this.oldStep();
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};
