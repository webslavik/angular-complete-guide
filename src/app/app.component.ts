import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  toggleNav: string = 'recipe';

  onNavigation(feature: string) {
    this.toggleNav = feature;
  }

}
