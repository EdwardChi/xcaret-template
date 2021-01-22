import React, { Component } from 'react'
import { creat_url } from '../../helpers/peticiones'

export default class IndexFooter extends Component {
    render() {
        return (
            <footer>
                <div className="p-10">
                    <div className="flex flex-row flex-wrap justify-center">
                        <div className="p-1 pb-2">
                            <img src={creat_url(200,100,7777)} alt="img"/>
                        </div>
                        <div className="p-1 pb-2">
                            <img src={creat_url(200,100,7777)} alt="img"/>
                        </div>
                        <div className="p-1 pb-2">
                            <img src={creat_url(200,100,7777)} alt="img"/>
                        </div>
                        <div className="p-1 pb-2">
                            <img src={creat_url(200,100,7777)} alt="img"/>
                        </div>
                        <div className="p-1 pb-2">
                            <img src={creat_url(200,100,7777)} alt="img"/>
                        </div>
                        <div className="p-1 pb-2">
                            <img src={creat_url(200,100,7777)} alt="img"/>
                        </div>
                        <div className="p-1 pb-2">
                            <img src={creat_url(200,100,7777)} alt="img"/>
                        </div>
                        <div className="p-1 pb-2">
                            <img src={creat_url(200,100,7777)} alt="img"/>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center">
                        <div className="p-1 pb-2">
                            <img src={creat_url(200,100,7777)} alt="img"/>
                        </div>
                        <div className="p-1 pb-2">
                            <img src={creat_url(200,100,7777)} alt="img"/>
                        </div>
                        <div className="p-1 pb-2">
                            <img src={creat_url(200,100,7777)} alt="img"/>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center">
                        <div className="p-1 pb-2">
                            <img src={creat_url(200,100,7777)} alt="img"/>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center">
                        <div className="p-1 pb-2">
                            <img src={creat_url(200,100,7777)} alt="img"/>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center">
                        <div className="p-1 pb-2">
                            <img src={creat_url(200,100,7777)} alt="img"/>
                        </div>
                        <div className="p-1 pb-2">
                            <img src={creat_url(200,100,7777)} alt="img"/>
                        </div>
                        <div className="p-1 pb-2">
                            <img src={creat_url(200,100,7777)} alt="img"/>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center">
                        <div className="p-1 pb-2">
                            <img src={creat_url(200,100,7777)} alt="img"/>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-around">
                        <div className="text-white p-5">
                            <p className="text-lg font-semibold">Destinos</p>
                            <hr className="text-black"></hr>
                            <ul className="text-white">
                                <li>Cancún</li>
                                <li>Riviera Maya</li>
                                <li>Playa del Carmen</li>
                                <li>Tulum</li>
                                <li>Cobá</li>
                                <li>Quintana Roo</li>
                                <li>Chichén Itzá</li>
                            </ul>
                        </div>
                        <div className="text-white p-5">
                            <p className="text-lg font-semibold">Sitios Xcaret</p>
                            <hr className="text-black"></hr>
                            <ul className="text-white">
                                <li>Acerca de Xcaret</li>
                                <li>Acerca de Xel-Há</li>
                                <li>Acerca de Xplor</li>
                                <li>Acerca de Xplor Fuego</li>
                                <li>Acerca de Xavage</li>
                                <li>Acerca de Xóximilco</li>
                                <li>Acerca de Xenses</li>
                            </ul>
                        </div>
                        <div className="text-white p-5">
                            <p className="text-lg font-semibold">Comprar</p>
                            <hr className="text-black"></hr>
                            <ul className="text-white">
                                <li>Comprar Xcaret</li>
                                <li>Comprar Xel-Há</li>
                                <li>Comprar Xplor</li>
                                <li>Comprar Xplor Fuego</li>
                                <li>Comprar Xavage</li>
                                <li>Comprar Xóximilco</li>
                                <li>Comprar Xenses</li>
                            </ul>
                        </div>
                        <div className="text-white p-5">
                            <p className="text-lg font-semibold">Sobre Xcaret</p>
                            <hr className="text-black"></hr>
                            <ul className="text-white">
                                <li>Mapa de Sitio</li>
                                <li>Blog Xcaret</li>
                                <li>Atracciones en Xcaret</li>
                                <li>Gastronomia en Xcaret</li>
                                <li>Actividades opcionales</li>
                                <li>Promociones</li>
                                <li>¿Ya nos visitaste?</li>
                            </ul>
                        </div>
                        <div className="text-white p-5">
                            <p className="text-lg font-semibold">Otros</p>
                            <hr className="text-black"></hr>
                            <ul className="text-white">
                                <li>Acerca de Grupo Xcaret</li>
                                <li>Contáctanos</li>
                                <li>Afiliados</li>
                                <li>Agencias Online</li>
                                <li>Bodas</li>
                                <li>Grupos</li>
                                <li>Sala de Prensa</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-around">
                        <div className="text-white p-5 flex-initial">
                            <p className="text-lg font-semibold">Redes sociales</p>
                            <hr className="text-black"></hr>
                            <div className="flex flex-row">
                                <i className="fa fa-facebook-f p-2"></i>
                                <i className="fa fa-twitter p-2"></i>
                                <i className="fa fa-instagram p-2"></i>
                                <i className="fa fa-youtube p-2"></i>
                            </div>
                        </div>
                        <div className="text-white p-5 flex-1">
                            <p className="text-lg font-semibold">Customer service / Sales</p>
                            <hr className="text-black"></hr>
                            <div className="flex-column">
                                <p>Monday to Friday from 7:00 AM to 12:00 AM / Saturday and Sunday from 7:00 AM to 10:00 PM. LocalTime.</p>
                                <div>
                                    <p className="text-lg font-semibold"><b>To free number within México</b></p>
                                    <div className="flex flex-row ">
                                        <button className="rounded-full p-4 bg-green-800 m-4">Cancun:998-883-3143</button>
                                        <button className="rounded-full p-4 bg-green-800 m-4">Playa del Carmen:984-206-0038</button>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold"><b>Rest of the world</b></p>
                                    <div className="flex flex-row flex-wrap">
                                        <button className="rounded-full p-4 bg-green-800 m-4">USA-CAN:1-855-326-0682</button>
                                        <button className="rounded-full p-4 bg-green-800 m-4">Brazil:0-800-892-3371</button>
                                        <button className="rounded-full p-4 bg-green-800 m-4">Argentina:0800-122-0384</button>
                                        <button className="rounded-full p-4 bg-green-800 m-4">Colombia:01-800-952-0705</button>
                                        <button className="rounded-full p-4 bg-green-800 m-4">Spain:900-965-224</button>
                                        <button className="rounded-full p-4 bg-green-800 m-4">Chile:0-800-835-016</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-evenly">
                        <div className="p-1 pb-2">
                            <img src={creat_url(200,100,'000FFF')} alt="img"/>
                        </div>
                        <div className="p-1 pb-2">
                            <img src={creat_url(200,100,'000FFF')} alt="img"/>
                        </div>
                        <div className="p-1 pb-2">
                            <img src={creat_url(200,100,'000FFF')} alt="img"/>
                        </div>
                        <div className="p-1 pb-2">
                            <img src={creat_url(200,100,'000FFF')} alt="img"/>
                        </div>
                        <div className="p-1 pb-2">
                            <img src={creat_url(200,100,'000FFF')} alt="img"/>
                        </div>
                        <div className="p-1 pb-2">
                            <img src={creat_url(200,100,'000FFF')} alt="img"/>
                        </div>
                    </div>
                </div>
                <hr className="w-full"></hr>
                <div className="flex-column flex-wrap justify-evenly container text-white px-10 py-5">
                    <p>A hippopotamus poor oh due awful pending grandly babbled some that grotesque apart immoral</p>
                    <p>A hippopotamus poor oh due awful pending grandly babbled some that grotesque</p>
                    <p>A hippopotamus poor oh due</p>
                </div>
                <div className="flex flex-wrap justify-around text-white px-5 lg:hidden block text-center">
                    <div className="flex-col flex-auto m-1">
                        <button className="rounded-full p-2 bg-transparent border-white border"><i className="fa fa-home"></i></button>
                        <p className="text-sm">Inicio</p>
                    </div>
                    <div className="flex-col flex-auto m-1">
                        <button className="rounded-full p-2 bg-transparent border-white border"><i className="fa fa-heart"></i></button>
                        <p className="text-sm">Parques</p>
                    </div>
                    <div className="flex-col flex-auto m-1">
                        <button className="rounded-full p-2 bg-transparent border-white border"><i className="fa fa-map"></i></button>
                        <p className="text-sm">Tours</p>
                    </div>
                    <div className="flex-col flex-auto m-1">
                        <button className="rounded-full p-2 bg-transparent border-white border"><i className="fa fa-star"></i></button>
                        <p className="text-sm">Actividades</p>
                    </div>
                    <div className="flex-col flex-auto m-1">
                        <button className="rounded-full p-2 bg-transparent border-white border"><i className="fa fa-hotel"></i></button>
                        <p className="text-sm">Hospedaje</p>
                    </div>
                    <div className="flex-col flex-auto m-1">
                        <button className="rounded-full p-2 bg-transparent border-white border">
                            <i className="fa fa-hand-holding-usd"></i>
                        </button>
                        <p className="text-sm">Ahorra</p>
                    </div>
                </div>
            </footer>
        )
    }
}