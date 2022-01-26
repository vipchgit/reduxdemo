export const firstData = () => {
  return async (dipatch) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    dipatch({
      type: "FIRST_INDEX",
      payload: data[0].name
    })
  }
}
export const secondData = () => {
  return async (dipatch) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    dipatch({
      type: "SECOND_INDEX",
      payload: data[1].name
    })
  }
}
export const thirdData = () => {
  return async (dipatch) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    dipatch({
      type: "THIRD_INDEX",
      payload: data[2].name
    })
  }
}
