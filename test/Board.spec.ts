import {Board} from "../src/model/Board";
import {expect} from "chai";

describe('Board Tests', function () {

    it('Getter Test', function () {
        const b: Board = new Board(2);

        expect(b.getNum()).to.equal(2)    })
});