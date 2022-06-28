import {
  CalendarToday,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  AccessibilityRounded
} from "@material-ui/icons";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { format } from "timeago.js";
import { updateUserbyId } from "../../redux/apiCalls";
import { userRequest } from "../../requestMethods";
import "./user.css";

export default function User() {

  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const [user, setUser] = useState({});

  const [isAdmin, setIsAdmi] = useState(false);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await userRequest.get("users/" + userId);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }

    }; getUser();
  }, [userId]);

  const handleUpdate = () => {
    const updateUser = {};
    if(username !== ""){
      updateUser.username = username
    };
    if (name !== "") {
      updateUser.name = name
    };
    if (mail !== "") {
      updateUser.mail = mail
    };
    if (phone !== "") {
      updateUser.phone = phone
    };
    updateUser.isAdmin = isAdmin;
    updateUserbyId(userId, updateUser);
    window.location.reload();
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Editar usuario</h1>
        <Link to="/newUser">
          <button className="userAddButton">Crear</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://icon-library.com/images/no-profile-picture-icon-female/no-profile-picture-icon-female-17.jpg"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.name}</span>
              <span className="userShowUserTitle">{user._id}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Cuenta</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user.username}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{format(user.createdAt)}</span>
            </div>
            <div className="userShowInfo">
              <AccessibilityRounded className="userShowIcon" />
              <span className="userShowInfoTitle">{((user.isAdmin) ? "Es administrador" : "No es administrador")}</span>
            </div>
            <span className="userShowTitle">Contacto</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{user.phone}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{user.mail}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Editar</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Usuario</label>
                <input
                  onChange={e => {
                    setUsername(e.target.value)
                  }}
                  type="text"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Nombre Completo</label>
                <input
                  onChange={e => {
                    setName(e.target.value)
                  }}
                  type="text"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  onChange={e => {
                    setMail(e.target.value)
                  }}
                  type="mail"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateItem">
                <label>Teléfono</label>
                <input
                  onChange={e => {
                    setPhone(e.target.value)
                  }}
                  type="text"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Administrador</label>
                <input
                  onChange={e => {
                    setIsAdmi(e.target.checked)
                  }}
                  type="checkbox"
                  className="userUpdateInput"
                />
              </div>

            </div>
          </form>
          <button className="userUpdateButton" onClick={handleUpdate}>Actualizar</button>
        </div>
      </div>
    </div>
  );
}
