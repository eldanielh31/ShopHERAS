import "./salesList.css"
import { DataGrid } from "@material-ui/data-grid"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getOrders } from "../../redux/apiCalls";
import { useEffect } from "react";

export default function SalesList(){

    //UserID
    //Products
    //amount
    //address

    const dispatch = useDispatch();
    const orders = useSelector((state) => state.order.orders);

    useEffect(() => {
        getOrders(dispatch);
    }, [dispatch]);

    const columns = [
        { field: '_id', headerName: 'ID', width: 220 },
        { field: 'userId', headerName: 'UserID', width: 220 },
        { field: 'name', headerName: 'Nombre', width: 300 },
        { field: 'amount', headerName: 'Monto', width: 150 },
        { field: 'address', headerName: 'Dirección', width: 300 },
        // {
        //     field: 'fullName',
        //     headerName: 'Full name',
        //     description: 'This column has a value getter and is not sortable.',
        //     sortable: false,
        //     width: 160,
        //     valueGetter: (params) =>
        //         `${params.row.name || ''} ${params.row.address || ''}`,
        // },
    ];

  return (
    <div className="salesList">
        <DataGrid
            rows={orders}
            columns={columns}
            disableSelectionOnClick
            getRowId={(row) => row._id}
            pamountSize={5}
        />
    </div>
  )
}