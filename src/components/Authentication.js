import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { auth } from '../services/firebaseConfig'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

const Authentication = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoginView, setIsLoginView] = useState(true)

    const loginAction = async () => {
        if (email !== "" && password !== "") {
            try {
                await signInWithEmailAndPassword(auth, email, password)
                    .then(async (user) => {
                        console.log(user);
                    })
            } catch (error) {
                toast.error(error.message)
            }
        } else {
            toast.error("All inputs required")
        }
    }


    const signupAction = async () => {
        if (email !== "" && password !== "") {
            try {
                await createUserWithEmailAndPassword(auth, email, password)
                    .then(async (user) => {
                        console.log(user);
                    })
            } catch (error) {
                toast.error(error.message)
            }
        } else {
            toast.error("All inputs required")
        }
    }

    return (

        <div style={{ marginTop: 50 }}>
            <ToastContainer />


            {
                isLoginView ? (<>
                    <h1 className='title'>Login</h1>

                    <label className="form-label">Email address</label>
                    <input
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        type="email"
                        className="form-control" />

                    <label className="form-label">Password</label>
                    <input
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        type="password"
                        className="form-control" />

                    <button onClick={loginAction} className='btn btn-dark'>Login</button>
                </>) : (<>
                    <h1 className='title'>Create New Account</h1>

                    <label className="form-label">Email address</label>
                    <input
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        type="email"
                        className="form-control" />

                    <label className="form-label">Password</label>
                    <input
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        type="password"
                        className="form-control" />

                    <button onClick={signupAction} className='btn btn-dark'>Sign Up</button>
                </>)
            }

            <button onClick={() => setIsLoginView(!isLoginView)} className='btn btn-outline-dark'>
                { isLoginView ? "Go to signup" : "Go to login" }
            </button>


            {auth?.currentUser?.uid}

            















        </div>

    )
}

export default Authentication