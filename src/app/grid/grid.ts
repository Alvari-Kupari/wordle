import { Component, inject, input } from "@angular/core";
import { Row } from "../row/row";
import { WordleAPIService } from "../api";
import { AsyncPipe } from "@angular/common";

@Component({
    selector: 'grid',
    templateUrl: 'grid.html',
    styleUrl: 'grid.css',
    imports: [Row, AsyncPipe],
})
export class Grid {
    guesses = input.required<string[]>()

    private word = inject(WordleAPIService);
    word$ = this.word.getWord()
}