// • We can build custom observable using Observable class within rxjs
// ○ And then we can use .create method to define an observer and within we can add setInterval to periodically send data using oberever.next()
// • Whenever an observable throws an error it dies and no longer needs to be unsubscribed
// • Subscribe takes in three arguments
// ○ data - to get data
// ○ error - to get any errors
// ○ () - to get the completion of observable
// • The completion argument is only run when the observable terminates normally or else error argument runs
// • Once we subscribe to an observable angular makes an observer out of all the passed arguments and sends it to observable which then handles all those hooks for us

