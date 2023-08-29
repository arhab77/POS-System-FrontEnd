import React, { useEffect } from "react";
import { Button, Card, Col, Collapse, Container, Row, Table } from "react-bootstrap";
import Sidebar from "../../component/sidebar/sidebar";
import Navbars from "../../component/navbar/navbar";
import { FaAngleDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getOrder, toggleOpenItems } from "../../app/action/orderAction";

const Orders = () => {
    const dispatch = useDispatch();
    const order = useSelector((state) => state.order.items);
    const listItems = useSelector((state) => state.order.openItems);

    useEffect(() => {
        dispatch(getOrder())
    },[dispatch]);

    return(
        <div>
            <Container fluid>
                <Row>
                    <Col sm={2}><Sidebar/></Col>
                    <Col>
                        <Navbars/><br />
                        <Card>
                            <Card.Header>Orders</Card.Header>
                                        {
                                            order.map((item, id) => (
                            <Card.Body key={id}>
                                <Table style={{textAlign:'center'}}>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Order ID</th>
                                            <th>Total</th>
                                            <th>Status</th>
                                            <th>Invoice</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                                <tr key={id}>
                                                    <td onClick={() => dispatch(toggleOpenItems(item._id))}>
                                                        <FaAngleDown/>
                                                    </td>
                                                    <td>{item.order_number}</td>
                                                    <td>Rp. {item.delivery_fee}</td>
                                                    <td>{item.status}</td>
                                                    <td>
                                                        <Button variant="success">
                                                            Invoice
                                                        </Button>
                                                    </td>
                                                </tr>     
                                    </tbody>
                                </Table>
                                <div style={{textAlign:'center'}}>
                                    <Collapse in={listItems[item._id]}>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>Name Item</th>
                                                    <th>Quantity</th>
                                                    <th>Price</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    item.order_items.map((orderItem, index) => (
                                                        <tr key={index}>
                                                            <td>{orderItem.name}</td>
                                                            <td>{orderItem.qty}</td>
                                                            <td>{orderItem.price}</td>
                                                            <td>{orderItem.price * orderItem.qty}</td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </Table>
                                    </Collapse>
                                </div>
                            </Card.Body>
))
}
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Orders;