import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angularTimer';

  urlBg = '';

  arrayBg = ['./assets/1.jpg', './assets/3.jpg', './assets/4.jpg', './assets/2.jpeg',  './assets/5.jpeg',  './assets/6.jpeg',  './assets/7.jpeg',  './assets/8.jpeg',  './assets/9.png',  './assets/10.jpeg']

  ngOnInit(): void {
    
    this.urlBg = this.arrayBg[this.radomNumber()];
    
  }

  private radomNumber (){
    
    return Math.floor(Math.random() * (9 + 1)) ;

  }
}
