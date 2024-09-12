import {useState, useEffect} from 'react'
import './index.css'

const Page3 = props =>{
  const [apiStatus,setApiStatus]=useState({})

  useEffect(() => {
    const item1 = JSON.parse(localStorage.getItem('page1'))
    const item2 = JSON.parse(localStorage.getItem('page2'))
    const item3={...item1,...item2}
    if (item3) {
     setApiStatus(item3);
    }
  }, []);

  const onClickBack=()=>{
    const {history} = props
    history.push('/page2')
  }

  const onClickSubmit=()=>{
    const {history} = props
    history.push('/page4')
  }

  const renderAddressView = () =>{
    const {name,email,pno,address1,address2,city,state,zipCode}= apiStatus
    return(
        <div className="conformation-view-container">
            <h1 className="conformation-view-headding">Confirmation:</h1>
            <p className="conformation-view-note">Note: Check all the details before submission. Go back to the previous pages if any changes are required.</p>
            <p className="conformation-view-para">Name          :{name}</p>
            <p className="conformation-view-para">email         :{email}</p>
            <p className="conformation-view-para">Phone Number  :{pno}</p>
            <p className="conformation-view-para">Adsress Line 1:{address1}</p>
            <p className="conformation-view-para">Address Line 2:{address2}</p>
            <p className="conformation-view-para">City          :{city}</p>
            <p className="conformation-view-para">State         :{state}</p>
            <p className="conformation-view-para">Zip Code      :{zipCode}</p>
            <div className="conformation-view-button-container">
                <button className="conformation-view-button" type="button" onClick={onClickBack}>Back</button>
                <button className="conformation-view-button" type="submit" onClick={onClickSubmit}>Submit</button>
            </div>
        </div>
    )
  }

  return <div className="page3">{renderAddressView()}</div>
}

export default Page3