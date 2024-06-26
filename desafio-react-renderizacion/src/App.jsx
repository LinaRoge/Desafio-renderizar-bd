import { BaseColaboradores } from "./assets/js/BaseColaboradores";
import Formulario from "./assets/components/Formulario";
import Listado from "./assets/components/Listado";
import Alert from "./assets/components/Alert";
import { useEffect, useState } from "react";
import "./App.css";
import Buscador from "./assets/components/Buscador";

function App() {
  const [dataBase, setDataBase] = useState(BaseColaboradores);
  const [filter, setFilter] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState({ color: "", alertMessage: "" });

  useEffect(() => {
    setFilter(dataBase);
  }, [dataBase]);

  return (
    <>
      <div className="container-fluid main-container p-3 pt-5 bg-white">
        <h1>Lista de colaboradores</h1>
        <div className="row mb-3">
          <div className="col-md-12 col-lg-8">
            <Buscador dataBase={dataBase} setFilter={setFilter} />
          </div>
        </div>
        <div className="row row-cols-lg-2 row-cols-md-1 general">
          <div className="col-md-12 col-lg-8 listado">
            <Listado colaboratorList={filter} setDataBase={setDataBase} />
          </div>
          <div className="col-md-12 col-lg-4 vstack gap-3 formulario">
            <Formulario
              dataBase={dataBase}
              setDataBase={setDataBase}
              setShowAlert={setShowAlert}
              setMessage={setMessage}
              setFilter={setFilter}
            />
            {showAlert && <Alert message={message} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
