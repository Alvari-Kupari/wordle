import { Component, input } from "@angular/core";

@Component({
    selector: 'tile',
    templateUrl: 'tile.html',
    styleUrl: 'tile.css',
})
export class Tile {
    letter = input.required<string>()
}
