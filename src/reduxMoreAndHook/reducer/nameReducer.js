const nameReducer = (state='',{type,payload}) => {
 switch(type){
   case "CHANGE_NAME" :
     return payload;
   default :
    return state;
 }
};

export default nameReducer;
