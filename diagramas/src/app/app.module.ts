import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GojsAngularModule } from 'gojs-angular';
import { GojsDiagramComponent } from './gojs-diagram/gojs-diagram.component';
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
      GojsDiagramComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GojsAngularModule,
    DiagramModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
