import React,{Component, Fragment} from 'react'
import { creat_url } from '../../helpers/peticiones'

export default class CardRSP extends Component{
    render(){
        return(
            <Fragment>
                <div className="flex justify-center">
                    <div className="flex flex-col justify-center px-2">
                        <p className="text-lg font-semibold text-center">Hasta <b>12 meses</b> sin intereses</p>
                        <img src={creat_url(400,80,'0000')} alt="img"></img>
                        <p className="">Con los principales bancos y tarjetas emitidas en México</p>
                        <p>No aplica Paypal <b className="font-black">Más opciones <i className="fa fa-angle-double-right"></i></b></p>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="m-2 shadow p-3">
                        <div className="flex-col text-center">
                            <i className="fa fa-envelope-open text-5xl text-center mx-5"></i>
                            <p>Recibe promociones y noticias de Xcaret para disfrutar 
                                en tus próximas vacaciones.
                            </p>
                            <button className="rounded-full bg-black text-white p-2 w-full text-center" type="button">
                                Suscribirme
                            </button>
                        </div>
                    </div> 
                    <div className="m-2 shadow p-3">
                        <div className="flex text-center p-2">
                            <i className="fa fa-mobile-alt text-5xl text-center p-1"></i>
                            <p  className="text-left">
                                Descarga gratis nuestra app y disfruta de una experiencia única 
                                en tu visita.
                            </p>
                        </div>
                        <div className="flex justify-end flex-wrap">
                            <button className="rounded-md bg-black text-white p-2 text-left m-2 flex" type="button">
                                <i className="fab fa-google-play text-3xl mx-2"></i> 
                                <span>Disponible en <br></br><b>Google Play</b></span>
                            </button>
                            <button className="rounded-md bg-black text-white p-2 text-left m-2 flex" type="button">
                                <i className="fa fa-apple text-3xl mx-2"></i> 
                                <span>Disponible en el <br></br><b>App Store</b></span>
                            </button>
                        </div>
                    </div> 
                </div>
            </Fragment>
        )
    }
}