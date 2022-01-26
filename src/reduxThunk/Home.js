import React from 'react';
import {connect} from 'react-redux';
import {firstData,secondData,thirdData} from './action/action';

const Home = (prope) => {
  return( <div className='min-h-screen flex justify-center items-center'>
    <div className='flex flex-col'>
      <h1 className='bg-orange-400 px-14 py-12 text-center text-white rounded-lg'>
        <p>My name is {prope.name}</p>
        <p>My age is {prope.age}</p>
      </h1>
      <button className='bg-blue-300 rounded-lg px-2 py-2 my-1 hover:text-gray-600'  onClick={()=>prope.firstIndex()}>First Index Name</button>
      <button className='bg-blue-300 rounded-lg px-2 py-2 my-1 hover:text-gray-600'  onClick={()=>prope.secondIndex()}>Second Index Name</button>
      <button className='bg-blue-300 rounded-lg px-2 py-2 my-1 hover:text-gray-600'  onClick={()=>prope.thirdIndex()}>Third Index Name</button>

    </div>
  </div>);
};

const statePrope =({name,age})=>{
  return{
    name,age
  }
}
const stateDipatch =(dipatch)=>{
  return {
    firstIndex:()=>{dipatch(firstData())},
    secondIndex:()=>{dipatch(secondData())},
    thirdIndex:()=>{dipatch(thirdData())},
  }
}

export default connect(statePrope,stateDipatch)(Home);
