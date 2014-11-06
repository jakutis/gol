'use strict';

describe("GOL", function() {
    var game;

    beforeEach(function () {
	game = new Game();
    });

    it('should have game instance', function () {
	expect(game instanceof Game).toBeTruthy();
    });
});