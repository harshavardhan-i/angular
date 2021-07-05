// • By default a CSS attribute is added to the entire DOM, but angular limits it to a specific Component
// • This is achieved by something known as DOM shadowing
// • DOM Shadowing is not supported by all the browsers
// • Hence Angular has to emulate this behavior
// • Such behavior is implemented by assigning unique attribute to each angular component
// • This be overwritten:
//     ○ encapsulation: ViewEncapsulation.None
//     ○ Add this to @component
//     ○ Now any style added here will be applied globally


