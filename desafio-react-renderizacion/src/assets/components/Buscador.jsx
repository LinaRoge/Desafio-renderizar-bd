import PropTypes from "prop-types";

const Buscador = ({ dataBase, setFilter }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const { value } = e.target;
    const searchedValue = value.toLowerCase();

    const dataBaseFiltered = dataBase.filter((user) => {
      return (
        user.nombre.toLowerCase().includes(searchedValue) ||
        user.correo.toLowerCase().includes(searchedValue) ||
        user.edad.toLowerCase().includes(searchedValue) ||
        user.cargo.toLowerCase().includes(searchedValue) ||
        user.telefono.toLowerCase().includes(searchedValue)
      );
    });

    setFilter(dataBaseFiltered);
  };
  return (
    <>
      <div className="input-group">
        <input
          type="search"
          className="form-control rounded-pill buscar"
          placeholder="Ingresa el nombre, correo electrónico, edad o teléfono.. "
          onChange={handleSearch}
        />
      </div>
    </>
  );
};

Buscador.propTypes = {
  dataBase: PropTypes.array.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Buscador;
