import { Component, signal} from '@angular/core';
import { Grid } from './grid/grid';
import { ReactiveFormsModule, FormControl, Validators, FormGroup} from '@angular/forms';

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

  makeGuess() {
    const guess = this.guessForm.controls.guess.value
    if (guess === null || this.guessForm.invalid) return;
    console.log("GUESS: " + guess)
    this.guesses.update(words => [...words, guess])
  }

}
