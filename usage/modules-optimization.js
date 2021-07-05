// • Ng modules are bundles of component, directives, services and pipes
// • Must have atleast one module
// • Itself provides modules, form 
// • Declaration in appmodule holds services, components, pipes, directives
// • Imports holds all the included modules
// • Providers are needed to inject services into app modules
// • bootstrap tells what's available to index file
// • entryComponents, tells what component are made within the code
// • exports: exports modules or components that needs to be used in other modules

// • Each modules works on its own, component provided in one modules does not work with other 
//     ○ that's why we export router module and import it to appmodule
// • Browsermodule must be imported only once as it provide general startup stuff apart from ngif and ngfor
//     ○ So use Common modules for ngIf and ngFor
// • We have to import common modules in every module we create except services, they are available application wide has to be declared once in appmodules
// • Modules parts need only be exported when they are to be used outside the module itself
// • Must declare of define component, pipes, directives only once 
// • Must import modules only once
// • Modules can be logically split into 
//     ○ Feature modules - Individual features 
//     ○ Shared modules -Shared across feature modules
//     ○ Core modules -


