import { Link } from "react-router-dom";
import { RegisterForm } from "../../components";

export function Register() {
  return (
    <div>
      <RegisterForm />
      <div>
        Already have an account? <Link to='/login'>Sign In</Link>
      </div>
    </div>
  )
}