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


export class Board {

	private boardSize: number = 8;
	private _board: Piece[][] = new Array(this.boardSize + 1)
		.fill(null)
		.map(() => new Array(this.boardSize + 1).fill(null));

	constructor() {
		this._board[1][2] = new Pawn(Colour.WHITE);
		this._board[2][2] = new Pawn(Colour.WHITE);
		this._board[3][2] = new Pawn(Colour.WHITE);
		this._board[4][2] = new Pawn(Colour.WHITE);
		this._board[5][2] = new Pawn(Colour.WHITE);
		this._board[6][2] = new Pawn(Colour.WHITE);
		this._board[7][2] = new Pawn(Colour.WHITE);
		this._board[8][2] = new Pawn(Colour.WHITE);

		this._board[1][1] = new Rook(Colour.WHITE);
		this._board[8][1] = new Rook(Colour.WHITE);
		this._board[2][1] = new Knight(Colour.WHITE);
		this._board[7][1] = new Knight(Colour.WHITE);
		this._board[3][1] = new Bishop(Colour.WHITE);
		this._board[6][1] = new Bishop(Colour.WHITE);
		this._board[4][1] = new Queen(Colour.WHITE);
		this._board[5][1] = new King(Colour.WHITE);


		this._board[1][2] = new Pawn(Colour.BLACK);
		this._board[2][2] = new Pawn(Colour.BLACK);
		this._board[3][2] = new Pawn(Colour.BLACK);
		this._board[4][2] = new Pawn(Colour.BLACK);
		this._board[5][2] = new Pawn(Colour.BLACK);
		this._board[6][2] = new Pawn(Colour.BLACK);
		this._board[7][2] = new Pawn(Colour.BLACK);
		this._board[8][2] = new Pawn(Colour.BLACK);

		this._board[1][1] = new Rook(Colour.BLACK);
		this._board[8][1] = new Rook(Colour.BLACK);
		this._board[2][1] = new Knight(Colour.BLACK);
		this._board[7][1] = new Knight(Colour.BLACK);
		this._board[3][1] = new Bishop(Colour.BLACK);
		this._board[6][1] = new Bishop(Colour.BLACK);
		this._board[4][1] = new Queen(Colour.BLACK);
		this._board[5][1] = new King(Colour.BLACK);
	}


	public move(move: Move): void {

		const piece: Piece = this._board[move.startPosition.rank][move.startPosition.file];
		piece.move(this, move.startPosition, move.startPosition);
	}

	public get board(): Piece[][] {
		return this._board;
	}
	
	// private pieces: Piece[];
	//
	// constructor() {
	//
	// 	this.pieces = [
	//
	//
	//
	// 		new Pawn(new Position(1,7), Colour.BLACK),
	// 		new Pawn(new Position(2,7), Colour.BLACK),
	// 		new Pawn(new Position(3,7), Colour.BLACK),
	// 		new Pawn(new Position(4,7), Colour.BLACK),
	// 		new Pawn(new Position(5,7), Colour.BLACK),
	// 		new Pawn(new Position(6,7), Colour.BLACK),
	// 		new Pawn(new Position(7,7), Colour.BLACK),
	// 		new Pawn(new Position(8,7), Colour.BLACK),
	//
	// 		new Rook(new Position(1,8), Colour.BLACK),
	// 		new Rook(new Position(8,8), Colour.BLACK),
	//
	// 		new Knight(new Position(2,8), Colour.BLACK),
	// 		new Knight(new Position(7,8), Colour.BLACK),
	//
	// 		new Bishop(new Position(3,8), Colour.BLACK),
	// 		new Bishop(new Position(6,8), Colour.BLACK),
	//
	// 		new Queen(new Position(4,8), Colour.BLACK),
	//
	// 		new King(new Position(5,8), Colour.BLACK),
	// 	];
	// }
	//
	// public move(startPosition: Position, endPostion: Position, colour: Colour): void {
	//
	// 	let capturedPiece: Piece;
	// 	let movingPiece: Piece;
	//
	// 	for (const piece: Piece of this.pieces) {
	// 		if (piece.colour === colour && piece.position === endPostion) {
	// 			throw new IllegalMoveError("Cannot move the piece onto an allied piece");
	// 		}
	// 		if (piece.colour !== colour && piece.position === endPostion) {
	// 			capturedPiece = piece;
	// 		}
	// 		if (piece.colour === colour && piece.position === startPosition) {
	// 			movingPiece = piece;
	// 			validateMove(movingPiece, startPosition, endPostion);
	// 		}
	// 	}
	//
	// 	const index: number = this.pieces.indexOf(capturedPiece);
	// 	this.pieces.splice(index, 1);
	//
	// 	movingPiece.position = new Position(endPostion.file, endPostion.rank);
	//
	// }
	//
	// private validateMove(movingPiece: Piece, startPosition: Position, endPostion: Position): void {
	// 	movingPiece.allPossibleMoves();
	// }
}
