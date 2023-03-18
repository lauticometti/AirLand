import { Link } from "react-router-dom";
import { LoginForm } from "../../components";

export function Login() {
  return (
    <div>
      <LoginForm />
      <div>
        Doesn't have an account? <Link to='/signup'>Sign Up</Link>
      </div>
    </div>
  )
}