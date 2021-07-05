// • type definition:
// ○ someObj: {type: string, name: string, content: string  };
// • Sending data from parent to child
// ○ Have to use @Input() decorator to make a variable available globally across all components
// ○ That variable can be made available with a different name(alias) using @Input('newName')
// ○ Now parent to use property binding to assign values, [alisas] = "var"
// • Child to parent component
// ○ create property of type EventEmitter in the child component
// ○ use emit on the newly defined property
// ○ user @Output() decorator to send out the data
// ○ Alias: @Output('newName')
// • Between child components
// ○ Using services



