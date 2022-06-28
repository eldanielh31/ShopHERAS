import { useHistory } from "react-router-dom";
import { createUser } from "../../redux/apiCalls";
import "./newUser.css";

export default function NewUser() {

  const history = useHistory();

  const handleCreate = () => {



    //createUser()

    let path = "/users";
    history.push(path);
  }

  return (
    <div className="newUser">
      <h1 className="newUserTitle">Nuevo Usuario</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Usuario</label>
          <input type="text" required="required" />
        </div>
        <div className="newUserItem">
          <label>Nombre</label>
          <input type="text" required />
        </div>
        <div className="newUserItem">
          <label>Apellidos</label>
          <input type="text" required />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" required />
        </div>
        <div className="newUserItem">
          <label>Contraseña</label>
          <input type="password" required />
        </div>
        <div className="newUserItem">
          <label>Teléfono</label>
          <input type="text" required />
        </div>
        <div className="newUserItem">
          <label>Administrador</label>
          <select className="newUserSelect" name="active" id="active">
            <option value={false}>No</option>
            <option value={true}>Si</option>
          </select>
        </div>
        <button className="newUserButton" onClick={handleCreate}>Crear</button>
      </form>
    </div>
  );
}
