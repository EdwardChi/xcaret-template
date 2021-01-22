import React,{Component} from 'react'
import Tab from '../../components/tabs/tab'

export default class Admision extends Component{
    openCollapsible(e){
        let coll = document.getElementById("open-col");
        if (coll.style.display === "block") {
            coll.style.display = "none";
        } else {
            coll.style.display = "block";
        }
    }

    render(){
        const { data , movil } = this.props
        return(
            <div className="flex-auto">
                <div className="lg:bg-white text-2xl lg:text-black text-white bg-green-700 lg:text-left text-center py-5 collapsible" onClick={this.openCollapsible.bind(this)}>
                    <b>Admisión Parque Xcaret</b>
                </div>
                <div id="open-col" className="content px-2 lg:block hidden">
                    <p className="py-3 text-gray-700"><b>Elit senectus ad augue egestas ullamcorper nunc aliquam eu</b></p>
                    <p className="py-3 text-gray-500">Ac hac odio magna euismod</p>
                    <div className=" py-3 text-gray-700">
                        <p><i className="fa fa-clock"></i> <b>Duración:</b> X horas</p>
                        <p><i className="fa fa-clock"></i> <b>Categorias:</b> X categorias</p>
                        <p><i className="fa fa-heart"></i> <b>Horario:</b> X horario</p>
                    </div>
                    <div>
                        <Tab
                            classType="tab"
                            data={data}
                            movil={movil}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

Admision.defaultProps = {
    data: [],
    movil: false
}