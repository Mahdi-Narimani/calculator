import { Component, Pipe, PipeTransform } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// @Pipe({ name: 'decimalTransform' })
// export class DecimalTransform implements PipeTransform {
//   transform = (value: string) => {
//     return value.
//   };
// }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[]
})
export class AppComponent {
  numbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  currentValue: string = '';

  appendInput = (value: string) => {
    const input = document.getElementById('inputField') as HTMLInputElement;
    if (this.currentValue.length < 24) {
      this.currentValue += value.toString();
      if (this.currentValue.length > 8 && this.currentValue.length < 16) {
        input.classList.remove('text-5xl');
        input.classList.add('text-4xl');
      } else if (this.currentValue.length >= 16) {
        input.classList.remove('text-4xl');
        input.classList.add('text-2xl');
      }
      input.scrollLeft += input.scrollWidth;
      // input.focus();
      input.setSelectionRange(
        this.currentValue.length,
        this.currentValue.length + 1
      );
    } else {
      alert('Maximum Length 24');
    }
  };

  calculate = () => {
    try {
      this.currentValue = eval(this.currentValue);
    } catch (error) {
      this.currentValue = String(error);
    }
  };

  clear = () => {
    this.currentValue = '';
    const input = document.getElementById('inputField') as HTMLElement;
    input.classList.remove('text-2xl', 'text-4xl');
    input.classList.add('text-5xl');
    input.scrollLeft = 0;
  };

  backspace = () => {
    this.currentValue = this.currentValue.slice(0, -1);
  };
}

// const inputValue = this.currentValue + value;
// this.currentValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// this.currentValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, "$1,");
// this.currentValue = inputValue.toLocaleString()

// const operator = ['+', '-', '/', '*', '%', '.']
// const lastChar = this.currentValue.charAt(this.currentValue.length);
// const pattern = /^[0-9+\-*/%.]+$/;

// if (
// pattern.test(value)
// &&
// (value === operator[0] && !operator.includes(lastChar)) ||
// (value === operator[1] && !operator.includes(lastChar)) ||
// (value === operator[2] && !operator.includes(lastChar)) ||
// (value === operator[3] && !operator.includes(lastChar)) ||
// (value === operator[4] && !operator.includes(lastChar))
// )
