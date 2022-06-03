export default function validate(input){

  console.log(input);
    
    let errors = {};
    if(!input.name){  // si el username esta vacio
      errors.name = 'Name is required';
    } 
    if(input.types.length === 0){  //si la password esta vacia
      errors.types = 'At least on type is required';
    }
    // el objeto errors va a quedar:
    // {username: 'Username is invalid', password: 'Password is required'}
   
    return errors
  }