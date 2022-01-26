import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {changeAge,changeFIndexName,changeSIndexName} from './action/action';

const Home = (prope) => {
  const data = useSelector(state=>state);
  const  dipatch = useDispatch();
  return( <div className='min-h-screen flex justify-center items-center'>
  <div className='flex flex-col'>
    <h1 className='bg-orange-400 px-14 py-12 text-center text-white rounded-lg'>
      <p>My name is {data.name}</p>
      <p>My age is {data.age}</p>
    </h1>
    <div>
    <button className='bg-blue-300 rounded-lg px-2 py-2 my-1 hover:text-gray-600'  onClick={()=>dipatch(changeFIndexName())}>First Index Name</button>
    <button className='bg-blue-300 rounded-lg px-2 py-2 my-1 ml-4 hover:text-gray-600'  onClick={()=>dipatch(changeAge({i:0,age:77}))}>First Index Age</button>
    </div>
    <div>
    <button className='bg-blue-300 rounded-lg px-2 py-2 my-1 hover:text-gray-600'  onClick={()=>dipatch(changeSIndexName())}>Second Index Name</button>
    <button className='bg-blue-300 rounded-lg px-2 py-2 my-1 ml-1 hover:text-gray-600'  onClick={()=>dipatch(changeAge({i:1,age:57}))}>Second Index Age</button>
    </div>

  </div>
</div>);
};

export default Home;
