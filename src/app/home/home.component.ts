import { Component, OnInit } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subscription: Subscription;

  constructor() { }

  ngOnInit() {

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first');
      }, 2000);
      setTimeout(() => {
        observer.next('second');
      }, 4000);
      setTimeout(() => {
        observer.next('third');
      }, 6000);
      setTimeout(() => {
        observer.complete();
        console.log('completed');
      }, 8000)
    })

    myObservable.subscribe((val: string) => console.log(val));
  }

}
