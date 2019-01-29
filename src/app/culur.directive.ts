import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appCulur]'
})
export class CulurDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {  }

  @Input() set appCulur(ax:boolean){
  	if(!ax)
  	{this.viewContainer.createEmbeddedView(this.templateRef);}
  	else
  	{this.viewContainer.clear();}
  }

}
