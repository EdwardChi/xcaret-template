import React, { Component } from 'react'

export default class CardHover extends Component {
    render() {
        const { data } = this.props
        return (
            <div className="flex overflow-x-auto">
                {
                    data.map((item, index) =>
                        <div key={index} className="product-card">
                            <div className="card-product lg:w-80 w-96" style={{ backgroundImage: `url(${item.image})` }}>
                                <div className="overlay">
                                    <div className="items head">
                                        <p>{item.title}</p>
                                        <hr />
                                    </div>
                                    <div className="items sizes">
                                    <p>On newt jeez lorikeet that raging ponderously tardy a sullen goodness removed hey 
                                        oh slung caribou articulately unsociable red-handedly swelled unceremonious like 
                                        less against that some hey forgave one across out antelope regardless.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

CardHover.defaultProps = {
    data: []
}