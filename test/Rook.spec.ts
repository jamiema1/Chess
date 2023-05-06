import {beforeEach} from "mocha";
import {Board} from "../src/model/Board";
import {Move} from "../src/model/Move";
import {Position} from "../src/model/Position";
import {Colour} from "../src/model/Colour";
import {Rook} from "../src/model/pieces/Rook";
import {expect} from "chai";
import {IllegalMoveError} from "../src/model/errors/IllegalMoveError";
import {fail} from "assert";

describe("Rook Tests", function () {

	let board: Board;

	const a1 = new Position(1,1);
	const d4 = new Position(4,4);

	beforeEach(function () {
		board = new Board();
	});

	describe("Capture Tests", function () {

		it("d4", function () {


			board.addPiece(d4, new Rook(d4, Colour.WHITE, board));
			board.addPiece(new Position(3,4), new Rook(d4, Colour.BLACK, board));
			try{
				board.move(new Move(d4, new Position(2,4), Colour.WHITE));
				fail("IllegalMoveError");
			} catch(e) {
				expect((e as IllegalMoveError).message).equal("IllegalMoveError: Illegal move");
			}
			board.move(new Move(d4, new Position(3,4), Colour.WHITE));
			board.removePiece(new Position(3,4));

		});
	});

	describe("Movement Tests", function () {
		
		it("a1", function () {

			board.addPiece(a1, new Rook(a1, Colour.WHITE, board));
			try{
				board.move(new Move(a1, new Position(1,0), Colour.WHITE));
				fail("IllegalMoveError");
			} catch(e) {
				expect((e as IllegalMoveError).message).equal("IllegalMoveError: Illegal move");
			}

			board.addPiece(a1, new Rook(a1, Colour.WHITE, board));
			board.move(new Move(a1, new Position(1,8), Colour.WHITE));
			board.removePiece(new Position(1,8));

			board.addPiece(a1, new Rook(a1, Colour.WHITE, board));
			try{
				board.move(new Move(a1, new Position(1,9), Colour.WHITE));
				fail("IllegalMoveError");
			} catch(e) {
				expect((e as IllegalMoveError).message).equal("IllegalMoveError: Illegal move");
			}


			board.addPiece(a1, new Rook(a1, Colour.WHITE, board));
			try{
				board.move(new Move(a1, new Position(0,1), Colour.WHITE));
				fail("IllegalMoveError");
			} catch(e) {
				expect((e as IllegalMoveError).message).equal("IllegalMoveError: Illegal move");
			}

			board.addPiece(a1, new Rook(a1, Colour.WHITE, board));
			board.move(new Move(a1, new Position(8,1), Colour.WHITE));
			board.removePiece(new Position(8,1));

			board.addPiece(a1, new Rook(a1, Colour.WHITE, board));
			try{
				board.move(new Move(a1, new Position(9,1), Colour.WHITE));
				fail("IllegalMoveError");
			} catch(e) {
				expect((e as IllegalMoveError).message).equal("IllegalMoveError: Illegal move");
			}
		});


		it("d4", function () {

			board.addPiece(d4, new Rook(d4, Colour.WHITE, board));
			try{
				board.move(new Move(d4, new Position(4,0), Colour.WHITE));
				fail("IllegalMoveError");
			} catch(e) {
				expect((e as IllegalMoveError).message).equal("IllegalMoveError: Illegal move");
			}

			board.addPiece(d4, new Rook(d4, Colour.WHITE, board));
			board.move(new Move(d4, new Position(4,1), Colour.WHITE));
			board.removePiece(new Position(4,1));

			board.addPiece(d4, new Rook(d4, Colour.WHITE, board));
			board.move(new Move(d4, new Position(4,8), Colour.WHITE));
			board.removePiece(new Position(4,8));

			board.addPiece(d4, new Rook(d4, Colour.WHITE, board));
			try{
				board.move(new Move(d4, new Position(4,9), Colour.WHITE));
				fail("IllegalMoveError");
			} catch(e) {
				expect((e as IllegalMoveError).message).equal("IllegalMoveError: Illegal move");
			}


			board.addPiece(d4, new Rook(d4, Colour.WHITE, board));
			try{
				board.move(new Move(d4, new Position(0,4), Colour.WHITE));
				fail("IllegalMoveError");
			} catch(e) {
				expect((e as IllegalMoveError).message).equal("IllegalMoveError: Illegal move");
			}

			board.addPiece(d4, new Rook(d4, Colour.WHITE, board));
			board.move(new Move(d4, new Position(1,4), Colour.WHITE));
			board.removePiece(new Position(1,4));

			board.addPiece(d4, new Rook(d4, Colour.WHITE, board));
			board.move(new Move(d4, new Position(8,4), Colour.WHITE));
			board.removePiece(new Position(8,4));

			board.addPiece(d4, new Rook(d4, Colour.WHITE, board));
			try{
				board.move(new Move(d4, new Position(9,4), Colour.WHITE));
				fail("IllegalMoveError");
			} catch(e) {
				expect((e as IllegalMoveError).message).equal("IllegalMoveError: Illegal move");
			}
		});
	});
});
