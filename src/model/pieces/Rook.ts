import {IPiece, Piece} from "./Piece";
import {Position} from "../Position";
import {Colour} from "../Colour";
import {Board} from "../Board";

export class Rook extends IPiece {

	constructor(position: Position, colour: Colour) {
		super(position, colour);
	}

	public move(board: Board, endPosition: Position) {
		return;
	}

	public legalMove(board: Board, endPosition: Position): boolean {
		return false;
	}

	public allPossibleEndPositions(board: Board): Position[] {
		return [];
	}

	public changePieces(board: Board, endPosition: Position): void {
		return;
	}

	public print(): string {
		return "R";
	}
}
