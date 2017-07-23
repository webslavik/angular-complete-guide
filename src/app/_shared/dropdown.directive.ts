import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdawnDirective {

  @HostBinding('class.is-open') toggle: boolean = false;

  @HostListener('click') toggleDropdown() {
    this.toggle = !this.toggle;
  }

  @HostListener('mouseleave') closeDropdown() {
    this.toggle = !this.toggle;
  }

}