import React, { Component, Fragment } from 'react'
import Tab from '../../components/tabs/tab'
import Proposal from '../proposal/proposal'
import Admision from './admision'

const data_example_2 = [
    {
        title: "ENTRADA XCARET PARQUE",
        id: "proposal",
        data: <Proposal />
    }
]

const data_example_2_resp = [
    {
        title: "COMPRA TU ADMISIÓN",
        id: "proposal_resp",
        data: <Proposal 
                title={
                    <p className="text-center w-full">
                        <b className="text-lg">
                            Hasta 12 meses <br></br> sin intereses <i className="fa fa-question-circle"></i>
                        </b>
                    </p>
                }
            />
    },
    {
        title: "ATRACCIONES",
        id: "atracciones",
        data: <p>
                Oh religious more under as hedgehog with sarcastically some some adjusted gull hello curtsied around 
                more affluently bandicoot precariously shark jeepers felt proofread some picked outside fox 
                notwithstanding octopus and a much regarding much however.
            </p>
    },
    {
        title: "GASTRONOMÍA",
        id: "gastronomia",
        data: <p>
            Oh religious more under as hedgehog with sarcastically some some adjusted gull hello curtsied around 
            more affluently bandicoot precariously shark jeepers felt proofread some picked outside fox 
            notwithstanding octopus and a much regarding much however.
        </p>
    },
    {
        title: "COMO LLEGAR",
        id: "como_llegar",
        data: <p>
            Oh religious more under as hedgehog with sarcastically some some adjusted gull hello curtsied around more 
            affluently bandicoot precariously shark jeepers felt proofread some picked outside fox notwithstanding 
            octopus and a much regarding much however.
        </p>
    }
]

export default class IndexAdmision extends Component {
    render() {
        const { data_adm } = this.props
        return (
            <Fragment>
                <div className="lg:flex flex-none container mx-auto lg:pt-3 pt-0">
                    <div className="lg:block hidden">
                        <Admision data={data_adm}/>
                    </div>
                    <div className="flex-auto flex-column lg:block hidden">
                        <p className="text-center">
                            <b className="text-lg">
                                Hasta 12 meses <br></br> sin intereses <i className="fa fa-question-circle"></i>
                            </b>
                        </p>
                        <div className="relative">
                            <Tab
                                classType="tab_primary"
                                data={data_example_2}
                            />
                        </div>
                    </div>
                    <div className="flex-auto flex-column lg:hidden block">
                        <div className="relative bg-gray">
                            <Tab
                                classType="tab_primary"
                                data={data_example_2_resp}
                                movil={'resp_ta'}
                            />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

