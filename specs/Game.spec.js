'use strict';

describe("GOL", function() {
  var game;

  beforeEach(function () {
    game = new Game();
  });

  it('should have game instance', function () {
    expect(game instanceof Game).toBeTruthy();
  });

  it('should have state initalizer', function () {
    expect(typeof game.createState).toBe('function');
  });

  it('should have state getter', function() {
    expect(typeof game.getState).toBe('function');
  });

  it('should have state setter', function() {
    expect(typeof game.getState).toBe('function');
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

  it('ticker should work', function () {
    
  });

  it('should have next state creator', function() {
    expect(typeof game.createNextState).toBe('function');
  });

  it('should have runner', function() {
    expect(typeof game.run).toBe('function');
  });

  it('createState should work', function () {
    expect(function() {
      game.createState(100, 100, 10);
    }).not.toThrow();
  });

  it('createState should return a valid state', function () {
    var height = 100;
    var width = 100;
    var state = game.createState(width, height, 10);
    expect(Array.isArray(state)).toBe(true);
    expect(state.length).toBe(height);
    state.forEach(function(line) {
      expect(line.length).toBe(width);
      expect(Array.isArray(line)).toBe(true)
      line.forEach(function(cell) {
        expect(typeof cell).toBe('boolean');
      });
    });
  });
});
