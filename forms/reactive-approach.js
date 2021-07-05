// • In this approach we create forms programmatically in typescript
// • It requires formGroups in component and ReactiveFormModule in app modules
// • Use a lifecycle hook which runs before rendering the template to assign values
// • Within typescript define FormGroup object and define form controls within it
//             □ 
// • Using form tag creates a form for us in html
// • Since we are creating our own we need to override that
// • Its done by using property binding on formGroup
// • and each form element needs to be bound to a formcontrol
// • it done by assigning formControlName a string
        
// • ngSubmit event listener is used for submissions
// • No need to pass parameters like before as formGroup is defined and can be used within script

