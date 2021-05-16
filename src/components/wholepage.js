import React from 'react'
import "./wholepage.css"
import {useEffect, useState} from 'react'
import axios from 'axios'
import growingupman from "./images/growing-up-man.svg"
import growingupwomen from "./images/growing-up-woman.svg"
import mail from "./images/mail.svg"
import man from "./images/man.svg"
import map from "./images/map.svg"
import padlock from "./images/padlock.svg"
import phone from "./images/phone.svg"
import woman from "./images/woman.svg"

export default function Wholepage() {
    const [data,setData] = useState([])
    const [text,setText] = useState("My Name is")
    const [currentData, setCurrentData] = useState()
    const arr = []
    const getData = () =>{
        axios.get("https://randomuser.me/api/").then((res)=>{
            setData(res.data.results)
            setCurrentData(res.data.results[0].name.title + " " + res.data.results[0].name.first + " " + res.data.results[0].name.last)
        })
    }
    useEffect(()=>{
        getData();
    },[])
    const handleAddUser = () =>{
        arr.push({name: data[0].name.title + " " + data[0].name.first + " " + data[0].name.last , email: data[0].email , phone: data[0].cell, age:data[0].dob.age})
        console.log(arr)
    }
    
    
    return (
        <div className="outerDiv">
            

            {data?.map((element)=>{
                console.log(element)

                return(
                    <div className="contentdiv">
                    <div className="imagentext">
                        <img src={element.picture.large} className="image" alt="userimage"/><br/><br/>
                        
                        <div className="datatext">{text}<br/><br/>{currentData}</div>
                        </div>
                    <div className="hoverimages">
                        <img src={element.gender == "male" ? man : woman} alt="loading" className="img" onMouseOver={() => {setText("My Name Is") ; setCurrentData(element.name.title + " " + element.name.first + " " + element.name.last)}}/>
                        <img src={mail} className="img" alt="loading" onMouseOver={()=>{setText("My Email Is") ; setCurrentData(element.email)}}/>
                        <img src={element.gender == "male" ? growingupman : growingupwomen} className="img" onMouseOver={()=>{setText("My Age Is"); setCurrentData(element.dob.age)}}/>
                        <img src={map} className="img" alt="loading" onMouseOver={()=>{setText("My Street Address is"); setCurrentData(element.location.street.number +" " + element.location.street.name)}}/>
                        <img src={phone} className="img" alt="loading" onMouseOver={()=>{setText("My Phone Number Is") ; setCurrentData(element.cell)}}/>
                        <img src={padlock} className="img" alt="Loading" onMouseOver={() => {setText("My Password Is") ; setCurrentData(element.login.password)}}/>
                    </div>
                    <div className="buttondiv">
                    <button className="button" onClick={getData}>New User</button>
                    <button className="button" onClick={handleAddUser}>Add User</button>
                    </div>
                    {arr.length > 0 ? <div>
                        <table>
                            <tr>
                                <th>Firstname</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Age</th>
                            </tr>
                        </table>
                    </div>
                    :0}
                    {arr.length > 0 ? arr.map((element)=>{
                    <tr>
                        <td>{element.name}</td>
                        <td>{element.email}</td>
                        <td>{element.phone}</td>
                        <td>{element.age}</td>
                    </tr>
                    }): 0}
                    </div>
                )
            })}
            
        </div>
    )
}