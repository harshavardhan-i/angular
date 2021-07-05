// • Although the url changes after the base we don’t actually go to a new page
// • It's always the same page but the content is changed dynamically
// • It's still a single page application

// • Needs the route to be declared in the app modules file
// • Route  should be assigned routes of type [{ path: 'path', component: compName }]
// • And then RouterModule needs to be added with method forRoot and its' parameter Route

// • href should not be used for navigation as it reloads the page 
// • routerLink should be used instead
//     ○ It prevents the default reload behavior
//     ○ redirects to the new path
//     ○ if redirected to the same page new instance is not created
//     ○ routerlink can aslo be assigned an array ['usl', 'rl', 'l']… router makes a router out of this usl/rl/l
// • Absolute path and relative path:
//     ○ routerLink="/url"  &&  routerLink="url"
//     ○ Here they are absolute and relative paths respectively
//     ○ absolute path starts from the base path
//     ○ relative path appends on the existing path
//         § "url" is the same as "./url"
//         § "../url" means go up one level and then add to the path - it removes the entire segment on the url instead of one
