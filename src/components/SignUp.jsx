import React from 'react';
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





const SignUp = () => {

    return (
        <div>
            <form className="flex md:w-1/3 m-auto flex-col gap-4 mt-20 " >
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email2" value="Your email" />
                    </div>
                    <TextInput id="email2" type="email" placeholder="name@flowbite.com" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password2" value="Your password" />
                    </div>
                    <TextInput id="password2" type="password" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="repeat-password" value="Repeat password" />
                    </div>
                    <TextInput id="repeat-password" type="password" required shadow />
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
            </form>
        </div>

    );
};


export default SignUp;