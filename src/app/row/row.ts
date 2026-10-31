import { Component, input } from "@angular/core";
import { Tile, TileType } from "../tile/tile";

@Component({
    selector: 'row',
    templateUrl: 'row.html',
    styleUrl: 'row.css',
    imports: [Tile]
})
export class Row {
    guess = input.required<string>()
    word = input.required<string | undefined>()

    GetTileType(letter: string, index: number): TileType {
        const solution = this.word()
        if (solution === undefined) return "gray"
        if (solution.charAt(index) === letter) {
            return "green"
        }

        if (solution.includes(letter)) {
            return "orange"
        }

        return "red"
    }
}