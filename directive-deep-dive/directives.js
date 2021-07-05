// • Two types of directives 
// ○ Attribute directive
// ○ Structural directive
// • Attribute directive - 
// ○ Looks just like html attributes
// ○ Does not change the DOM
// ○ ex - ngClass, ngStyle
// • Structural directive -
// ○ Has an asterisk * prefixed to it
// ○ Changes the DOM around it
// ○ Can't have more than one structural directive on one element

// • We can create our own custom directive 
// ○ Create new file with a class name and rename it as name.directive.ts
// ○ Define class and add decorator @Directive and pass an javascript object with a selector
// ○ For custom attribute property binding we'll have to pass like "'yellow'"

// • Should not update DOM elements using elementRef directly, bad practice
// ○ Might throw error in some scenarios 
// • Use Renderer2 and use elementRef within setStyle method to update
