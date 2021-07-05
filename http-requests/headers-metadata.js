// • 
// • Headers can be added to the request passing new argument to the method, that parameter should be an object
// • Needs to use HttpHeaders
// • within the constructor we need to pass object
// • We can also pass Queryparams using httpParams.set method, can be done on the url as well
// • To attach multiple queries use append method

// • Observing different types of responses:
//     ○ we can also add observe parameter besides header and queryParams
//     ○ Observe helps us modify the response 
//         § by default we on get body of the response not the complete data
//         § To get the complete data we add observe: 'response' 
//         § Observer can be given three types of values
//             □ body
//             □ response
//             □ events
// • To run code without altering the response within the observable we can use the operator tap within the pipe, does not return anything
// • We can change the responseType within metadata as well
        
