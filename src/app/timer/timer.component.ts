import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { Subscription } from 'rxjs/internal/Subscription';
import * as moment   from 'moment';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {


  constructor(){
  }

  /* precisa ser informado em minutos  ex
   timer = 0.5

   timer = 1

   timer = 50
  */

  @Input() time : any;
  @Output() resend = new EventEmitter();
  private subscription!: Subscription ;


  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;

  public timeDifference!: number;
  public secondsToDday!: number;
  public minutesToDday!: number;
  public hoursToDday!: number;
  public daysToDday!: number;

  isValiResend: boolean = false;
  dateNow!: Date;
  dDay!: Date;


  private getTimeDifference () {
    this.timeDifference = this.dDay.getTime() - new  Date().getTime();
    if(this.timeDifference > 0){
      this.allocateTimeUnits(this.timeDifference);
    } else {
      this.isValiResend = true;
      this.resend.emit();
    }
  }

  private allocateTimeUnits (timeDifference: number) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  }

  ngOnInit() {
    // this.dateNow = new Date();
    // this.dDay = moment(this.dateNow).add( this.time, 'm').toDate();
    // this.subscription = interval(1000)
    //     .subscribe(x => { this.getTimeDifference(); });
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

    if( this.time){
      this.dateNow = new Date();
      this.dDay = moment(this.time).toDate();
      this.subscription = interval(1000)
      .subscribe(x => { this.getTimeDifference(); });
    }

  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }


}
