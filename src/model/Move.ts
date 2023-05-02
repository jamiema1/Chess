import {Position} from "./Position";

export class Move {
	private readonly _startPosition: Position;
	private readonly _endPosition: Position;

	constructor(startPosition: Position, endPosition: Position) {
		this._startPosition = startPosition;
		this._endPosition = endPosition;
	}

	public get startPosition(): Position {
		return this._startPosition;
	}

	public get endPosition(): Position {
		return this._endPosition;
	}
}
