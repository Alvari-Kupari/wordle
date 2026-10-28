import { Component, signal } from '@angular/core';
import { Grid } from './grid/grid';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [Grid, FormsModule],
})
export class App {
  guess = ""

  makeGuess() {
    console.log("GUESS: " + this.guess)
  }

}
