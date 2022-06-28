import "./sidebar.css";
import {
  LineStyle,
  TrendingUp,
  PermIdentity,
  Storefront,
  MailOutline,
  AddShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Inicio
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Social</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Usuarios
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Transacciones</h3>
          <ul className="sidebarList">
            <Link to="/sales" className="link">
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Ordenes
              </li>
            </Link>

          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Tienda</h3>
          <ul className="sidebarList">
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Productos
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Administrar</h3>
          <ul className="sidebarList">
            <Link to="/coupons" className="link">
              <li className="sidebarListItem">
                <AddShoppingCartOutlined className="sidebarIcon" />
                Cupones
              </li>
            </Link>
            <Link to="/suscriptions" className="link">
              <li className="sidebarListItem">
                <MailOutline className="sidebarIcon" />
                Suscripciones
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
