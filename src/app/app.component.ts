import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angularTimer';

  urlBg = '';

  arrayBg = ['./assets/1.jpg', './assets/3.jpg', './assets/4.jpg']

  ngOnInit(): void {
    
    this.urlBg = this.arrayBg[this.radomNumber()];
    
  }

  private radomNumber (){
    
    return Math.floor(Math.random() * (2 + 1)) ;

  }
}
