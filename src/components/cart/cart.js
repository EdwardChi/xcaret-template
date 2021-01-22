import React, { Component } from 'react'
import { connect } from 'react-redux'
import { creat_url } from '../../helpers/peticiones'

class Cart extends Component {

    closeCart(){
        let cart = document.getElementById('cart-left')
        cart.classList.remove('active')
        cart.classList.add('desactive')
    }
    render() {
        return (
            <div className="cart-left p-5 lg:w-1/4 w-full z-30 bg-white desactive overflow-y-auto" id="cart-left">
                <div className="flex-column">
                    <div className="text-right">
                        <button className="rounded-full bg-red-600 p-2 text-white" onClick={this.closeCart.bind(this)}>Cerrar <i className="fa fa-window-close"></i></button>
                    </div>
                    <div>
                        <div className="flex-column">
                            {
                                JSON.parse(localStorage.getItem('state')) !== null && JSON.parse(localStorage.getItem('state')).length > 0 ?
                                    JSON.parse(localStorage.getItem('state')).map((item, index) =>
                                        <div key={index} className="card-item p-2 m-2 shadow-2xl">
                                            <div className="flex justify-around">
                                                <img src={creat_url(100,50,'ffff')} alt={item.adult}></img>
                                                <div className="flex-column p-1 text-black">
                                                    <p className=""><b>Adultos:</b> {item.adult}</p>
                                                    <p className=""><b>Niños:</b> {item.child}</p>
                                                    <p className=""><b>Fecha de visita:</b> {item.visit_date}</p>
                                                    <p className="text-lg"><b>Total:</b> ${item.total} USD</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                :
                                    <h3 className="text-white">CARRTO DE COMPRAS VACIO</h3>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Cart)