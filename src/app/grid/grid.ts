import { Component, inject } from "@angular/core";
import { Row } from "../row/row";
import { WordleAPIService } from "../api";

@Component({
    selector: 'grid',
    templateUrl: 'grid.html',
    styleUrl: 'grid.css',
    imports: [Row],
})
export class Grid {
    words = [
        "beagl",
        "horse",
    ]

    private worda = inject(WordleAPIService);
    worda$ = this.worda.getWord()
}