const inisialState = {
  name : "Ajay Ch",
  age : 32
}

const reducer = (state=inisialState,action) =>{
  switch(action.type){
    case "UPDATE_NAME":
      return {...state,name:action.payload}
    case "UPPER_CASE":
      return {...state,name:state.name.toUpperCase()}
    case "LOVER_CASE":
      return {...state,name:state.name.toLowerCase()}
    default:
      return state;
  }

}

export default reducer;