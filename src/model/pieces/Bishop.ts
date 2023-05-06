import {IPiece} from "./Piece";
import {Position} from "../Position";
import {Board} from "../Board";
import {Colour} from "../Colour";

export class Bishop extends IPiece {


	constructor(position: Position, colour: Colour, board: Board) {
		super(position, colour, board);
	}

	protected endPositions(): Position[] {
		return [];
	}


	public print(): string {
		return "B";
	}
}
