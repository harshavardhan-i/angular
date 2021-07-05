// • Local reference can be placed on any html element
// • usage: #someName - #someName is the local reference
// • These references can be used anywhere within the template and not even in the typescript
// • Reference gives us all the properties of the element its added to
// • The type of such local reference is HTMLElement

// • @ViewChild is used for accessing the local reference within typescript
// • Usage: 
//     ○ @ViewChild('localReferenceName') variableName;
//     ○ Could pass component name as well as a parameter
// • Type of the viewchild variable would be ElementRef
// • To access value… variableName.nativeElement.value;
// • Bad practice to set values on DOM using this method, then use what?


// • Projecting content to the child components
// • Anything written between our custom component tags is lost… Won't throw error but it's all lost
// • This behavior can be changed by using ng-content
// • ng-content directive must be added to the child component and the intended code in parent component within the component tags 

// • @contentChild - It's used to fetch data for cases where the content is projected into view/child component

    

