import {IPiece} from "./Piece";
import {Position} from "../Position";
import {Colour} from "../Colour";
import {Board} from "../Board";

export class Knight extends IPiece {

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
		return "N";
	}
}
