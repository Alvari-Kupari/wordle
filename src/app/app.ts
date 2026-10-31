import { Component, inject, signal} from '@angular/core';
import { Grid } from './grid/grid';
import { ReactiveFormsModule, FormControl, Validators, FormGroup} from '@angular/forms';
import { WordleAPIService } from './api';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [Grid, ReactiveFormsModule],
})
export class App {
  readonly guesses = signal<string[]>([])

  guessForm = new FormGroup(
    {guess: new FormControl("", [Validators.required, Validators.pattern(/^[a-z]{5}$/i)])}
  )

  private readonly word = toSignal(inject(WordleAPIService).getWord())
  private readonly isSolved = signal<boolean>(false)
  

  makeGuess() {
    const guess = this.guessForm.controls.guess.value
    if (guess === null || this.guessForm.invalid) return;
    this.guesses.update(words => [...words, guess])

    if (guess === this.word()) {
      this.isSolved.set(true)
    }
  }

}
