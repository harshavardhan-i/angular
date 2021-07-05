// • By default all the modules are loaded when we first visit an angular site
// • We can choose which module to be loaded using "Lazy Loading"
// • This can make the application faster
// • To lazy load a module 
//     ○ It should has routes and forChild implemented
//     ○ In app routing loadChildren needs to be used 
//     ○ Feature component must be removed from app modules as now it's being lazy loaded
//     ○ 
//     ○ Use lazy loading should be done on feature modules which are no frequently used
// • Pre load a lazy loading module
//     ○ To avoid delay in fetching modules on demand we can preload it
//     ○ 

