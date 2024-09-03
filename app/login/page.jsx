"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import { useState } from "react";

import { signIn } from "next-auth/react";

const Login = (e) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    // Router to redirect users on signup.
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!username || !password) {
            setErrorMsg("All fields must be populated");
            return;
        }

        try {
            // TITLE: This block of code is responsible for creating a new user, checking if a user exists, redirecting on success, etc. May be useful for registration system at a later date.
            // Checks if user already exists - REGISTER
            // const resUserExists = await fetch("api/userExists", {
            //     method: "POST",
            //     headers: {
            //       "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({ username }),
            //   });
        
            //   const { user } = await resUserExists.json();
        
            //   if (user) {
            //     setErrorMsg("User already exists.");
            //     return;
            //   }

            // // Registers new user - REGISTER
            // const res = await fetch('api/register', {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({
            //         username, password
            //     })
            // })

            // // Checks if new user registration was successful - REGISTER
            // if(res.ok) {
            //     const form = e.target;
            //     // Resets form
            //     form.reset();
            //     // Redirects to login page
            //     router.push("/")
            // } else {
            //     console.log("User registration failed.");
            // }
            const res = await signIn('credentials', {
                username,
                password,
                redirect:false,
            });

            if (res.error) {
                setErrorMsg("Invalid Credentials");
                return;
            }

            router.replace("dash")
        } catch (error) {
            console.log("Error during user registration.", error);
        }
    };

    return (
        <div className='min-h-[80vh] flex flex-col items-center justify-center py-12 xl:py-0'>
            <h1 className="w-full text-center h2 mb-4">Login</h1>
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
                {/* Input */}
                <div className="grid grid-cols-1 gap-6">
                    <Input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />    
                    <Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />       
                </div> 
                {/* Btn */}
                <Button size='md' className='w-40 place-self-center'>Login</Button>
                {errorMsg && (
                    <span>{errorMsg}</span> 
                )}                    
            </form>
        </div>
    )
}

export default Login;