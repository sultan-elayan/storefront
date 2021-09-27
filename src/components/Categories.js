import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { sendActiveCat } from "../store/action";

const Status = props => {
    return (
        <div >

            <Container>
                <Navbar.Brand >Browse Our Categories </Navbar.Brand>
                <Nav className="me-auto">
                    {props.categoryState.product.categories.map(data =>
                    (<><Nav.Link variant="contained" color="secondary"
                        onClick={() => props.sendActiveCat(data.name)}
                        id={data.name} key={data.name}> {data.displayName} </Nav.Link >
                       </>))}
                </Nav>
            </Container>
            <h2>{props.categoryState.product.activeCategory} </h2>


        </div>
    );
}
const mapStateToProps = state => ({
    categoryState: state
});

const mapDispatchToProps = { sendActiveCat }
export default connect(mapStateToProps, mapDispatchToProps)(Status);
