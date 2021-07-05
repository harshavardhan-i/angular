// • Observable is basically a source of data… could be a button click, http request etc…
// • Observer is something who gets the data (our code)
// • Observer has three kinds of hooks for handling packages
//     ○ Data
//     ○ Error
//     ○ Completion
// • Observable may or may not have a end state like button
// • Observers are async functions since we don't know how and when the might end
// • Observables are constructs you subscribe to be informed about changes
// • Observables are not baked into typescript or javascript they are provided by a third party rxjs
// • By default typescript understands observables and you can subscribe to them 
// • Explicit observables can be created by using interval provided by rxjs
// • Unsubscribe
//     ○ All the observables provided by angular such as activated route params or event emitters… need not be unsubscribed as angular does that for us
//     ○ Observables explicitly declared needs to be unsubscribed else they'll cause memory leak
//         § Hence we use subscription object and onDestroy use this subscription to unsubscribe 
