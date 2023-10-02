import React ,{useState} from 'react';



const Myaccordian =({question, answer})=>{
   const [show,setShow] = useState(false);
    return(
        <>
        <div className="question">
            <p className="ques1 icon" onClick = { ()=>setShow(!show)}>{show? "-":"+"}</p>
            <h3 className="ques2">{question}</h3>
        </div>
            <div>
              {
                show && <p className="answer">{answer}</p>
              }
            </div>
        </>

    )
}

export default Myaccordian;