import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Bienvenida from "./pages/Bienvenida";
import Perfil from "./pages/Perfil";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-4">

        <h2 className="text-center mb-4">
          EXAMEN FINAL DE PAOLA LIZET CHOQUEHUANCA LUCAS (parte 2)
        </h2>

        <table className="table table-bordered shadow">

          <tbody>

            <tr>

              <td className="menu">

                <h6 className="text-center">MENU</h6>

                <Link
                  to="/"
                  className="btn btn-primary w-100 mb-2"
                >
                  BIENVENIDA
                </Link>

                <Link
                  to="/perfil"
                  className="btn btn-primary w-100"
                >
                  PERFIL
                </Link>

              </td>

              <td className="contenido">

                <Routes>
                  <Route path="/" element={<Bienvenida />} />
                  <Route path="/perfil" element={<Perfil />} />
                </Routes>

              </td>

              <td className="publicidad">

                <h6 className="text-center">
                  PUBLICIDAD
                </h6>

                

                <img
                  src="src/assets/publicidad.jpg"
                  alt="Publicidad"
                  className="img-fluid rounded"
                />

              </td>

            </tr>

            <tr>

              <td
                colSpan="3"
                className="footer text-center fw-bold"
              >
                Diseñado por: PAOLA LIZET CHOQUEHUANCA LUCAS, 2026
              </td>

            </tr>

          </tbody>

        </table>

      </div>
    </BrowserRouter>
  );
}

export default App;