import React from 'react';

class Cart extends React.Component {

 render(){
    let {cart} = this.props;
    return (
        <div>
            <div>List of Ships</div>
            {cart.forEach((wholeShipAndShebang) => {
                <div>{wholeShipAndShebang.name}</div>
            })}
        </div>

    )

}
}

export default Cart;