// • Services
// ○ Just another class in angular
// ○ Data duplication and data storage are the use cases for service
// ○ Service acts as a central repository to  all our components
// ○ It's just a normal typescript class does not need decorators
// ○ Should not access service by simply importing a class and calling methods…
// • Dependency Injector
// ○ To achieve the above mentioned we need the dependency which is the service class instance to be injected to the class we are in
// ○ This helps keep the service object stay within angular eco system
// ○  This is done by instantiating the service object property within the constructor of our class and a provider within the component decorator

