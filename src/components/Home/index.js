import {useState, useEffect} from 'react'
import './index.css'

const Home = props =>{
  const [apiStatus,setApiStatus]=useState({
    name: "",
    email: "",
    pno: "",
    nameError: false,
    emailError: false,
    pnoError: false,
  })

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('page1'));
    if (items) {
     setApiStatus(items);
    }
  }, []);

  const onChangename=event=>{
    if(event.target.value===""){
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            name: event.target.value,
            nameError: true,
        }))
    }
    else{
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            name: event.target.value,
            nameError: false
        }))
    }
  }

  const onChangeEmail=event=>{
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(event.target.value==="" || !event.target.value.match(validEmail)){
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            email: event.target.value,
            emailError: true,
        }))
    }
    else{
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            email: event.target.value,
            emailError: false
        }))
    }
  }

  const onChangePNo=event=>{
    if(event.target.value===""){
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            pno: event.target.value,
            pnoError: true,
        }))
    }
    else{
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            pno: event.target.value,
            pnoError: false
        }))
    }
  }

  const onBlurName=event=>{
    if(event.target.value===""){
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            nameError: true,
        }))
    }
    else{
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            nameError: false
        }))
    }
  }

  const onBlurEmail=event=>{
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(event.target.value==="" || !event.target.value.match(validEmail)){
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            emailError: true,
        }))
    }
    else{
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            emailError: false
        }))
    }
  }

  const onBlurPNO=event=>{
    if(event.target.value===""){
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            pnoError: true,
        }))
    }
    else{
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            pnoError: false
        }))
    }
  }

  const submitPersonalView=event=>{
    event.preventDefault()
    const {name,email,pno}=apiStatus
    if(name===""){
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            nameError: true
        }))
    }
    else if(email===""){
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            emailError: true
        }))
    }
    else if(pno===""){
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            pnoError: true
        }))
    }
    else{
        localStorage.setItem('page1', JSON.stringify(apiStatus))
        const {history} = props
        history.push('/page2')
    }
  }

  const rendername=()=>{
    const {name,nameError}=apiStatus
    return(
        <div className="personal-view-form-inner-container">
            <label id="personal-view-label" htmlFor="personal-view-name">Name*:</label><br/>
            <input className="personal-view-input" type="text" id="personal-view-name" placeholder="Enter Name" value={name} onChange={onChangename} onBlur={onBlurName}/>
            {nameError && <p className="personal-view-error">Required</p>}
        </div>
    )
  }

  const renderEmail=()=>{
    const {email,emailError}=apiStatus
    return(
        <div className="personal-view-form-inner-container">
            <label id="personal-view-label" htmlFor="personal-view-email">Email*:</label><br/>
            <input className="personal-view-input" type="text" id="personal-view-email" placeholder="Enter Email" value={email} onChange={onChangeEmail} onBlur={onBlurEmail}/>
            {emailError && <p className="personal-view-error">Required / Email is not in a right format</p>}
        </div>
    )
  }

  const renderPNo=()=>{
    const {pno,pnoError}=apiStatus
    return(
        <div className="personal-view-form-inner-container">
            <label id="personal-view-label" htmlFor="personal-view-pno">Phone No*:</label><br/>
            <input className="personal-view-input" type="text" id="personal-view-pno" placeholder="Enter Phone No" value={pno} onChange={onChangePNo} onBlur={onBlurPNO}/>
            {pnoError && <p className="personal-view-error">Required</p>}
        </div>
    )
  }

  const renderPersonalView = () =>{
    return(
        <form className="personal-view-form-container" onSubmit={submitPersonalView}>
            <h1 className="personal-view-headding">Personal Information:</h1>
            {rendername()}
            {renderEmail()}
            {renderPNo()}
            <div className="personal-view-button-container">
            <button className="personal-view-button" type="submit">Next</button>
            </div>
        </form>
    )
  }

  return <div className="page1">{renderPersonalView()}</div>
}

export default Home