import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { creat_url } from '../../helpers/peticiones'

class Header extends Component {
    openCart(){
        let cart = document.getElementById('cart-left')
        cart.classList.remove('desactive')
        cart.classList.add('active')
    }
    render() {
        return (
            <div className="header-x fixed z-20">
                <div className="lg:hidden block">
                    <div className="flex content-center">
                        <div className="flex-initial">
                            <img className="md:pl-12" src={creat_url(180,48,'5555')} alt="img"/>
                        </div>
                        <div className="flex-1">
                            <button className="btn-icon"><i className="fas fa-user"></i></button>
                        </div>
                        <div className="flex-1">
                            <button className="btn-icon"><i className="fas fa-phone"></i></button>
                        </div>
                        <div className="flex-1">
                            <button className="btn-icon" onClick={this.openCart.bind(this)}>
                                <i className="fas fa-shopping-cart relative">
                                    <span className="absolute bottom-7 bg-red-600 p-px">{this.props.count}</span>
                                </i>
                            </button>
                        </div>
                        <div className="flex-1">
                            <button className="btn-icon"><i className="fas fa-globe"></i></button>
                        </div>
                    </div>
                </div>
                <div className="lg:block hidden">
                    <div className="flex justify-evenly px-10">
                        <div className="flex-initial">
                            <img className="sm:pr-56" src={creat_url(260,96,'5555')} alt="img"/>
                        </div>
                        <div className="flex-1 flex-col lg:text-sm pt-2">
                            <div className="flex">
                                <div className="flex-auto">
                                    <div className="input-icon">
                                        <i className="fas fa-search"></i>
                                        <input className="input-search" />
                                    </div>
                                </div>
                                <div className="flex-auto">
                                    <button className="btn-text">
                                        <i className="fas fa-question-circle"></i> Preguntas frecuentes
                                    </button>
                                </div>
                                <div className="flex-auto">
                                    <button className="btn-text">
                                        <i className="fas fa-phone"></i> Atención al cliente <i className="fas fa-angle-down"></i>
                                    </button>
                                </div>
                                <div className="flex-auto">
                                    <button className="btn-text">
                                        <i className="fas fa-user"></i> Tu cuenta
                                    </button>
                                </div>
                                <div className="flex-auto">
                                    <button className="btn-text">
                                        USD <i className="fas fa-angle-down"></i>
                                    </button>
                                </div>
                                <div className="flex-auto">
                                    <button className="btn-text">
                                        <i className="fas fa-font-awesome-flag"></i> ES <i className="fas fa-angle-down"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-auto">
                                    <button className="btn-text">
                                        PARQUES
                                    </button>
                                </div>
                                <div className="flex-auto">
                                    <button className="btn-text">
                                        TOURS
                                    </button>
                                </div>
                                <div className="flex-auto">
                                    <button className="btn-text">
                                        ACTIVIDADES
                                    </button>
                                </div>
                                <div className="flex-auto">
                                    <button className="btn-text">
                                        HOTEL XCARET
                                    </button>
                                </div>
                                <div className="flex-auto">
                                    <button className="btn-text">
                                        PROMOCIONES Y DESCUENTOS
                                    </button>
                                </div>
                                <div className="flex-auto" onClick={this.openCart.bind(this)}>
                                    <button className="btn-text">
                                        CARRRITO  <i className="fas fa-shopping-cart relative">
                                    <span className="absolute bottom-7 bg-red-600 p-px">{this.props.count}</span>
                                </i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        count: state.count
    }
}

export default connect(mapStateToProps)(Header)