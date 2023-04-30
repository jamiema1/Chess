export class Board {
    private num: number;

    constructor(num: number) {
        this.num = num;
    }

    public getNum(): number {
        return this.num;
    }
}