import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods"
import { Link } from "react-router-dom";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true")
        setUsers(res.data)
      } catch (err) {
      }
    }
    getUsers();
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Nuevos miembros</span>
      <ul className="widgetSmList">
        {users.map(user => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={user.img || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <Link to={"/users/" + user._id} className="link">
              <button className="widgetSmButton" >
                <Visibility className="widgetSmIcon" />
                Ver
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
