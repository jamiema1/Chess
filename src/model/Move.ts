import {Position} from "./Position";
import {Colour} from "./Colour";

export class Move {
	private readonly _startPosition: Position;
	private readonly _endPosition: Position;
	private readonly _colour: Colour;


	constructor(startPosition: Position, endPosition: Position, colour: Colour) {
		this._startPosition = startPosition;
		this._endPosition = endPosition;
		this._colour = colour;
	}

	public get startPosition(): Position {
		return this._startPosition;
	}

	public get endPosition(): Position {
		return this._endPosition;
	}

	public get colour(): Colour {
		return this._colour;
	}
}
