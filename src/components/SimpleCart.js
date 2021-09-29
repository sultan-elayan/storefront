
import React from "react";
import { If } from "react-if";
import { connect } from "react-redux";
import { remove } from '../store/action' ;
import { Button } from "@material-ui/core";


const SimpleCart = (props) => {
  return (
    <>
      <section className="simplecart-conitaner">
        <If condition={() => props.cart.length !== 0}>
          <ui>
            {props.cart.map((el, idx) => {
              return (
                <li key={idx}>
                  <span>{el.name}</span>
                  <Button
                    color="secondary"
                    onClick={() => {
                      props.remove(el,idx);
                    }}
                  >
                    Delete
                  </Button>
              
                </li>
              );
            })}
          </ui>
        </If>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart.cart };
};
const mapDispatchToProps = { remove };

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);













// import React from "react";
// import { If } from "react-if";
// import { connect } from "react-redux";
// import { remove } from '../store/action' ;
// import { Button } from "@material-ui/core";


// const SimpleCart = (props) => {
//   return (
//     <>
//       <section className="simplecart-conitaner">
//         <If condition={() => props.cart.length !== 0}>
//           <ui>
//             {props.cart.map((el, idx) => {
//               return (
//                 <li key={idx}>
//                   <span>{el.name}</span>
//                   <Button
//                     color="secondary"
//                     onClick={() => {
//                       props.remove(el,idx);
//                     }}
//                   >
//                     Delete
//                   </Button>
              
//                 </li>
//               );
//             })}
//           </ui>
//         </If>
//       </section>
//     </>
//   );
// };

// const mapStateToProps = (state) => {
//   return { cart: state.cart.cart };
// };
// const mapDispatchToProps = { remove };

// export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);

