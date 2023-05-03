import {IPiece} from "./Piece";
import {Position} from "../Position";
import {Colour} from "../Colour";
import {Board} from "../Board";

export class Knight extends IPiece {

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
		return "N";
	}
}
