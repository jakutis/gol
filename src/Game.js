'use strict';

function Game() {
  
}

Game.prototype._state = null;

Game.prototype.createState = function(width, height, cellSize) {
  var state = [];

  for(var line = 0; line < height; line++) {
    state.push([]);
    for(var col = 0; col < width; col++) {
      state[line].push(false);
    }
  }

  return state;
};

Game.prototype.getState = function() {
  return this._state;
};

Game.prototype.render = function() {
  
};

Game.prototype.getAliveNeighbourCount = function() {
  
};

Game.prototype.createCanvas = function() {
  var canvas = document.createElement('canvas');
  canvas.width = 100;
  canvas.height = 100;
  return canvas;
};

Game.prototype.createNextState = function() {
  // TODO write test first (copy of createState test)
  //var nextState = this.createState();
  //return nextState;
};

Game.prototype.tick = function() {
  // TODO write test first
  //this.setState(this.createNextState());
};

Game.prototype.run = function() {
  this.initializeState();
  var canvas = this.createCanvas();

  document.body.appendChild(canvas);

  var nextFrame = function() {
    window.requestAnimationFrame(function() {
      this.tick();
      this.render(canvas, this.getState());
      nextFrame.call(this);
    }.bind(this));
  };
  nextFrame.call(this);
};
