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

		it("Rook starts at d4, other pieces", function () {


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

	describe("Movement Tests, no other pieces", function () {

		describe("Rook starts at a1", function () {

			beforeEach(function () {
				board.addPiece(a1, new Rook(a1, Colour.WHITE, board));
			});

			it("a1-a0 - illegal", function () {
				try{
					board.move(new Move(a1, new Position(1,0), Colour.WHITE));
					fail("IllegalMoveError");
				} catch(e) {
					expect((e as IllegalMoveError).message).equal("IllegalMoveError: Illegal move");
				}
			});

			it("a1-a1 - illegal", function () {
				try{
					board.move(new Move(a1, new Position(1,1), Colour.WHITE));
					fail("IllegalMoveError");
				} catch(e) {
					expect((e as IllegalMoveError).message).equal("IllegalMoveError: Illegal move");
				}
			});
			
			it("a1-a8 - legal", function () {
				board.move(new Move(a1, new Position(1,8), Colour.WHITE));
				board.removePiece(new Position(1,8));
			});


			it("a1-a9 - illegal", function () {
				try{
					board.move(new Move(a1, new Position(1,9), Colour.WHITE));
					fail("IllegalMoveError");
				} catch(e) {
					expect((e as IllegalMoveError).message).equal("IllegalMoveError: Illegal move");
				}
			});

			it("a1- 1 - illegal", function () {
				try{
					board.move(new Move(a1, new Position(0,1), Colour.WHITE));
					fail("IllegalMoveError");
				} catch(e) {
					expect((e as IllegalMoveError).message).equal("IllegalMoveError: Illegal move");
				}
			});

			it("a1-h1 - legal", function () {
				board.move(new Move(a1, new Position(8,1), Colour.WHITE));
				board.removePiece(new Position(8,1));
			});

			it("a1-i1 - legal", function () {
				try{
					board.move(new Move(a1, new Position(9,1), Colour.WHITE));
					fail("IllegalMoveError");
				} catch(e) {
					expect((e as IllegalMoveError).message).equal("IllegalMoveError: Illegal move");
				}
			});
		});

		describe("Rook starts at d4", function () {

			beforeEach(function () {
				board.addPiece(d4, new Rook(d4, Colour.WHITE, board));
			});

			it("d4-d0 - illegal", function () {
				try {
					board.move(new Move(d4, new Position(4, 0), Colour.WHITE));
					fail("IllegalMoveError");
				} catch (e) {
					expect((e as IllegalMoveError).message).equal("IllegalMoveError: Illegal move");
				}
			});

			it("d4-d1 - legal", function () {
				board.move(new Move(d4, new Position(4,1), Colour.WHITE));
				board.removePiece(new Position(4,1));
			});


			it("d4-d8 - legal", function () {
				board.move(new Move(d4, new Position(4,8), Colour.WHITE));
				board.removePiece(new Position(4,8));
			});

			it("d4-d9 - illegal", function () {
				try{
					board.move(new Move(d4, new Position(4,9), Colour.WHITE));
					fail("IllegalMoveError");
				} catch(e) {
					expect((e as IllegalMoveError).message).equal("IllegalMoveError: Illegal move");
				}
			});

			it("d4- 4 - illegal", function () {
				try{
					board.move(new Move(d4, new Position(0,4), Colour.WHITE));
					fail("IllegalMoveError");
				} catch(e) {
					expect((e as IllegalMoveError).message).equal("IllegalMoveError: Illegal move");
				}
			});

			it("d4-a4 - legal", function () {
				board.move(new Move(d4, new Position(1,4), Colour.WHITE));
				board.removePiece(new Position(1,4));
			});

			it("d4-h4 - legal", function () {
				board.move(new Move(d4, new Position(8,4), Colour.WHITE));
				board.removePiece(new Position(8,4));
			});

			it("d4-i4 - illegal", function () {
				try{
					board.move(new Move(d4, new Position(9,4), Colour.WHITE));
					fail("IllegalMoveError");
				} catch(e) {
					expect((e as IllegalMoveError).message).equal("IllegalMoveError: Illegal move");
				}
			});
		});
	});
});
