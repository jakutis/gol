'use strict';

describe("GOL", function() {
  var game;

  beforeEach(function () {
    game = new Game();
  });

  it('should have game instance', function () {
    expect(game instanceof Game).toBeTruthy();
  });

  it('should have matrix generator', function () {
    expect(typeof game.generateMatrix).toBe('function');
  });

  it('should have matrix getter', function() {
    expect(typeof game.getMatrix).toBe('function');
  });

  it('should have render', function() {
    expect(typeof game.render).toBe('function');
  });

  it('should have alive neighbours counter', function() {
    expect(typeof game.getAliveNeighbourCount).toBe('function');
  });

  it('should have canvas creator', function() {
    expect(typeof game.createCanvas).toBe('function');
  });

  it('should have ticker', function() {
    expect(typeof game.tick).toBe('function');
  });

  it('should have runner', function() {
    expect(typeof game.run).toBe('function');
  });

  it('should run without exception', function() {
    game.run();
  });
});