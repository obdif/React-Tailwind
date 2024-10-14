import React, { useState } from 'react';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState(null);

    const handleOnChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const { email, password } = login;

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Email and Password required");
        } else {
            try {
                const res = await axios.post('http://127.0.0.1:8000/api/auth/login/', login);
                // console.log("Response data:", res.data);
                const response = res.data;

                console.log("Login response:", response); 

                // Store user in localStorage
                const user = { "email": response.email };
                console.log("User to store:", user); 
    
                if (res.status === 200) {
                    localStorage.setItem("user", JSON.stringify(user));
                    console.log("Stored user:", localStorage.getItem('user')); 
                    navigate('/');
                    alert("Login successfully");

                    window.location.reload();
                }
            } catch (err) {
                console.log(err.response?.data || "Error");
                setError("Login failed. Please check your credentials.");
                alert("Login not successful");
            }
        }
    };

    return (
        <div>
            <form className="flex md:w-1/3 m-auto flex-col gap-4 mt-20" onSubmit={onSubmit}>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email2" value="Your email" />
                    </div>
                    <TextInput
                        id="email2"
                        type="email"
                        name="email"
                        onChange={handleOnChange}
                        value={email}
                        placeholder="name@flowbite.com"
                        required
                        shadow
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password2" value="Your password" />
                    </div>
                    <TextInput
                        id="password2"
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleOnChange}
                        shadow
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember_me" />
                    <Label htmlFor="remember_me" className="flex">
                        Remember me&nbsp;
                    </Label>
                </div>
                <p>You don't have an account? <a href="/signup" className='text-blue-500'>Sign up</a></p>
                {error && <div className="text-red-500">{error}</div>}
                <Button type="submit" className='bg-brandPrimary transition-all duration-300 hover:bg-neutralDGrey'>
                    Log in
                </Button>
            </form>
        </div>
    );
};

export default Login;
