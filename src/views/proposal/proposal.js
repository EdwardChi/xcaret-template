import React, { Component } from 'react'
import { saveState } from '../../actions/index_action'
import { connect } from 'react-redux'

class Proposal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total: 0,
            adult: 0,
            child: 0,
            itemAll: []
        }
        this.formProposal = React.createRef()
    }
    saveCart(e) {
        e.preventDefault();
        if (this.state.total !== 0) {
            let obj = {
                adult: e.target.adult.value,
                child: e.target.child.value,
                visit_date: e.target.visit_date.value,
                total: this.state.total
            }, itemAll = this.state.itemAll

            itemAll.push(obj)
            this.setState({ itemAll, total: 0 }, () => {
                this.formProposal.current.reset()
                this.openCart()
                this.props.saveState(this.state.itemAll)
            })
        } else {
            alert('Por favor, inserta un número de adultos o niños.')
        }
    }

    calcAdult(e) {
        let adult, total
        adult = e.target.value * 93.49
        total = this.state.child + adult
        total = Math.round((total + Number.EPSILON) * 100) / 100
        this.setState({ total, adult })
    }

    calcChild(e) {
        let child, total
        child = e.target.value * 46.75
        total = this.state.adult + child
        total = Math.round((total + Number.EPSILON) * 100) / 100
        this.setState({ total, child })
    }

    openCart() {
        let cart = document.getElementById('cart-left')
        cart.classList.remove('desactive')
        cart.classList.add('active')
    }

    render() {
        const { total } = this.state
        const { title } = this.props
        return (
            <form onSubmit={this.saveCart.bind(this)} ref={this.formProposal} className={`${title !== "" && 'bg-gray-300 px-1 py-5 '}bg-gray`}>
                { title !== "" && title}
                <div className="flex">
                    <div className="flex-auto flex-column">
                        <div className="text-center text-gray-800">
                            Adultos:
                                <br></br>
                                $93.49 USD
                            </div>
                        <div className="text-center text-gray-800 m-2">
                            <input type="number" className="input-adm" placeholder="Adultos (12+ años)" name="adult" onChange={this.calcAdult.bind(this)} min="0"></input>
                        </div>
                    </div>
                    <div className="flex-auto flex-column">
                        <div className="text-center text-gray-800">
                            Niños:
                                <br></br>
                                $46.75 USD
                            </div>
                        <div className="text-center text-gray-800 m-2">
                            <input type="number" className="input-adm" placeholder="Niños (5-11 años)" name="child" onChange={this.calcChild.bind(this)} min="0"></input>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-1 text-center m-2">
                        <input type="date" className="input-adm" name="visit_date" required></input>
                    </div>
                </div>
                <div className="flex text-gray-600">
                    <div className="flex-grow m-1">
                        <button className="rounded-full bg-transparent border-2 border-gray-600 p-2 w-full" type="button">
                            Agregar <i className="fa fa-bus"></i> transportación
                            </button>
                    </div>
                    <div className=" m-1">
                        <button className="rounded-full bg-transparent border-2 border-gray-600 p-2" type="button">info</button>
                    </div>
                </div>
                <div className="flex text-gray-600">
                    <div className="flex-grow m-1">
                        <button className="rounded-full bg-transparent border-2 border-gray-600 p-2 w-full" type="button">
                            Agregar <i className="fa fa-utensils"></i> alimentos y bebidas
                        </button>
                    </div>
                    <div className="m-1">
                        <button className="rounded-full bg-transparent border-2 border-gray-600 p-2" type="button">info</button>
                    </div>
                </div>
                <div className="flex text-gray-600">
                    <div className="flex-grow m-1">
                        <button className="rounded-full bg-transparent border-2 border-gray-600 p-2 w-full" type="button">
                            Agregar <i className="fa fa-camera"></i> Fotopass
                        </button>
                    </div>
                    <div className="m-1">
                        <button className="rounded-full bg-transparent border-2 border-gray-600 p-2" type="button">info</button>
                    </div>
                </div>
                <div className="flex-column text-center">
                    <div className="text-black">
                        <b className="text-3xl">TOTAL: ${total} USD</b>
                    </div>
                    <div className="text-sm">
                        *Precios sujetos a cambio sin previo aviso. Aplican restricciones
                        </div>
                </div>
                <div className="flex text-center">
                    <div className="flex-1 m-2">
                        <button className="rounded-full text-white bg-red-400 w-full p-1 uppercase h-full" type="submit" >Agregar al carrito</button>
                    </div>
                    <div className="flex-1 m-2">
                        <button className="rounded-full text-white bg-red-600 w-full p-1 uppercase h-full">Pagar</button>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-auto m-1">
                        <button className="rounded-full bg-transparent border-2 border-gray-600 p-2 w-full font-medium" type="button">
                            Ver descuentos y promociones
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = () => {
    return {
        saveState
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Proposal)

Proposal.defaultProps = {
    total: 0,
    title: ""
}