// • By default the server handles the routing with the deployed environment
// • In those cases if the url which is not defined is handled and does not get rerouted to angular
// • This makes the server throw errors… to avoid this we can use useHash witin
// forRoot of routermodules and set it to true
// • This will include a # symbol before the pages which tell the server to leave those to angular… This will also handle some older browsers as well which uses #
