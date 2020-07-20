import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getOrders } from '../../actions/orderActions';
import { Table, Skeleton } from "antd";
import OrderTab from "./OrderTab";
// import { getLogs } from '../../actions/logActions';

const columns = [
  {
    title: "Customer PO Number",
    dataIndex: "customerPoNumber",
    key: "customerPoNumber",
    render: (text) => <a href="#!">{text}</a>,
  },
  {
    title: "Orig Sys Document Ref",
    dataIndex: "origSysDocRef",
    key: "origSysDocRef",
  },
  {
    title: "Address 1",
    dataIndex: "address1",
    key: "address1",
  },
  {
    title: "Address 2",
    dataIndex: "address2",
    key: "address2",
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
  },
];

const Orders = ({ order: {orders, loading}, getOrders }) => {
  // const [orders, setOrders] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    getOrders();
    //eslint-disable-next-line
  }, []);

  // const getOrders = async () => {
  //   setLoading(true);
  //   const res = await fetch("/orders");
  //   const data = await res.json();

  //   setOrders(data);
  //   setLoading(false);
  // };

  if (loading) {
    return <Skeleton active />;
  }


  return (
    <div>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (order) =><OrderTab order={order} key={order.customerPoNumber} />,
          // rowExpandable: record => record.name !== 'Not Expandable',
        }}
        dataSource={orders}
        rowKey="customerPoNumber"
      />
    </div>
  );
};

Orders.propTypes = {
  order: PropTypes.object.isRequired,
  getOrders: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  order: state.order
});

export default connect(mapStateToProps, { getOrders }) (Orders);
