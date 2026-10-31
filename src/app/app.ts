import { Component, inject, signal} from '@angular/core';
import { Grid } from './grid/grid';
import { ReactiveFormsModule} from '@angular/forms';
import { WordleAPIService } from './api';
import { toSignal } from '@angular/core/rxjs-interop';
import { Guess } from './guessing/guess';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [Grid, ReactiveFormsModule, Guess],
})
export class App {
  readonly guesses = signal<string[]>([])

  private readonly word = toSignal(inject(WordleAPIService).getWord())
  private readonly isSolved = signal<boolean>(false)
  

  makeGuess(guess: string) {
    this.guesses.update(words => [...words, guess])

    if (guess === this.word()) {
      this.isSolved.set(true)
    }
  }

  restartGame() {
    this.guesses.set([])
    this.isSolved.set(false)
  }

}
