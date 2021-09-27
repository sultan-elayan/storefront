import {connect} from 'react-redux'

const Status = props => {
    return (
        <section>
            {props.localCart.cartTotal}
        </section>
    )
}

//  reading some state in this component, to display it 
const mapStateToProps = state => ({
    localCart: state.cart
});



export default connect(mapStateToProps)(Status);