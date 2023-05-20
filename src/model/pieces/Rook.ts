import {IPiece} from "./Piece";
import {Position} from "../Position";
import {Colour} from "../Colour";
import {Board} from "../Board";

export class Rook extends IPiece {

	constructor(position: Position, colour: Colour, board: Board) {
		super(position, colour, board);
	}

	protected endPositions(): Position[] {

		return this.endPositionsUp()
			.concat(
				this.endPositionsDown(),
				this.endPositionsLeft(),
				this.endPositionsRight()
			);
	}

	private endPositionsUp(): Position[] {

		let file = this.position.file;
		let rank = this.position.rank;

		let positions: Position[] = [];

		rank++;
		while (rank < 9 && this.board.board[file][rank] === null) {
			positions.push(new Position(file, rank));
			rank++;
		}

		if (rank < 9 && this.board.board[file][rank]?.colour !== this.colour) {
			positions.push(new Position(file, rank));
		}
		return positions;
	}

	private endPositionsDown(): Position[] {

		let file = this.position.file;
		let rank = this.position.rank;

		let positions: Position[] = [];

		rank--;
		while (rank > 0) {
			if (this.board.board[file][rank] !== null) {
				if (this.board.board[file][rank]?.colour !== this.colour) {
					positions.push(new Position(file, rank));
				}
				break;
			}

			positions.push(new Position(file, rank));
			rank--;
		}


		return positions;
	}

	private endPositionsLeft(): Position[] {

		let file = this.position.file;
		let rank = this.position.rank;

		let positions: Position[] = [];

		file--;
		while (file > 0) {
			if (this.board.board[file][rank] !== null) {
				if (this.board.board[file][rank]?.colour !== this.colour) {
					positions.push(new Position(file, rank));
				}
				break;
			}

			positions.push(new Position(file, rank));
			file--;
		}

		return positions;
	}

	private endPositionsRight(): Position[] {

		let file = this.position.file;
		let rank = this.position.rank;

		let positions: Position[] = [];

		file++;
		while (file < 9) {
			if (this.board.board[file][rank] !== null) {
				if (this.board.board[file][rank]?.colour !== this.colour) {
					positions.push(new Position(file, rank));
				}
				break;
			}

			positions.push(new Position(file, rank));
			file++;
		}

		return positions;
	}

	protected captureEndPositions(): Position[] {
		return [];
	}

	public print(): string {
		switch (this.colour) {
			case Colour.WHITE:
				return "Rw";
			case Colour.BLACK:
				return "Rb";
		}
	}
}
