// • HttpClientModule needs to be added to utilize requests
// • The object made out of it can be used to make get post etc calls
// • httpObj.mehthod() returns an observable
// • The request won't be sent until we are subscribed to the httpObject.method 
// • When a post call happens it sends two requests first one is of type option which tells if the post calls are allowed on the api to begin with
// • 200 is an OK response i.e. the request was successfully served  
// • Angular by default converts the javascript object that we pass to these methods into JSON 
// • We can use pipe on the observable to transform our data using plethora of operators provided
// • The get, posts calls and pipe or operators should be defined in a service and subscription should be done on the component end, best practices
