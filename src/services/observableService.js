import { Observable } from "rxjs";

export const getNumbers = new Observable(subscriber => {
    //We emit values:
    subscriber.next(1); //Emits 1
    subscriber.next(2); // ...
    subscriber.next(3);
    setTimeout(() => {
        subscriber.next(4); //Emits 4
        subscriber.complete(); //Finally Observable completes & finishes
  }, 1000); //Waits 1s
})