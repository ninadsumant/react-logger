import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Tabs } from "antd";
import {Progress} from '../steps/Progress'; 
import { setCurrentOrder, updateOrder } from  '../../actions/orderActions';


import M from "materialize-css/dist/js/materialize.js";

const { TabPane } = Tabs;

const OrderTab = ({ order, setCurrentOrder, updateOrder, current }) => {

  const [origSysDocRef, setOrigSysDocRef] = useState(order.origSysDocRef);
  const [customerPoNumber, setCustomerPoNumber] = useState(order.customerPoNumber);
  const [address1, setAddress1] = useState(order.address1);
  const [address2, setAddress2] = useState(order.address2);
  const [address3, setAddress3] = useState(order.address3);
  const [city, setCity] = useState(order.city);
  const [state, setState] = useState(order.state);
  const [country, setCountry] = useState(order.country);
  const [edit, setEdit] = useState(true);

  useEffect(() => {
    if(current) {
      setEdit(false);
      // setAddress1(current.address1);
      // setAddress2(current.address2);
      // setAddress3(current.address3);
      // setState(current.state);
      // setCity(current.city);
      // setCountry(current.country);
      // setOrigSysDocRef(current.origSysDocRef);
      // setCustomerPoNumber(current.customerPoNumber);
      console.log(current.address1);
    }
  }, [current]);

  const onSubmit = () => {
    if (address1 === '' || address2 === '') {
        M.toast({ html: 'Please Enter Address1 or Address2' });
    } else {
      const updOrder = {
        id: current.id,
        customerPoNumber,
        address1,
        address2,
        address3,
        city,
        state,
        country,
        origSysDocRef
      }
      console.log(address1);

      updateOrder(updOrder);
      M.toast({ html: `Order updated ` });

      //clear fields
      // setEdit(true);
      // setAddress1('');
      // setAddress2('');
      // setAddress3('');
      // setState('');
      // setCity('');
      // setCountry('');
      // setOrigSysDocRef('');
      // setCustomerPoNumber('');

      setAddress1(order.address1);
      setAddress2(order.address2);
      setAddress3(order.address3);
      setState(order.state);
      setCity(order.city);
      setCountry(order.country);
      setOrigSysDocRef(order.origSysDocRef);
      setCustomerPoNumber(order.customerPoNumber);
    }
}


  
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Message" key="1">
          <div className="row">
            <div className={` ${order.address1 !== order.address2 ? 'input-field red-text' : 'input-field' }`}>
              <input
                type="text"
                name="Address 1"
                value={address1}
                readOnly={edit}
                onChange={(e) => setAddress1(e.target.value)}
              />
              <label htmlFor="address1" className="active">
                Address 1
              </label>
            </div>
          </div>

          <div className="row">
            <div className="input-field">
              <input
                type="text"
                name="Address 2"
                value={address2}
                readOnly={edit}
                onChange={(e) => setAddress2(e.target.value)}
              />
              <label htmlFor="address2" className="active">
                Address 2
              </label>
            </div>
          </div>

          <div className="row">
            <div className="input-field">
              <input
                type="text"
                name="Address 3"
                value={address3}
                readOnly={edit}
                onChange={(e) => setAddress3(e.target.value)}
              />
              <label htmlFor="address3" className="active">
                Address 3
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <input
                type="text"
                name="State"
                value={state}
                readOnly={edit}
                onChange={(e) => setState(e.target.value)}
              />
              <label htmlFor="state" className="active">
                State
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <input
                type="text"
                name="Country"
                value={country}
                readOnly={edit}
                onChange={(e) => setCountry(e.target.value)}
              />
              <label htmlFor="country" className="active">
                Country
              </label>
            </div>
          </div>
          <div className="right">
            <a
              href="#!"
              onClick={onSubmit}
              className={` ${edit ? 'modal-close waves-effect blue waves-light btn disabled' : 'modal-close waves-effect blue waves-light btn' }`}
            >
              Update
            </a>
          </div>
          <div className="right">
            <a
              href="#!"
              onClick={() => setCurrentOrder(order)}
              className="modal-close waves-effect blue waves-light btn"
            >
              Edit
            </a>
          </div>
        </TabPane>
        <TabPane tab="Tech" key="2">
          <Progress />
        </TabPane>
        <TabPane tab="Date" key="3">
          Third Tab
        </TabPane>
      </Tabs>
    </div>
  );
};

OrderTab.propTypes = {
  order: PropTypes.object.isRequired,
  setCurrentOrder: PropTypes.func.isRequired,
  current: PropTypes.object,
  updateOrder: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  // order: state.order
  current: state.order.current
});

export default connect(mapStateToProps, { setCurrentOrder, updateOrder }) (OrderTab);
