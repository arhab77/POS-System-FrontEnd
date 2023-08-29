import React, { useEffect } from "react";
import { Button, Card, Container, Table } from "react-bootstrap";
import Navbars from "../../component/navbar/navbar";
import { Link, useParams } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { getNewOrder } from "../../app/action/orderAction";

const InvoicePage = () => {
    const { orderId } = useParams();
    const orderData = useSelector((state) => state.order.orderData)

    useEffect(() => {
        getNewOrder(orderId);
    },[orderId]);

    return(
        <div>
            <Container fluid>
                <Navbars/><br />
                <Container>
                    <Card>
                        <Card.Header>Invoice</Card.Header>
                        <Card.Body>
                            <Table>
                                <thead>
                                    <tr>
                                        <th style={{width:'50%'}}></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                            <tbody>
                                    <tr>
                                        <td>Status</td>
                                        <td>{orderData.status}</td>
                                    </tr>
                                    <tr>
                                        <td>Order ID</td>
                                        <td>{orderData._id}</td>
                                    </tr>
                                    <tr>
                                        <td>Total Amount</td>
                                        <td>Rp. {orderData.delivery_fee}</td>
                                    </tr>
                                    <tr>
                                        <td>Billed To</td>
                                        <td>
                                            {orderData.user}
                                            <br />
                                            <br />
                                            {`
                                                ${orderData.delivery_address.provinsi}, 
                                                ${orderData.delivery_address.kabupaten},
                                                ${orderData.delivery_address.kecamatan},
                                                ${orderData.delivery_address.kelurahan}, 
                                                ${orderData.delivery_address.detail}
                                            `}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Payment to</td>
                                        <td>REK BRI: 217382309974</td>
                                    </tr>
                                            
                                </tbody>
                                <br /><br />
                                    <tr>
                                        <td>
                                            
                                        </td>
                                        <td style={{textAlign:'right'}}>
                                            <Link to={`/order`} >
                                                <Button variant="dark">Next</Button>
                                            </Link>
                                        </td>
                                    </tr>
                            </Table>
                        </Card.Body>
                    </Card>
                </Container>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => ({
    orderData: state.order.orderData,
});
  
export default connect(mapStateToProps, { getNewOrder })(InvoicePage);