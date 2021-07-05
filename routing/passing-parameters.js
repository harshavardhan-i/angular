// • To pass parameters to the URL use /:param in the routes
// • It makes the url segment dynamic
// • These arguments can be retrieved by using an obj of ActivatedRoute
// • use method snapshot.params[id] of activatedroute to do so

// • In case routerlink is used and redirected to the same page the snapshot holds the old values as the component is not re instantiated 
// • To overcome this observables is used
//     ○ With the obj of activated route use observable params and subscribe to it
//     ○ Once subscribed whenever this async action occurs route params would be fetched
//     ○ Observables are a feature not provided by angular but a third party 
// • QueryParams:
//     ○ takes in a javascript object { key: value}
// • fragment:
//     ○ takes in fragment as arguments
// • Fetching params/queryParams/fragment
//     ○ Two ways
//         § either use activatedroute snapshot 
//         § or use activatedroute param/queryparam/fragment
// • The parameters passed via router links are all strings
//     ○ if the code is expecting a number instead use + in-front of the activatedroute obj to make it a number 
