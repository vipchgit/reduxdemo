const ageReducer = (state='',{type,payload}) => {
  switch(type){
    case "CHANGE_AGE" :
      return payload;
    default :
     return state;
  }
 };
 
 export default ageReducer;