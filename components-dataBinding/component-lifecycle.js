// • There are a few lifecycle hooks in angular
// • Once a new component is instantiated i.e. finds a new component and adds it to the DOM is goes through a few phases
// • The lifecycle hooks can be used to perform tasks in the phase
// • Lifecycle hooks:
//     ○ ngOnChanges - runs right at the start and also whenever the input property is called… @Input()
//     ○ ngOnInit - Once the DOM object is created, but does not mean the UI is ready.. runs after the constructor
//     ○ ngDoCheck - Runs after every change on variable and properties, even on event like click
//     ○ ngAfterContentInit - Runs after the content is projected into the view
//     ○ ngAfterContentChecked - Everytime the projected content has been checked
//     ○ ngAfterViewInit - Runs when the component's view has been initialized
//     ○ ngAfterViewChecked - Runs after the child views have been checked
//     ○ ngOnDestrooy - Called once the component are about to be destroyed

// • Template elements can't be used before we reach the ngAfterViewInit()
