import { Component, input } from "@angular/core";
import { Tile } from "../tile/tile";

@Component({
    selector: 'row',
    templateUrl: 'row.html',
    styleUrl: 'row.css',
    imports: [Tile]
})
export class Row {
    guess = input.required<string>()
    word = input.required<string>()
}