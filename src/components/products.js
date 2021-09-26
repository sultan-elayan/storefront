import React from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col } from 'react-bootstrap'
import './profucts.css'

const Status = props => {

    return (
        <>
            <h2>{props.categoryState.dataa.activeCategory} </h2>

            <Row>
                {props.categoryState.dataa.products.map(data => {
                    if (data.category === props.categoryState.dataa.activeCategory)
                        return (
                            <Col className="cardMinu" sm={4}>
                                <Card key={data.name} style={{ backgroundColor: "White", borderRadius: "5%", borderColor: "black", borderBlockStyle: "solid" }} >
                                    <div className="col-12  col-lg-3 " >

                                        <Card.Img style={{ width: '325px', height: '355px', marginLeft: "50px", marginTop: "12px" }} variant="top" src={`${data.image}`} />
                                        <Card.Body style={{ width: "300px" }} >
                                            <Card.Title>Product Name : {data.name} </Card.Title>
                                            <Card.Text>
                                                Price : {data.price}
                                            </Card.Text>
                                            <Card.Text>
                                                In Stock : {data.inStock}
                                            </Card.Text>

                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>
                        )
                }
                )}
            </Row>
        </>
    )
}


const mapStateToProps = state => ({
    categoryState: state
});

export default connect(mapStateToProps)(Status);
