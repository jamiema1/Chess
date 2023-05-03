import {Position} from "../Position";
import {Colour} from "../Colour";
import {Board} from "../Board";

// captured pieces have position (0,0)
export abstract class IPiece {

	private _position: Position;
	private _colour: Colour;

	protected constructor(position: Position, colour: Colour) {
		this._position = position;
		this._colour = colour;
	}

	public get colour(): Colour {
		return this._colour;
	}

	public get position(): Position {
		return this._position;
	}

	public set position(value: Position) {
		this._position = value;
	}

	public abstract move(board: Board, endPosition: Position): void;

	public abstract legalMove(board: Board, endPosition: Position): boolean;

    public abstract allPossibleEndPositions(board: Board): Position[];

	public abstract changePieces(board: Board, endPosition: Position): void;

	public abstract print(): string;

}

export type Piece = IPiece | null;
