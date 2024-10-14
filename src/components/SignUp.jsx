import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import {
    Button,
    Checkbox,
    FileInput,
    Label,
    Radio,
    RangeSlider,
    Select,
    Textarea,
    TextInput,
    ToggleSwitch,
  } from "flowbite-react";

import axios from 'axios';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';




const SignUp = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email:"",
        password:"",
        password2:"",
    });
    const [error, setError] = useState("")
    const {email, password, password2} = formData

    const onChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const onSubmit = async (e) =>{
        e.preventDefault();
        if (!email || !password || !password2){
            setError("All fields are required");
        }else if(password != password2){
            alert('Passwords do not match');
        }else {
            try{
                const res = await axios.post('http://127.0.0.1:8000/api/auth/register/',{
                    email, password,password2,
                });
                if (res.status === 201){
                    navigate("/login")
                }
                console.log(res.data);
                alert(`Hi ${email}, you have successfully sign up!`)
                
            }catch (err) {
                console.error(err.response.data);
                alert('Error signing up');
            }

        }

    };

    return (
        <div>
            <h2 className='align-center text-red-800'>Sign Up</h2>
            {error && <div className='error'>{error}</div>}
            <form className="flex md:w-1/3 m-auto flex-col gap-4 mt-20 " onSubmit={onSubmit}>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email2" value="Your email" />
                    </div>
                    <TextInput id="email2" name='email' type="email" value={email} onChange={onChange} placeholder="name@flowbite.com" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password2" value="Your password" />
                    </div>
                    <TextInput id="password2" name='password' type="password" value={password} onChange={onChange} required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="repeat-password"  value="Repeat password" />
                    </div>
                    <TextInput id="repeat-password" name='password2'  value={password2} onChange={onChange} type="password" required shadow />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="agree" />
                    <Label htmlFor="agree" className="flex">
                        I agree with the&nbsp;
                        <a href="#" className="text-red-600 hover:underline dark:text-cyan-500">
                            terms and conditions
                        </a>
                    </Label>
                </div>
                <Button type="submit" className='bg-brandPrimary transition-all duration-300 hover:bg-neutralDGrey'>Register new account</Button>
                <p className='mt-0 text-10xl'> Already have an account? <a href="/login" className='text-blue-500'>Login</a></p>
            </form>
        </div>

    );
};


export default SignUp;