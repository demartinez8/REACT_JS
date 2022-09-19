
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

const navigate = useNavigate();

const login = () => {
    navigate("/inicio");
  };

  return (
    <div className="flex h-screen justify-center items-center">
        <button onClick={login} className="bg-blue-800 py-2 px-6 rounded-lg font-bold text-white">
            Ingresar 👽
        </button>
    </div>
  )
}
