import {useState, useEffect} from 'react'
import './index.css'

const Page2 = props =>{
  const [apiStatus,setApiStatus]=useState({
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    address1Error: false,
    address2Error: false,
    cityError: false,
    stateError: false,
    zipCodeError: false,
  })

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('page2'));
    if (items) {
     setApiStatus(items);
    }
  }, []);

  const onChangeAddress1=event=>{
    if(event.target.value===""){
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            address1: event.target.value,
            address1Error: true,
        }))
    }
    else{
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            address1: event.target.value,
            address1Error: false
        }))
    }
  }

  const onChangeAddress2=event=>{
    if(event.target.value===""){
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            address2: event.target.value,
            address2Error: true,
        }))
    }
    else{
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            address2: event.target.value,
            address2Error: false
        }))
    }
  }

  const onChangeCity=event=>{
    if(event.target.value===""){
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            city: event.target.value,
            cityError: true,
        }))
    }
    else{
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            city: event.target.value,
            cityError: false
        }))
    }
  }

  const onChangeSta=event=>{
    if(event.target.value===""){
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            state: event.target.value,
            stateError: true,
        }))
    }
    else{
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            state: event.target.value,
            stateError: false
        }))
    }
  }

  const onChangeZipCode=event=>{
    if(event.target.value===""){
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            zipCode: event.target.value,
            zipCodeError: true,
        }))
    }
    else{
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            zipCode: event.target.value,
            zipCodeError: false
        }))
    }
  }

  const onBlurAddress1=event=>{
    if(event.target.value===""){
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            address1Error: true,
        }))
    }
    else{
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            address1Error: false
        }))
    }
  }

  const onBlurAddress2=event=>{
    if(event.target.value===""){
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            address2Error: true,
        }))
    }
    else{
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            address2Error: false
        }))
    }
  }

  const onBlurCity=event=>{
    if(event.target.value===""){
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            cityError: true,
        }))
    }
    else{
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            cityError: false
        }))
    }
  }

  const onBlurSta=event=>{
    if(event.target.value===""){
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            stateError: true,
        }))
    }
    else{
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            stateError: false
        }))
    }
  }

  const onBlurZipCode=event=>{
    if(event.target.value===""){
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            zipCodeError: true,
        }))
    }
    else{
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            zipCodeError: false
        }))
    }
  }

  const submitAddressView=event=>{
    event.preventDefault()
    const {address1,address2,state,zipCode,city}=apiStatus
    if(address1===""){
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            address1Error: true
        }))
    }
    else if(address2===""){
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            address2Error: true
        }))
    }
    else if(state===""){
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            stateError: true
        }))
    }
    else if(city===""){
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            cityError: true
        }))
    }
    else if(zipCode===""){
        setApiStatus((prevApiStatus)=>({
            ...prevApiStatus,
            zipCodeError: true
        }))
    }
    else{
        localStorage.setItem('page2', JSON.stringify(apiStatus))
        const {history} = props
        history.push('/page3')
    }
  }

  const renderAddressLine1=()=>{
    const {address1,address1Error}=apiStatus
    return(
        <div className="address-view-form-inner-container">
            <label className="address-view-label" htmlFor="address-view-line1">Address line 1*:</label><br/>
            <input className="address-view-input" type="text" id="address-view-line1" placeholder="Enter Address line 1" value={address1} onChange={onChangeAddress1} onBlur={onBlurAddress1}/>
            {address1Error && <p className="address-view-error">Required</p>}
        </div>
    )
  }

  const renderAddressLine2=()=>{
    const {address2,address2Error}=apiStatus
    return(
        <div className="address-view-form-inner-container">
            <label className="address-view-label" htmlFor="address-view-line2">Address line 2*:</label><br/>
            <input className="address-view-input" type="text" id="address-view-line2" placeholder="Enter Address line 2" value={address2} onChange={onChangeAddress2} onBlur={onBlurAddress2}/>
            {address2Error && <p className="address-view-error">Required</p>}
        </div>
    )
  }

  const renderCity=()=>{
    const {city, cityError}=apiStatus
    return(
        <div className="address-view-form-inner-container">
            <label className="address-view-label" htmlFor="address-view-city">City*:</label><br/>
            <input className="address-view-input" type="text" id="address-view-city" placeholder="Enter City Name" value={city} onChange={onChangeCity} onBlur={onBlurCity}/>
            {cityError && <p className="address-view-error">Required</p>}
        </div>
    )
  }

  const renderState=()=>{
    const {state,stateError}=apiStatus
    return(
        <div className="address-view-form-inner-container">
            <label className="address-view-label" htmlFor="address-view-state">State*:</label><br/>
            <input className="address-view-input" type="text" id="address-view-state" placeholder="Enter State Name" value={state} onChange={onChangeSta} onBlur={onBlurSta}/>
            {stateError && <p className="address-view-error">Required</p>}
        </div>
    )
  }

  const renderZipCode=()=>{
    const {zipCode,zipCodeError}=apiStatus
    return(
        <div className="address-view-form-inner-container">
            <label className="address-view-label" htmlFor="address-view-zip-code">Zip Code*:</label><br/>
            <input className="address-view-input" type="text" id="address-view-zip-code" placeholder="Enter Zip Code" value={zipCode} onChange={onChangeZipCode} onBlur={onBlurZipCode}/>
            {zipCodeError && <p className="address-view-error">Required</p>}
        </div>
    )
  }

  const onClickBack=()=>{
        localStorage.setItem('page2', JSON.stringify(apiStatus))
        const {history} = props
        history.push('/')
  }

  const renderAddressView = () =>{
    const {address2Error}=apiStatus
    return(
        <form className="address-view-form-container" onSubmit={submitAddressView}>
            <h1 className="address-view-heading">Address Information:</h1>
            {address2Error && <p className="address-view-note">Note: If there is no Address Line 2 please enter Nan</p>}
            {renderAddressLine1()}
            {renderAddressLine2()}
            {renderCity()}
            {renderState()}
            {renderZipCode()}
            <div className="address-view-button-container">
                <button className="address-view-button" type="button" onClick={onClickBack}>Back</button>
                <button className="address-view-button" type="submit">Next</button>
            </div>
        </form>
    )
  }

  return <div className="page2">{renderAddressView()}</div>
}

export default Page2