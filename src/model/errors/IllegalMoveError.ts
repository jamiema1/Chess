export class IllegalMoveError extends Error {
	constructor(message: string) {
		super("IllegalMoveError: " + message);
	}
}
