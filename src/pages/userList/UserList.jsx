import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../../redux/apiCalls";

export default function UserList() {

  const users = useSelector((state)=>state.user.users);
  const dispatch = useDispatch();

  useEffect(()=>{
    getUsers(dispatch);
  },[dispatch]);

  const handleDelete = (id) => {
    deleteUser(id, dispatch);
  };
  
  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "username",
      headerName: "Usuario",
      width: 200,
      // renderCell: (params) => {
      //   return (
      //     <div className="userListUser">
      //       <img className="userListImg" src={params.row.img} alt="" />
      //       {params.row.username}
      //     </div>
      //   );
      // },
    },
    {
      field: "name",
      headerName: "Nombre",
      width: 300
    },
    { field: "mail", 
      headerName: "Email", 
      width: 250 
    },
    
    {
      field: "phone",
      headerName: "Celular",
      width: 150,
    },
    {
      field: "isAdmin",
      headerName: "Administrador",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Editar</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <div className="userTitleContainer">
        <h1 className="userTitle">Usuarios</h1>
        <Link to="/newUser">
          <button className="userAddButton">Crear</button>
        </Link>
      </div>
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={5}
      />
    </div>
  );
}
