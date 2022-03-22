import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as $ from "./Login.styles"
import "../styles/Login.css"
import axios from 'axios'
function Login() {

    let [username, _username_] = useState("")
    let [password, _password_] = useState("")
    let navigate = useNavigate()
    useEffect(() => {
        // Kiểm tra xem người dùng đã từng login hay chưa
        axios.post("http://localhost:4444/api/auth/verify", { }, { headers: {
            token: localStorage.getItem("auth") || ""
        } })
        .then(response => {
            console.log(response.data)
            /* xác thực hoàn thành trả về homepage */ navigate('/')
            
        }).catch(error => {
            /* xác thực thât bại */ return null
        })
    }, [])

    const login = () => {
        axios.post("http://localhost:4444/api/auth/login", { username, password })
        .then(response => {
            console.log("Đăng nhập thành công", response.data)
            localStorage.setItem("auth", response.data.token)
            localStorage.setItem("user", response.data.user)
            navigate('/')
        })
    }

  return <$.Login>
    <section className="login">
        <div className="imgBox">
            <img src="./images/bgg.jpg" alt="" />
        </div>
        <div className="contentBox">
            <div className="formBox">
                <h2>Login</h2>
                <form action="">
                    <div className="inputBox">
                        <span>Username</span>
                        <input type="text" onChange={({target}) => _username_(target.value)}/>
                    </div>
                    <div className="inputBox">
                        <span>Password</span>
                        <input type="password" onChange={({target}) => _password_(target.value)}/>
                    </div>
                    <div className="remember">
                        <label htmlFor=""><input type="checkbox"/>Remember</label>
                    </div>
                    <div className="inputBox">
                        <button type="button" onClick={login}>Đăng Nhập</button>
                    </div>
                    <div className="inputBox">
                        <p>Nếu chưa có tài khoản, <a href="/register">Đăng Ký</a></p>
                    </div>
                </form>
                <h3>Đăng nhập bằng:</h3>
                <ul className="sci">
                    <li>Google</li>
                    <li>iCloud</li>
                    <li>Microsoft</li>
                </ul>
            </div>
        </div>
    </section>
  </$.Login>
  
}

export default Login