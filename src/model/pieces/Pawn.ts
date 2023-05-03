import {IPiece, Piece} from "./Piece";
import {Position} from "../Position";
import {Colour} from "../Colour";
import {Board} from "../Board";
import {IllegalMoveError} from "../errors/IllegalMoveError";
import {Move} from "../Move";

export class Pawn extends IPiece {

	constructor(position: Position, colour: Colour) {
		super(position, colour);
	}

	public move(board: Board, endPosition: Position): void {
		if(!this.legalMove(board, endPosition)) {
			throw new IllegalMoveError("Illegal move");
		}

		this.changePieces(board, endPosition);
	}

	public changePieces(board: Board, endPosition: Position): void {
		board.board[super.position.file][super.position.rank] = null;
		super.position = endPosition;
		board.board[endPosition.file][endPosition.rank] = this;
	}

	public legalMove(board: Board, endPosition: Position): boolean {
		const allPossiblePositions: Position[] = this.allPossibleEndPositions(board);
		let legalMove: boolean = false;

		for (const position of allPossiblePositions) {
			if (JSON.stringify(position) === JSON.stringify(endPosition)) {
				legalMove = true;
				break;
			}
		}
		return legalMove;
	}

	public allPossibleEndPositions(board: Board): Position[] {

		const rank: number = this.position.rank;
		const file: number = this.position.file;
		const moveOneUp: Position = new Position(file, rank + 1);
		const moveTwoUp: Position = new Position(file, rank + 2);
		const moveOneDown: Position = new Position(file, rank - 1);
		const moveTwoDown: Position = new Position(file, rank - 2);

		const Up: Piece = board.board[file][rank + 1];
		const Down: Piece = board.board[file][rank - 1];
		const diagonalUpLeft: Piece = board.board[file - 1][rank + 1];
		const diagonalUpRight: Piece = board.board[file + 1][rank + 1];
		const diagonalDownLeft: Piece = board.board[file - 1][rank - 1];
		const diagonalDownRight: Piece = board.board[file + 1][rank - 1];
		const moveDiagonalUpLeft: Position = new Position(file - 1, rank + 1);
		const moveDiagonalUpRight: Position = new Position(file + 1, rank + 1);
		const moveDiagonalDownLeft: Position = new Position(file - 1, rank - 1);
		const moveDiagonalDownRight: Position = new Position(file + 1, rank - 1);

		let allPositions: Position[] = [];
		switch (this.colour) {
			case Colour.WHITE:
				if (rank === 2) {
					allPositions.push(moveOneUp, moveTwoUp);
				}
				if (rank === 8) {
					break;
				}
				if (file > 0 && diagonalUpLeft !== null && diagonalUpLeft.colour !== this.colour) {
					allPositions.push(moveDiagonalUpLeft);
				}
				if (file < 9 && diagonalUpRight !== null && diagonalUpRight.colour !== this.colour) {
					allPositions.push(moveDiagonalUpRight);
				}
				if (Up === null) {
					allPositions.push(moveOneUp);
				}
				break;
			case Colour.BLACK:
				if (rank === 7) {
					allPositions.push(moveOneDown, moveTwoDown);
				}
				if (rank === 1) {
					break;
				}
				if (file > 0 && diagonalDownLeft !== null && diagonalDownLeft.colour !== this.colour) {
					allPositions.push(moveDiagonalDownLeft);
				}
				if (file < 9 && diagonalDownRight !== null && diagonalDownRight.colour !== this.colour) {
					allPositions.push(moveDiagonalDownRight);
				}
				if (Down === null) {
					allPositions.push(moveOneDown);
				}
				break;
		}

		return allPositions;
	}


	public print(): string {
		return "P";
	}

}
