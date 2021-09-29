import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap'
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


import { increment } from '../store/action';

const Status = props => {
    function handleClick(props) {


        props.productDetails.push(`/image/${props.name}`)

    }

    return (
        <>
            <Row>
                {props.categoryState.product.products.map((data, idx) => {
                    if (data.category === props.categoryState.product.activeCategory)
                        return (
                            <Col className="cardMinu" sm={3}>
                                <Card key={idx} sx={{ maxWidth: 400 }} Card onClick={handleClick} >
                                    <CardMedia
                                        component="img"
                                        height="340"
                                        image={`${data.image}`}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {data.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {data.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Price : {data.price}</Button>
                                        <Button size="small"> In Stock : {data.inStock} </Button>
                                    </CardActions>
                                    <IconButton color="primary" aria-label="add to shopping cart">
                                        <AddShoppingCartIcon onClick={(inventory) => {
                                            if (data.inStock) {
                                                props.increment(data);
                                            } else {
                                                alert("out of stook");
                                            }
                                        }} />
                                    </IconButton>
                                </Card>
                            </Col>
                        )
                }
                )}
            </Row>
        </>

    );
}

const mapStateToProps = state => ({
    categoryState: state,
    cart: state.cart

});

const mapDispatchToProps = { increment };

export default connect(mapStateToProps, mapDispatchToProps)(Status);















