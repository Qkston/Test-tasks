import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  text = 'FOLLOW';
  toggle = true;

  rnd(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  tweets = this.rnd(1, 50);
  followers = this.rnd(50, 100);

  changeButton() {
    switch (this.text) {
      case 'FOLLOW':
        this.followers++;
        this.text = 'UNFOLLOW';
        break;
      case 'UNFOLLOW':
        this.followers--;
        this.text = 'FOLLOW';
        break;
    }
  }

  changeColor() {
    this.toggle = !this.toggle;
  }

  ngOnInit(): void {}
}
