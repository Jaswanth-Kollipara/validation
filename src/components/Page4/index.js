import { HiCheckCircle } from "react-icons/hi"
import './index.css'

const Page4=props=>{
    const onClickHome=()=>{
        const {history} = props
        history.push('/')
    }

    return(
        <div className="page4">
        <div className="page4-container">
            <h1 className="page4-heading">Thankyou for your pacense. The details are submitted sucessfully.</h1>
            <HiCheckCircle className="page4-icon"/>
            <br/>
            <button className="page4-button" onClick={onClickHome}>Home</button>
        </div>
        </div>
    )
}

export default Page4