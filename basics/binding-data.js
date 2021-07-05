// • communication between script and template
// • script to template, output data
//     ○ string interpolation - {{varName}}
//     ○ property binding  - [property] = "data"
// • Event binding
//     ○ (event) = "expression"
// • Two-way-binding
//     ○ [(ngModel)]="data"

// String interpolation - {{}}
// • can write typescript expressions
// • hardcode a string 
// • Methods can be called
// • Only restriction is the expression must return string and blocks of code cannot be written including control flow statements

// Property binding - Should not mix {{}} and property binding []… breaks the code

// Event binding - () 
// • ""  - either call a method 
// or line of type script code
// • (input) - calls on every keystroke
// • $event - reserved keyword in DOM, contains event variables

// Two way binding - [(ngModel)]
// • FormsModule is required for two way binding
// • Uses special directive ngModel
// • updates the variable on event and reflects the changes if any in typescript


// Explicit type casting - <type>
