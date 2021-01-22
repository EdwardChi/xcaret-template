import React, { Component } from 'react'
import CardHover from '../../components/card/card_hover'

export default class Recommendations extends Component {
    render() {
        const { data_recom } = this.props
        return (
            <div className="flex-column container mx-auto h-96">
                <p className="text-center text-lg">
                    <b>Los visitantes que compraron su admisión a Parque Xcaret también compraron</b>
                </p>
                <CardHover data={data_recom} />
            </div>
        )
    }
}

Recommendations.defaultProps = {
    data_recom: []
}