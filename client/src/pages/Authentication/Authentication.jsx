import { useState } from "react";
import { LoginForm, RegisterForm } from "../../components";

export function Authentication() {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <div>
      <div>
        <button onClick={() => setIsLogin(false)}>Sign Up</button>
        <button onClick={() => setIsLogin(true)}>Sign In</button>
      </div>
      {
        isLogin
          ? <LoginForm />
          : <RegisterForm />
      }
    </div>
  )
}
