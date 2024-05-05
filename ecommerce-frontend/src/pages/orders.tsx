import { ReactElement, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Column } from "react-table";
import TableHOC from "../components/admin/TableHOC";

type DataType = {
  _id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
};

const column: Column<DataType>[] = [
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const Orders = () => {
  const [rows, setRows] = useState<DataType[]>([
    {
      _id: "1",
      amount: 100,
      discount: 10,
      quantity: 2,
      status: <span className="red">Processing</span>,
      action: <Link to={`/orders`}>Manage</Link>,
    },
  ]);

  //   useEffect(() => {
  //     if (data)
  //       setRows(
  //         data.orders.map((i) => ({
  //           _id: i._id,
  //           amount: i.total,
  //           discount: i.discount,
  //           quantity: i.orderItems.length,
  //           status: (
  //             <span
  //               className={
  //                 i.status === "Processing"
  //                   ? "red"
  //                   : i.status === "Shipped"
  //                   ? "green"
  //                   : "purple"
  //               }
  //             >
  //               {i.status}
  //             </span>
  //           ),
  //           action: <Link to={`/admin/transaction/${i._id}`}>Manage</Link>,
  //         }))
  //       );
  //   }, [data]);

  const Table = TableHOC<DataType>(
    column,
    rows,
    "dashboard-product-box",
    "Orders",
    rows.length > 6
  )();
  return (
    <div className="container">
      <h1>My Orders</h1>
      {Table}
    </div>
  );
};

export default Orders;
