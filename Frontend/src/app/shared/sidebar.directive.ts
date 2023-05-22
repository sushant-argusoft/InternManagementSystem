import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[appToggle]'
})
export class SidebarDirective{
  @HostBinding('class.close')  isClose = true;
 @HostListener('document: mouseover',['$event']) toggleOpen(event: Event){

    
    this.isClose= this.elRef.nativeElement.contains(event.target)?false:true; 
 }
 constructor(private elRef: ElementRef){}
}