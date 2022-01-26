const inisialState = {
  name:"Ajay Ch",
  age:76
}

const reducer =(state=inisialState,action)=>{
   switch(action.type){
     case "FIRST_INDEX" :
       return{
          ...state,
          name:action.payload
       }
     case "SECOND_INDEX" :
       return{
          ...state,
          name:action.payload
       }
     case "THIRD_INDEX" :
       return{
          ...state,
          name:action.payload
       }
    default :
      return state;
   }
}

export default reducer;