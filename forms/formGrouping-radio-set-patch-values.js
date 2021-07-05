// • Form elements can be grouped by adding attribute ngModelGroup to the wrapping div and assign it a string
// • To get access to javascript representation of this element assign ngModelGroup to localRef


// • Radio buttons might look like a new approach but its not
// • Following the same input methods can help control radio buttons as well

// • SetValue & PatchValue
//     ○ ngForm object in the script has a setValue method which can be used to set values within the form
//         § But it needs to pass all the form elements at once like name, email etc everything needs to be defined
//     ○ PatchValue method can be called from ngFormObj.form and can be used to set one element of the form at once
//     ○ Side note: within ngFormObj.form we can call setValue as well
