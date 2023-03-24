import { useSelector } from "react-redux"
import { Navbar } from "../../components"

export function Profile() {

  const { displayName, email, photoURL } = useSelector(state => state.auth)

  return (
    <div>
      <Navbar />
      <p>Nombre: {displayName}</p>
      <p>E-Mail: {email}</p>
      <img src={photoURL} alt="" />
    </div>
  )
}