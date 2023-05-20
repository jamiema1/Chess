import {IPiece} from "./Piece";
import {Position} from "../Position";
import {Colour} from "../Colour";
import {Board} from "../Board";

export class King extends IPiece {


	constructor(position: Position, colour: Colour, board: Board) {
		super(position, colour, board);
	}

	protected endPositions(): Position[] {
		return [];
	}


	public print(): string {
		switch (this.colour) {
			case Colour.WHITE:
				return "Kw";
			case Colour.BLACK:
				return "Kb";
		}
	}
}
