// • Router Link Active
// 	○ routerLinkActive is passed to basically change the css for the active link
// 	○ Looks at the url and performs the task
// 	○ Special case when the url has no segment, in which case link remains active always
// 	○ to work around this use routerLinkActiveOptions="{exact: true}"
// • Router navigate
// 	○ Programmatically routing to a new page
// 	○ usage:
// 		§ import router from router
// 		§ use this.router.navigate(['url']) method
// 	○ Note: Here url provided is always relative to the base url and has no knowledge of the component it sits on
// 		§ So /url and url will yield the same result
// 		§ To fix this we have to provide current rout info to the router object
// 		§ ActivatedRoute does that and needs to be passed as an argument
