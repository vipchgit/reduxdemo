export const toUppercase=()=>{
    return {
      type:"UPPER_CASE"
    }
}

export const toLovercase=()=>{
  return {
    type:"LOVER_CASE"
  }
}

export const updateName=(name)=>{
  return {
    type:"UPDATE_NAME",
    payload:name
  }
}