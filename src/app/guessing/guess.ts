import { Component, output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";


@Component({
    selector: 'guess-form',
    templateUrl: './guess.html',
    styleUrl: './guess.css',
    imports: [ReactiveFormsModule]
})
export class Guess {
    guessOutput = output<string>()
    guessForm = new FormGroup(
        {guess: new FormControl("", [Validators.required, Validators.pattern(/^[a-z]{5}$/i)])}
    )

  sendGuess() {
    const guess = this.guessForm.controls.guess.value
    if (guess === null || this.guessForm.invalid) return;
    this.guessOutput.emit(guess)
  }
}