import {beforeEach} from "mocha";
import {Board} from "../src/model/Board";
import {Move} from "../src/model/Move";
import {Position} from "../src/model/Position";
import {Colour} from "../src/model/Colour";

describe("Board Tests", function () {

	let board: Board;

	beforeEach(function () {
		board = new Board();
	});

	it("Getter Test", function () {
		board.print();
		board.move(new Move(new Position(1,2), new Position(1,4), Colour.WHITE));
		board.print();
		board.move(new Move(new Position(1,7), new Position(1,5), Colour.BLACK));
		board.print();
		board.move(new Move(new Position(1,4), new Position(1,5), Colour.WHITE));
		board.print();

	});
});
