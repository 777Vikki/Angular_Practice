import { Component, ViewChild } from '@angular/core';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A8';
  @ViewChild(HelloComponent, {static: false}) hello: HelloComponent;

  showViewChild() {
    console.log(this.hello.pRef.nativeElement.innerText);
    console.log(this.hello.pPara.nativeElement.innerText);
  }
}
