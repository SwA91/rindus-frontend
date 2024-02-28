import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  standalone: true,
  template: ``,
})
export class UnsubscriptionComponent implements OnDestroy {
  notifyUnsubscription = new Subject();

  ngOnDestroy(): void {
    this.notifyUnsubscription.next(true);
    this.notifyUnsubscription.complete();
  }
}
