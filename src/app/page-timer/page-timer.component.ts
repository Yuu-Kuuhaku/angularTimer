import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-timer',
  templateUrl: './page-timer.component.html',
  styleUrls: ['./page-timer.component.scss']
})
export class PageTimerComponent implements OnInit {

  minDate: String;
  date!: any;
  dateControl: FormControl ;
  constructor() {
    this.dateControl = new FormControl();

    let now = new Date();
    this.minDate = now.getUTCFullYear() + '-' + ( (now.getUTCMonth() + 1).toString().padStart(2, '0') ) + '-'+ (now.getUTCDate().toString().padStart(2, '0') )
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
