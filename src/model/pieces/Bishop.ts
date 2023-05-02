import {Piece} from "./Piece";
import {Position} from "../Position";

export class Bishop extends Piece {

	constructor(colour) {
		super(colour);
	}

	public allPossibleMoves(): Position[] {
		return [];
	}
}
