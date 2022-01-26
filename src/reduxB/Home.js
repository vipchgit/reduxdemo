import React from 'react';
import {connect} from 'react-redux';
import {toUppercase,toLovercase,updateName} from './action/action';

const Home = (props) => {
  return (<div className='min-h-screen flex justify-center items-center'>
    <div className='pb-11'>
    <h1 className='bg-blue-200 py-11 px-14 rounded-lg text-center'>
     <p>My name is {props.myName}</p><p>My name is {props.myAge}</p>
     </h1>
    <button className='bg-orange-400 px-3 py-2 my-1 rounded-md text-white' onClick={props.upperCase}>Upper Case</button>
    <button className='bg-orange-400 px-3 py-2 m-1 rounded-md text-white' onClick={props.loverCase}>Lover Case</button>
    <button className='bg-orange-400 px-3 py-2 my-1 rounded-md text-white' onClick={()=>props.update("Jay Ch")}>Update Name</button>
    </div>
  </div>);
};

const mapStatetoPrope =(state)=>{
  return {
    myName:state.name,
    myAge:state.age
  }
}

const mapDipatchToProps=(dipatch)=>{
    return{
      upperCase:()=>dipatch(toUppercase()),
      loverCase:()=>dipatch(toLovercase()),
      update:(name)=>dipatch(updateName(name)),
    }
}

export default connect(mapStatetoPrope,mapDipatchToProps)(Home);
