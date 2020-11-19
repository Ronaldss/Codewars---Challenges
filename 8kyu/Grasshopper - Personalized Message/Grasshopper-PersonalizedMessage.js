// Personalized greeting
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'


function greet(prop1, prop2){
    if ( prop1 === prop2 ) {
      return 'Hello boss'
    }else{
      return 'Hello guest'     
    }
  }