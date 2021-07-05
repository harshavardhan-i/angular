// • Service classes can be used to store and manage data
// • Angular dependency injector is hierarchical:
//     ○ if the service is provided in one component then angular knows how to provide the same instance of this service for all it's child 
//     ○ if service is provided to app module it's available to entire project
//     ○ if service is provided to app component it's only available to it's children
//     ○ To stop creating new instances of the services we need to remove the providers in the child component which then uses the parent instance of the service 
// •  We can inject service into services
//     ○ While it's possible it can't be done if the class has not meta data… meaning a decorator
//     ○ The class where the other service is being injected should contain @Injectable() decorator


