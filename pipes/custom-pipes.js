// • We can create our custom pipes
// • While declaring a class we need to implement PipeTransform
// • This class needs to apply transform method
// • Pipe transform method must return something
// • Also the class needs to implement @pipe decorator with a passed argument name: 'something'
//         § 
    
// • To pass parameters to custom made pipes we just need to add an extra parameter to transform function
// • And so on of any additional parameter to pipes
// • Pipes can also be applied to ngFor loops as they can be applied to any output
// • 
// • ng g p create a new pipe
// • Let's say pipes are being used for filters in which case pipes are not recalculated on data change 
// • Doing so will add a lot of overhead and performance overhead
// • This behavior can be changed by adding pure: 'false' to pipe decorator
// • Not recommended
