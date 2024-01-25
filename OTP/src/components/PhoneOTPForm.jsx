import {useState} from 'react'
import OtpInput from './OtpInput';

const PhoneOTPForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [showOtpInput, setShowOtpInput] = useState(false)
  
  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value)
  };
  const handlePhoneSubmit = (event)=>{
    event.preventDefault()

    // here we will perform some phone number validation
    const regex = /[^0-9]/g       // regular expression for identifying numbers
    if(phoneNumber.length < 10 || regex.test(phoneNumber)){
      alert("Invalid Phone Number")
      return;
    }
    // Here we can write code for Calling BackEnd API so that we can send OTP to user
    // If OTP sent successfully then show OTP field
    setShowOtpInput(true)
  }

const onOtpSubmit = (otp)=>{
  console.log("Login Succfull", otp)    // Input logic can go here
};


  return (
    <div>
      {!showOtpInput ? (
        <form onSubmit={handlePhoneSubmit}>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter Phone Number"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Entered OTP sent to {phoneNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
      };

    export default PhoneOTPForm
