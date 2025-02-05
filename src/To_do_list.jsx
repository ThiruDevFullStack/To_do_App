import React, { useState } from 'react'
import './To_do_list.css'

const To_do_list = () => {

    const [input,setInput]=useState("")
     // const [input,setInput]=useState("")
    // console.log(input)

    const [arr,setArr]=useState([])
    // console.log(arr)

    // add itemms
    const addData=()=>{
        setArr([...arr,input])
        setInput("")
    }
     console.log(arr)
    console.log(input)

    // delete items
    const deleteData=(index)=>{
        let deleteList=[...arr];
        deleteList.splice(index,1);
        setArr(deleteList);

    }
   

    //completed data transfer

    const [completeArr,setCompletArr]=useState([])

    const completeData=(index)=>{
        // let completData=[...completeArr];
        // completData.push(index);
        // console.log(completData)
        setCompletArr([...completeArr,arr[index]])
        let deleteList=[...arr];
        deleteList.splice(index,1);
        setArr(deleteList);
    }

    // delete completed items
    const completedel=(index)=>{
        let compldel=[...completeArr];
        compldel.splice(index,1);
        setCompletArr(compldel);


    }


  return (
    <>
     <h1 id='h1El'>Add Your To-Do List !</h1>
    <div className='InputFiled'>
        <input type="text" placeholder='Type Something ...' onChange={(event)=>{setInput(event.target.value)}} value={input}/>
        <button onClick={addData} id='btn'>Add Me</button>
    </div>
   
    <div className='fullData'>

    <div className='StoredItems'>
    <h2>Stored Items</h2>
        {
            arr.map((item,index)=>{
                return <>
                <div id='storedButtons'>
                <div id='list'>
                   <li key={index}>{item}</li>
                </div>
                
                
                <div id='storedButtonsList'>
                   <button id='deletebtn' onClick={()=>{deleteData(index)}}>Delete</button>
                   <button onClick={()=>{completeData(index)}}>Completed</button>
                </div>
                </div>
                </>
            })
        }
    </div>
    
    <div className='CompletedItems'>
        <h2>Completed Items</h2>
        {
            completeArr.map((item,index)=>{
                return <>
                <div id='list'>
                <li key={index}>{item}</li>
                </div>
                <div id='completeButton'>
                <button onClick={(index)=>{completedel(index)}}>Delete</button>
                </div>
                </>
            })
        }
    </div>

    </div>
    </>
  )
}

export default To_do_list