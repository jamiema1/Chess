import {IPiece} from "./Piece";
import {Position} from "../Position";
import {Board} from "../Board";
import {Colour} from "../Colour";

export class Bishop extends IPiece {

	constructor(position: Position, colour: Colour) {
		super(position, colour);
	}

	protected allBlackEndPositions(board: Board, file: number, rank: number): Position[] {
		return [];
	}

	protected allWhiteEndPositions(file: number, rank: number, board: Board): Position[] {
		return [];
	}

	public print(): string {
		return "B";
	}
}
