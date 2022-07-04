import React, { useEffect, useRef, useState } from "react"

import "./Meeting.css"
import {db} from './firebase-config'
import {collection, getDocs,addDoc,updateDoc,deleteDoc,doc} from "firebase/firestore"

import {useNavigate} from "react-router-dom" 




function Meeting () {
    let navigate = useNavigate();

    const [meetingAgendas,setAgendas] = useState([]) ;
    const[newMeetingTopic,setNewTopic]=useState("");
    const[newMeetingTime,setNewTime]=useState(0);
    const[newDescription,setNewDescription]=useState("");
    const agendasCollectionRef = collection (db,"meetingAgendas");
   


    const createAgenda = async()=>{

        await addDoc(agendasCollectionRef, { meetingTopics: newMeetingTopic, meetingTime: Number(newMeetingTime), description:newDescription});
       }

       const updateAgenda = async (id, meetingTime) => {
        const userDoc = doc(db, "meetingAgendas", id);
        const newFields = { meetingTime: meetingTime + 1 };
        await updateDoc(userDoc, newFields);
      };
      
       
      
       const deleteAgendas = async (id) => {
        const userDoc = doc(db, "meetingAgendas", id);
        await deleteDoc(userDoc);
      };   

     
    
   


    useEffect(()=>{

        const getAgendas = async()=>{
            const data = await getDocs(agendasCollectionRef); //
            //console.log(data);
            setAgendas(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
        };

        getAgendas();
    }, [])
  return (
    
    <div className="Meeting">
          <label> Meeting topic</label>
            <input type="text" onChange={(event)=>{setNewTopic(event.target.value)}}></input>
            <label> Duration</label>
            <input type="number" onChange={(event)=>{setNewTime(event.target.value)}}></input>
            <label> Meeting description</label>
            <textarea onChange={(event)=>{setNewDescription(event.target.value)}} ></textarea>

            <button onClick={createAgenda}> Add Meeting Agendas</button>
        
        {meetingAgendas.map((meetingAgendas)=>{
        return <div> 
          
            <h1>Meeting Topic : {meetingAgendas.meetingTopics}</h1>
            <h1>Meeting Topic : {meetingAgendas.meetingTopics}</h1>
            <h2>Meeting Time : {meetingAgendas.meetingTime} hr</h2>
            <button
              onClick={() => {
                updateAgenda(meetingAgendas.id, meetingAgendas.meetingTime);
              }}
            >
              {" "}
              Increase Meeting Time by One Hour
            </button>

            <button Delete user onClick={()=>{deleteAgendas(meetingAgendas.id)}}> Delete Agenda</button>
            <button 
                    onClick={()=>{
                        navigate ("/VideoChat")
                    }
                    }>Call</button>
        </div>
    })}</div>
  )
}

export default Meeting;