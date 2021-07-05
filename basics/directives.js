// • Directives are instructions in the DOM
// • Component are directives with templates
// • Usage - 
//     ○ @Directive({selector:'[TurnGreenDirective]'})
//     ○ export class TurnGreenDirective{}
// • *ngIf directive - * is required for structural directives… 
//     ○ Changes the structure of DOM
//     ○ The code is not hidden, it's just not there
//     ○ Inside expression has to be true or false
// • else -  An enhancement to ngIf
//     ○ *ngIf=" A!=B; else noServer"
//     ○ <ng-template #noServer> code </ng-template>
// • Attribute directives - looks like attribute
//     ○ does not add or remove code only changes it
// • [ngStyle] - it's a property of the directive ngStyle, binding to a property of the directive
//     ○ Dynamically updates style itself
//     ○  this property expects to get javaScript object
//     ○ Usage:
//         § [ngStyle] = "backgroundColor: getColor()"
// • What's ternary operator???
// • [ngClass]- dynamically updates the class
//     ○ Usage: [ngClass] = "className: expression", here expression can be an inline code or method itself
// • *ngFor - Add lists
//     ○ Usage: *ngFor="let a of list; let I = index;"
//     ○ let i=index : it's a reserved expression, tells the iteration no.
    
    
