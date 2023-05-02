export class Position {
    private readonly _file: number; // 1-8 (a-h)
    private readonly _rank: number; // 1-8

    constructor(file: number, rank: number) {
        this._file = file;
        this._rank = rank;
    }

    get file(): number {
        return this._file;
    }

    get rank(): number {
        return this._rank;
    }

}