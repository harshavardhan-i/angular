// • We cannot Store credentials on a front end application, anyone can inspect elements and see data
// • Highly insecure, as these credentials have to stored in order to make a DB connection direction
// • So DB store & fetch is not supported by angular
// • API it can interact with are generally rest or graphQl apis
// • Not only storing credentials, storing file and analytics is much better on the backend
