import { useRouter } from "next/navigation"
import { useState } from "react"
export default function RestuaranSingUp(){

    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')
    const[c_password, setc_Password]=useState('')
    const[name, setName]=useState('')
    const[city, setCity]=useState('')
    const[address, setAddress]=useState('')
    const[contact, setContact]=useState('')
    const router = useRouter()

    // Form singup event handler
    const handleSingup=async(event)=>{
    event.preventDefault(); 
    // SingUp Data Post Method 
    let response = await fetch('http://localhost:3000/api/restuarants',{
    method:"POST",
    body:JSON.stringify({email,password,name,city,address,contact})
    })

    response = await response.json();
    if(response.success){
      console.log(response)
      const {result} = response;
      delete result.password;
      localStorage.setItem("restuarantUser",JSON.stringify(result))
      router.push("/restuarant/dashboard")
    }
    }
    
    return(
        <div>
              <h1>This is SingUp Page</h1>
              <form>
                <div className="input-wrapper">
                    <input type="text" placeholder="Enter your email id" className="input-field"
                     value={email} onChange={(event)=>setEmail(event.target.value)}/>
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="Enter your password" className="input-field"
                     value={password} onChange={(event)=>setPassword(event.target.value)}/>
                </div>
                 <div className="input-wrapper">
                    <input type="password" placeholder="Enter your confirm password" className="input-field"
                     value={c_password} onChange={(event)=>setc_Password(event.target.value)}/>
                </div>
                 <div className="input-wrapper">
                    <input type="text" placeholder="Enter your resturant name" className="input-field"
                     value={name} onChange={(event)=>setName(event.target.value)}/>
                </div>
                 <div className="input-wrapper">
                    <input type="text" placeholder="Enter city" className="input-field"
                     value={city} onChange={(event)=>setCity(event.target.value)}/>
                </div>
                 <div className="input-wrapper">
                    <input type="text" placeholder="Enter full address" className="input-field"
                     value={address} onChange={(event)=>setAddress(event.target.value)}/>
                </div>
                 <div className="input-wrapper">
                    <input type="number" placeholder="Enter contact number" className="input-field"
                     value={contact} onChange={(event)=>setContact(event.target.value)}/>
                </div>
                <div className="input-wrapper">
                    <button className="button" onClick={handleSingup}>Sing Up</button>
                </div>
             </form>
        </div>
    )

} 