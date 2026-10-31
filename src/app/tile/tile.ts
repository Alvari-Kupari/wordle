import { Component, input } from "@angular/core";

export type TileColour = "red" | "green" | "gold" | "gray"

@Component({
    selector: 'tile',
    templateUrl: 'tile.html',
    styleUrl: 'tile.css',
})
export class Tile {
    letter = input.required<string>()
    type = input.required<TileColour>()
}
