import { Component, computed, input } from "@angular/core";
import { Tile, TileColour } from "../tile/tile";

@Component({
    selector: 'row',
    templateUrl: 'row.html',
    styleUrl: 'row.css',
    imports: [Tile]
})
export class Row {
    guess = input.required<string>()
    word = input.required<string | undefined>()

    row = computed<TileColour[]>(() => {
        const guess = this.guess()
        const solution = this.word()
        const row: TileColour[] = Array(5).fill("red")

        if (!solution) return row

        for (let i = 0; i < guess.length; i++) {
            if (guess[i] === solution[i]) {
                row[i] = "green"
            } else {
                row[i] = "gray"
            }
        }

        for (let i = 0; i < guess.length; i++) {
            if (row[i] === "green") continue
            const letter = guess[i]
            let solutionCount = 0
            let guessCount = 0

            for (let j = 0; j < guess.length; j++) {
                if (solution[j] === letter) solutionCount++
                if (j < i && guess[j] === letter && row[j] !== "green") guessCount++
            }

            if (guessCount < solutionCount) row[i] = "gold"
        }
        return row
    })

    GetTileColour(guess: string, i: number): TileColour {
        const solution = this.word()
        if (solution === undefined) return "red"
        if (solution.charAt(i) === guess[i]) return "green"
        
        let guessCount = 0
        let solutionCount = 0

        for (let j = 0; j < solution.length; j++) {
            if (solution[j] === guess[i]) {
                solutionCount++
            }
        }

        if (solutionCount === 0) return "gray"

        for (let j = 0; j < i; j++) {
            if (guess[j] === guess[i]) {
                guessCount++
            }
        }

        if (guessCount < solutionCount) return "gold"


        return "gray"
    }
}