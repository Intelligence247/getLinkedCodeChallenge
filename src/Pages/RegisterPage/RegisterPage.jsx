import React, { useEffect, useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import { Link } from 'react-router-dom'
import "./RegisterPage.css"
import { Audio } from 'react-loader-spinner'
import axios from 'axios'
const RegisterPage = () => {
  const [load, setload] = useState(false);
  const [options, setOptions] = useState([]);
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [team, setteam] = useState('');
  const [size, setsize] = useState('');
  const [topic, settopic] = useState('');
  const [category, setcategory] = useState('');
  const [checked, setchecked] = useState(false);
  const [done, setdone] = useState(false);

  const baseUrl = "https://backend.getlinked.ai";
  const url4 ="https://backend.getlinked.ai/hackathon/contact-form"
  const url = `${baseUrl}/hackathon/categories-list`
  const registerUrl = `${baseUrl}/hackathon/registration`




  useEffect(() => {
    const timeover= setTimeout(() => {
      setload(false)
    }, 200);
     

       return () => {
         clearTimeout(timeover)

       }
     }, [load])

     

const getCategory = async (e) => {
try {

  const response = axios.get(url)
  .then(response=>{
    setOptions(response.data)
    console.log(options)

  })
  
} catch (error) {
  console.log(error)
}     
}

const register = async (e) => {
  e.preventDefault()
  const data = {
    email: email,
  phone_number: phone,
  team_name: team,
  group_size: size,
  project_topic: topic,
  category: category,
  privacy_poclicy_accepted: checked,
  }
try {
 
  const resp = await axios.post(registerUrl, data);
  console.log(resp)
  alert("succesfully Registered")
  setdone(true)

} catch (error) {
  console.log(error+"Register Post Error is here")
  alert("Registered Error")

}
}

     useEffect(() => {
        getCategory()
        register()
     }, []);
     

  return (
    <div className='RegistrationWrapper1'>
         <NavBar/>
     <div className="registrationWrapper ">
      <h1 className='lg:hidden block text-[20px] text-primaryPurple px-4'>Register</h1>
      <div className="registerLeft relative">
<img src="stargray.png" className='left-[10%] top-[100%] absolute lg:w-max w-[10px]  ' alt="" />
<img src="starpurple.png" className='left-[10%] top-[10%] absolute lg:w-max w-[10px]  ' alt="" />
<img src="starblue.png" className='left-[85%] top-[85%] absolute lg:w-max w-[10px]  ' alt="" />



        <img src="registerimg.png" alt="" />
      </div>
     <div className="registerRight pt-20 pb-4 relative">
    
<img src="starwhite.png" className='left-[85%] top-[100%] absolute w-[10px]  ' alt="" />
<img src="stargray.png" className='left-[80%] bottom-[70%] absolute lg:w-max w-[10px]  ' alt="" />

      <h1>Register</h1>
      <div className="trek flex items-baseline space-x-2">
        <p>Be part of this movement!</p>
        <div className="trekking flex flex-col justify-center items-center">
          <div className="bothImg flex">
          <img src="trek2.png" alt="" />
          <img src="trek1.png" alt="" />
          </div>
          <img src="/dots.png" alt="" />
        </div>
      </div>
      <h1>CREATE YOUR ACCOUNT</h1>
      <form className="inputs" onSubmit={register}>
        <div className="firstInput">
        <label htmlFor="">Team’s Name</label>
        <input
        value={team}
        onChange={(e)=> setteam(e.target.value)
        }
        required
         type="text" placeholder='Enter the name of your group'/>

        </div>
        {/*  */}
        <div className="firstInput">
        <label htmlFor="">Phone</label>
        <input
        type="number"
        value={phone}
        
        onChange={(e)=> setphone(e.target.value)

        } required placeholder='Enter your phone number'/>
        </div>
        {/*  */}
        <div className="firstInput">
        <label htmlFor="">Email</label>
        <input
        value={email}
        
        onChange={(e)=> setemail(e.target.value)

        } required type="email" placeholder='Enter your email address'/>
        </div>
        {/*  */}
        <div className="firstInput">
        <label htmlFor="">Project Topic</label>
        <input
        value={topic}
        
        onChange={(e)=> settopic(e.target.value)

        } required type="text" placeholder='What is your group project topic'/>
        </div>
         {/*  */}
         <div className="firstInput">
        <label htmlFor="">Category</label>
        <select name="" 
        onChange={(e)=>setcategory(e.target.value)}
         id="">
          {
            options.length !== 0? (
              options.map((o, i)=> (
          <option key={i} id={o.id} value={o.name}>{o.name}</option>

              ))
            ):''
          }
         
        </select>
        </div>
        {/*  */}
        <div className="firstInput">
        <label htmlFor="">Group Size</label>
        <select value={size} onChange={(e)=> setsize(e.target.value)} id="">
          <option value={"select"}>Select</option>
          <option value="10">10</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        </div>
      </form>
      <div className="erroM">Please review your registration details before submitting</div>
      <div className="agreed">
      <input
onClick={(e)=> setchecked(!checked)}
 type="checkbox" name="" id="" />
      <p>I agreed with the event terms and conditions  and privacy policy</p>
      </div>
      <div className={`load w-full flex justify-center items-center ${load?"block":'hidden'}`}>
    <Audio
    color='#D434FE'
    height={50}
    width={50}
    />
      </div>
<Link to={done && checked ?"/confirmation": ''}
onClick={()=>{
  checked?'':alert("You must accept terms and conditions")
}}
> <button className='w-full'>Register Now</button></Link>
     </div>
     </div>
    </div>
  )
}

export default RegisterPage
