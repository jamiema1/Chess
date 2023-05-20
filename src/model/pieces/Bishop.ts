import {IPiece} from "./Piece";
import {Position} from "../Position";
import {Board} from "../Board";
import {Colour} from "../Colour";

export class Bishop extends IPiece {


	constructor(position: Position, colour: Colour, board: Board) {
		super(position, colour, board);
	}

	protected endPositions(): Position[] {
		return this.endPositionsUpLeft()
			.concat(
				this.endPositionsUpRight(),
				this.endPositionsDownRight(),
				this.endPositionsDownLeft()
			);
	}

	private endPositionsUpLeft(): Position[] {

		let file = this.position.file;
		let rank = this.position.rank;

		let positions: Position[] = [];

		file--;
		rank++;
		while (rank < 9 && file > 0) {
			if (this.board.board[file][rank] !== null) {
				if (this.board.board[file][rank]?.colour !== this.colour) {
					positions.push(new Position(file, rank));
				}
				break;
			}

			positions.push(new Position(file, rank));
			file--;
			rank++;
		}

		return positions;
	}

	private endPositionsUpRight(): Position[] {
		return [];
	}

	private endPositionsDownRight(): Position[] {
		return [];
	}

	private endPositionsDownLeft(): Position[] {
		return [];
	}


	public print(): string {
		switch (this.colour) {
			case Colour.WHITE:
				return "Bw";
			case Colour.BLACK:
				return "Bb";
		}
	}
}
