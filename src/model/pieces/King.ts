import {Piece} from "./Piece";
import {Position} from "../Position";
import {Colour} from "../Colour";

export class King extends Piece {

	constructor(colour) {
		super(colour);
	}

	public allPossibleMoves(): Position[] {
		return [];
	}
}
