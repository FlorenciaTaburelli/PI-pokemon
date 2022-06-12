

export default function validate(input){


    let errors = {};
    if(!input.name){  // si el name esta vacio
      errors.name = 'Name is required';
    } else if(!/^[A-z]+$/.test(input.name)){  /// la pass no tiene numeros
      errors.name = 'Name only accepts letters'
    }
    if(input.types.length === 0){  
      errors.types = 'At least on type is required';
    }
    if(input.hp > 300 || input.hp < 0) errors.hp = 'Hp must be a value between 0 and 300'
    if(input.attack > 300 || input.attack < 0) errors.attack = 'Attack must be a value between 0 and 300'
    if(input.defense > 300 || input.defense < 0 ) errors.defense = 'Defense must be a value between 0 and 300'
    if(input.speed > 300 || input.speed < 0) errors.speed = 'Speed must be a value between 0 and 300'
    if(input.height > 300 || input.height < 0) errors.height = 'Height must be a value between 0 and 300'
    if(input.weight > 300 || input.weight < 0 ) errors.weight = 'Weight must be a value between 0 and 300'


    // el objeto errors va a quedar:
    // {name: 'Name is required', types: 'At least on type is required'}
   
    return errors
  }