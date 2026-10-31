import { Component, input } from "@angular/core";
import { Row } from "../row/row";

@Component({
    selector: 'grid',
    templateUrl: 'grid.html',
    styleUrl: 'grid.css',
    imports: [Row],
})
export class Grid {
    guesses = input.required<string[]>()
    word = input.required<string | undefined>()
}