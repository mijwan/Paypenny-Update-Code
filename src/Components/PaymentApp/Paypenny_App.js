import React from 'react'
import "./paypenny_App.css";

const Paypenny_App = () => {
  return (
     <>
     <div className='paypenny-app-background'>
         <div className='paypenny-app-main'>
             <div className='paypenny-app-part'>
                 <h1 className='paypenny-app-header'>With Paypenny You Can Transfer INR(D) from Canada to 125+ banks across India</h1>
                 <p>Paypenny gives you nationwide coverage of India. Transfer INR(D) easily to bank accounts at ICICI, SBI, Citi Bank, Axis Bank and many more!</p>
                 <a href='https://play.google.com/store/apps/details?id=com.bhanguz.Paypenny&hl=en_IN&gl=US' target="_blank"><button className='paypenny-app-btn'>Download Paypenny App</button></a>
             </div>
             <div className='paypenny-app-part1'>
                 <img src='media/4.png' alt='Paypenny App Download'/>
             </div>
         </div>
     </div>
     </>
  )
}

export default Paypenny_App