export default function validate(input){

    
    let errors = {};
    if(!input.name){  // si el name esta vacio
      errors.name = 'Name is required';
    } 
    if(input.types.length === 0){  
      errors.types = 'At least on type is required';
    }
    // el objeto errors va a quedar:
    // {name: 'Name is required', types: 'At least on type is required'}
   
    return errors
  }