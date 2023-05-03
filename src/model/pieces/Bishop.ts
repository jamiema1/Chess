import {IPiece} from "./Piece";
import {Position} from "../Position";
import {Board} from "../Board";
import {Colour} from "../Colour";

export class Bishop extends IPiece {

	constructor(position: Position, colour: Colour) {
		super(position, colour);
	}

	public move(board: Board, endPosition: Position) {
		return;
	}

	protected legalMove(board: Board, endPosition: Position): boolean {
		return false;
	}

	protected allEndPositions(board: Board): Position[] {
		return [];
	}

	protected changePieces(board: Board, endPosition: Position): void {
		return;
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
