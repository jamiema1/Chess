import {Piece} from "./pieces/Piece";
import {Pawn} from "./pieces/Pawn";
import {Bishop} from "./pieces/Bishop";
import {King} from "./pieces/King";
import {Queen} from "./pieces/Queen";
import {Knight} from "./pieces/Knight";
import {Rook} from "./pieces/Rook";
import {Colour} from "./Colour";
import {IllegalMoveError} from "./errors/IllegalMoveError";
import {Move} from "./Move";
import {Position} from "./Position";


export class Board {

	private boardSize: number = 8;
	private _board: Piece[][] = new Array(this.boardSize + 1)
		.fill(null)
		.map(() => new Array(this.boardSize + 1).fill(null));

	constructor() {
		this._board[1][2] = new Pawn(new Position(1,2), Colour.WHITE);
		this._board[2][2] = new Pawn(new Position(2,2), Colour.WHITE);
		this._board[3][2] = new Pawn(new Position(3,2), Colour.WHITE);
		this._board[4][2] = new Pawn(new Position(4,2), Colour.WHITE);
		this._board[5][2] = new Pawn(new Position(5,2), Colour.WHITE);
		this._board[6][2] = new Pawn(new Position(6,2), Colour.WHITE);
		this._board[7][2] = new Pawn(new Position(7,2), Colour.WHITE);
		this._board[8][2] = new Pawn(new Position(8,2), Colour.WHITE);

		this._board[1][1] = new Rook(new Position(1,1), Colour.WHITE);
		this._board[8][1] = new Rook(new Position(8,1), Colour.WHITE);
		this._board[2][1] = new Knight(new Position(2,1), Colour.WHITE);
		this._board[7][1] = new Knight(new Position(7,1), Colour.WHITE);
		this._board[3][1] = new Bishop(new Position(3,1), Colour.WHITE);
		this._board[6][1] = new Bishop(new Position(6,1), Colour.WHITE);
		this._board[4][1] = new Queen(new Position(4,1), Colour.WHITE);
		this._board[5][1] = new King(new Position(5,1), Colour.WHITE);


		this._board[1][7] = new Pawn(new Position(1,7), Colour.BLACK);
		this._board[2][7] = new Pawn(new Position(2,7), Colour.BLACK);
		this._board[3][7] = new Pawn(new Position(3,7), Colour.BLACK);
		this._board[4][7] = new Pawn(new Position(4,7), Colour.BLACK);
		this._board[5][7] = new Pawn(new Position(5,7), Colour.BLACK);
		this._board[6][7] = new Pawn(new Position(6,7), Colour.BLACK);
		this._board[7][7] = new Pawn(new Position(7,7), Colour.BLACK);
		this._board[8][7] = new Pawn(new Position(8,7), Colour.BLACK);

		this._board[1][8] = new Rook(new Position(1,8), Colour.BLACK);
		this._board[8][8] = new Rook(new Position(8,8), Colour.BLACK);
		this._board[2][8] = new Knight(new Position(2,8), Colour.BLACK);
		this._board[7][8] = new Knight(new Position(7,8), Colour.BLACK);
		this._board[3][8] = new Bishop(new Position(3,8), Colour.BLACK);
		this._board[6][8] = new Bishop(new Position(6,8), Colour.BLACK);
		this._board[4][8] = new Queen(new Position(4,8), Colour.BLACK);
		this._board[5][8] = new King(new Position(5,8), Colour.BLACK);
	}


	public move(move: Move): void {

		const piece: Piece = this._board[move.startPosition.file][move.startPosition.rank];
		
		if (piece === null) {
			throw new IllegalMoveError("No piece at start position");
		}
		if (move.colour !== piece.colour) {
			throw new IllegalMoveError("Cannot move opponent's piece");
		}
		piece.move(this, move.endPosition);
	}

	public get board(): Piece[][] {
		return this._board;
	}


	public print() {

		for (let rank = 8; rank > 0; rank--) {
			let row: string = "";
			for (let file = 1; file < 9; file++) {
				const piece: Piece = this._board[file][rank];
				if (piece === null) {
					row = row.concat("+");
				} else {
					row = row.concat(piece.print());
				}

			}
			console.log(row);
		}
		console.log("\n");
	}
}
