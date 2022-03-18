import React from 'react'
import * as $ from "./Login.styles"
import "../styles/Login.css"
function Login() {
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
                        <input type="text" />
                    </div>
                    <div className="inputBox">
                        <span>Username</span>
                        <input type="text" />
                    </div>
                    <div className="remember">
                        <label htmlFor=""><input type="checkbox"/>Remember</label>
                    </div>
                    <div className="inputBox">
                        <button type="submit">Đăng Nhập</button>
                    </div>
                    <div className="inputBox">
                        <p>Nếu chưa có tài khoản, <a href="/register">Đăng Ký</a></p>
                    </div>
                </form>
                <h3>Đăng nhập bàng:</h3>
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