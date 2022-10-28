import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-timer',
  templateUrl: './page-timer.component.html',
  styleUrls: ['./page-timer.component.scss']
})
export class PageTimerComponent implements OnInit {

  // minDate: String;
  date!: any;
  dateControl: FormControl ;
  constructor() {
    this.dateControl = new FormControl();

    this.date =  new Date('2022-10-29T16:00:00.000Z');
    console.log(this.date);
  }

  ngOnInit(): void {

    this.dateControl.valueChanges.subscribe({
      next: (data)=> {
        console.log(data);
        this.date = data;
      }
    })
  }

}
