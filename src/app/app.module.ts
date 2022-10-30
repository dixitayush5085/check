import { CommonModule } from '@angular/common';
import { ApplicationRef, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const mfe = createCustomElement(AppComponent, { injector });
    customElements.define('feedback-app', mfe);
  }

  public ngDoBootstrap(appRef: ApplicationRef): void {
    if (document.querySelector('feedback-app')) {
      appRef.bootstrap(AppComponent);
    }
  }
}
