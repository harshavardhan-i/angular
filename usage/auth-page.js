// • Credentials cannot be stored in the front end as the javaScript is exposed to the user and can be modified
// • Server sends encoded message to the client side
// • Client decodes and stores the message locally and uses it for subsequent calls

// • Angular cannot have server sessions as the frontend and backend is decoupled
// • Only server one page 
// • Components within the page is served by angular in javascript 
// • Angular serves the pages via angular routes

// • exhaustMap operator within pipe can be used to call multiple operators in sequence
// • BehaviorSubjects can be used to send data and subscribe can listen to it anytime later once it's been sent
// • Interceptors are to be used when headers need meta data
// • if user data is not available hide the exposed links using structural directives 
// • AuthGaurd to check of user object is present and load to page indeed it's present
