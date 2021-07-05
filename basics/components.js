// • Ng serve runs index.html and bundle imports all the necessary scripts 
// • main.ts - first code that gets executed
// • main.ts starts/bootstraps appModule
// • appModule then bootstraps AppComponents
// • All the new components are nested into appRoot

// • Only the selector for appModule is added to index file
// • Any new component selector is added to app.component.html
// • Each component is basically a class used to make objects
// • Naming convention for a component is NameComponent
// • Component needs special decorator for angular to understand
// • Decorator enhance the code… Starts with @ … @component for component
// • @component has selector, templateUrl or template (can skip selector or styleUrls but template has to be there)
// • appModule uses decorator @NgModule

// •  Use plugin emmet for faster coding of html
// • ng g c - generates new component
// • app selectors can be of different types - <app-new> or [app-new] or .app-new… tag, attribute and class respectively (by id is not supported by angular)



