import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output('navigation') navigation = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onToggle(feature: string) {
    this.navigation.emit(feature);
  }

}
