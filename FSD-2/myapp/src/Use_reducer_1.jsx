import { type } from '@testing-library/user-event/dist/type'
import React,{useReducer} from 'react'

export default function Use_reducer_1() {
    const [state,dispatch]=useReducer(reducer,0)
    function reducer(state,action){
        if(action.type=="increament"){
            return state+1
        }
        if (action.type=="decrement"){
            return state-1
        }
    }
  return (
    <div>
        <button onClick={()=> dispatch({type:"increament"})}>Increament</button>
        <button onClick={()=> dispatch({type:"decrement"})}>Decrement</button>
        <h1>{state}</h1>
    </div>
  )
}
