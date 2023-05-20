import {IPiece, Piece} from "./Piece";
import {Position} from "../Position";
import {Colour} from "../Colour";
import {Board} from "../Board";

export class Pawn extends IPiece {


	constructor(position: Position, colour: Colour, board: Board) {
		super(position, colour, board);
	}

	protected endPositions(): Position[] {
		return [];
	}

	protected allBlackEndPositions(board: Board, file: number, rank: number) {
		let allBlackPositions: Position[] = [];

		const Down: Piece = board.board[file][rank - 1];
		const diagonalDownLeft: Piece = board.board[file - 1][rank - 1];
		const diagonalDownRight: Piece = board.board[file + 1][rank - 1];
		const moveOneDown: Position = new Position(file, rank - 1);
		const moveTwoDown: Position = new Position(file, rank - 2);
		const moveDiagonalDownLeft: Position = new Position(file - 1, rank - 1);
		const moveDiagonalDownRight: Position = new Position(file + 1, rank - 1);
		if (rank === 7) {
			allBlackPositions.push(moveOneDown, moveTwoDown);
		}
		if (rank > 1 && Down === null) {
			allBlackPositions.push(moveOneDown);
		}
		if (file > 1 && diagonalDownLeft !== null && diagonalDownLeft.colour !== this.colour) {
			allBlackPositions.push(moveDiagonalDownLeft);
		}
		if (file < 8 && diagonalDownRight !== null && diagonalDownRight.colour !== this.colour) {
			allBlackPositions.push(moveDiagonalDownRight);
		}
		return allBlackPositions;
	}

	protected allWhiteEndPositions(file: number, rank: number, board: Board): Position[] {
		let allWhitePositions: Position[] = [];
		const Up: Piece = board.board[file][rank + 1];
		const diagonalUpLeft: Piece = board.board[file - 1][rank + 1];
		const diagonalUpRight: Piece = board.board[file + 1][rank + 1];
		const moveOneUp: Position = new Position(file, rank + 1);
		const moveTwoUp: Position = new Position(file, rank + 2);
		const moveDiagonalUpLeft: Position = new Position(file - 1, rank + 1);
		const moveDiagonalUpRight: Position = new Position(file + 1, rank + 1);
		if (rank === 2) {
			allWhitePositions.push(moveOneUp, moveTwoUp);
		}
		if (rank < 8 && Up === null) {
			allWhitePositions.push(moveOneUp);
		}
		if (file > 1 && diagonalUpLeft !== null && diagonalUpLeft.colour !== this.colour) {
			allWhitePositions.push(moveDiagonalUpLeft);
		}
		if (file < 8 && diagonalUpRight !== null && diagonalUpRight.colour !== this.colour) {
			allWhitePositions.push(moveDiagonalUpRight);
		}
		return allWhitePositions;
	}

	public print(): string {
		switch (this.colour) {
			case Colour.WHITE:
				return "Pw";
			case Colour.BLACK:
				return "Pb";
		}
	}

}
