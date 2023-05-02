import {Position} from "../Position";
import {Colour} from "../Colour";
import {Board} from "../Board";

// captured pieces have position (0,0)
export abstract class Piece {

	// private _position: Position;
	private _colour: Colour;

	protected constructor(colour) {
		this._colour = colour;
	}

	public abstract move(board: Board, startPosition: Position, endPosition: Position): void;
    public abstract allPossibleMoves(): Position[];

    public get colour(): Colour {
    	return this._colour;
    }

}
