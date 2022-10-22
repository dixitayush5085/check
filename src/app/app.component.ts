import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input('noOfStars') public noOfStars: number = 5; 
  @Output('feedback') feedback = new EventEmitter;

  title = 'my-first-microfrontend-app';
  noSelectedStars: number = 0;

  updateFeedbackResponse(index: number) {
      index++;
      this.noSelectedStars = index;
  }

  submitFeedback() {
    this.feedback.emit({
      noOfStars: this.noOfStars
    });
  }

}
