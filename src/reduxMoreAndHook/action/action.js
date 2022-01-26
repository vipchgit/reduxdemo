export const changeFIndexName =()=>{
  return async (dipatch)=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    dipatch({
      type:"CHANGE_NAME",
      payload:data[0].name
    })
  }
}
export const changeSIndexName =()=>{
  return async (dipatch)=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    dipatch({
      type:"CHANGE_NAME",
      payload:data[1].name
    })
  }
}
export const changeAge =({i,age})=>{
  return async (dipatch)=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    dipatch({
      type:"CHANGE_AGE",
      payload:data[i].age || age
    })
  }
}