import { Component, input } from "@angular/core";

export type TileType = "red" | "green" | "orange" | "gray"

@Component({
    selector: 'tile',
    templateUrl: 'tile.html',
    styleUrl: 'tile.css',
})
export class Tile {
    letter = input.required<string>()
    type = input.required<TileType>()
}
