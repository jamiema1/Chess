import {Piece} from "./Piece";
import {Position} from "../Position";
import {Colour} from "../Colour";

export class Knight extends Piece {

	constructor(colour) {
		super(colour);
	}

	public allPossibleMoves(): Position[] {
		return [];
	}
}
