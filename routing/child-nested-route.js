// • Define a route within the a routed component page using router link
// • Now in app modules define child of existing route and add the child path and child component within it
// • Now while routing to this child component we might loose on the quereyparams or fragments … we can save those by using queryParamsHandling: 'preserve'

// • Page not found
//     ○ This can be handled by creating a new component
//     ○ specify a page not found component give it a path
//     ○ use the wildcard path ** which takes care of all the undefined paths and use redirectTo key to redirect to page not found 
//     ○ The wildcard must be used and defined after all routes as routes are parsed in order… if defined first all redirects to page not found
//     ○ There's one more path '' … angular matches paths by prefix so empty path or / path will match all to overcome this we have to use pathMatch:'full'
// • If there are more than a few urls it's better to define app-routing.module.ts
    

