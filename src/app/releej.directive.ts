import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appReleej]'
})
export class ReleejDirective {

  constructor(private el: ElementRef) { }

  @HostListener('keyup') onKeyUp(){
  	this.attFun();
  }

  @HostListener('mouseenter') onMouseEnter(){
  	this.attFun2();
  }

  @HostListener('mouseleave') onMouseLeave(){
  	this.attFun21();
  }

  private attFun(){
	this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase();
  }

  private attFun2(){
  	this.el.nativeElement.style.backgroundColor = "yellow";
  }

  private attFun21(){
  	this.el.nativeElement.style.backgroundColor = "white";
  }

}
