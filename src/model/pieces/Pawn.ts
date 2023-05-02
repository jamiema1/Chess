import {Piece} from "./Piece";
import {Position} from "../Position";
import {Colour} from "../Colour";
import {Board} from "../Board";

export class Pawn extends Piece {

	constructor(colour) {
		super(colour);
	}

	public move(board: Board, startPosition: Position, endPosition: Position) {

	}

	public allPossibleMoves(): Position[] {
		const rank = this.position.rank;
		const file = this.position.file;
		const moveOneUp = new Position(file, rank + 1);
		const moveTwoUp = new Position(file, rank + 2);
		const moveOneDown = new Position(file, rank - 1);
		const moveTwoDown = new Position(file, rank - 2);
		switch (this.colour) {
			case Colour.WHITE:
				if (rank === 2) {
					return [moveOneUp, moveTwoUp];
				}
				if (rank === 8) {
					return [];
				}
				return [moveOneUp];
			case Colour.BLACK:
				if (rank === 7) {
					return [moveOneDown, moveTwoDown];
				}
				if (rank === 1) {
					return [];
				}
				return [moveOneDown];
		}
	}


}
