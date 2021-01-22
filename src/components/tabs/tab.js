import React, { Component , Fragment } from 'react'

export default class Tab extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount(){
        this.openFisrt()
    }
    
    openCity(cityName, classType, evt) {
        let i, tabcontent, tablinks, city = cityName + classType;
        tabcontent = document.getElementsByClassName(`${classType}tabcontent`);
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName(`${classType}tablinks`);
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(city).style.display = "block";
        evt.currentTarget.className += " active";
    }

    openFisrt(){
        let i, ids = document.getElementsByClassName('openFirst')
        if(ids.length > 0){
            for (i = 0; i < ids.length; i++) {
                ids[i].style.display = "block";
            }
        }
    }

    render() {
        const { classType , data , movil } = this.props
        const all = classType + movil
        return (
            <Fragment>
                <div className={`${classType} flex overflow-x-auto`}>
                    {
                        data.map(item => 
                            <button key={item.id + movil} className={`${all}tablinks sm:flex-shrink-0 flex-auto`} onClick={this.openCity.bind(this, item.id + movil, all)}>
                                {item.title}
                            </button>
                        )
                    }
                </div>
                {
                    data.map((item, index) =>
                        <div key={item.id +  movil + all} id={item.id  +  movil + all} className={`${all}tabcontent hidden py-6 px-8 ${index === 0 && 'openFirst'}`}>
                            {item.data}
                        </div>
                    )
                }
                {
                    classType === "tab" &&
                        <div className="flex justify-between">
                            <div className="m-2">
                                <button className="rounded-full text-gray-500 border border-gray-500 bg-transparent p-2 uppercase h-full">
                                    <i className="fa fa-angle-double-left"></i> Xcaret Total
                                </button>
                            </div>
                            <div className="m-2">
                                <button className="rounded-full text-gray-500 border border-gray-500 bg-transparent p-2 uppercase h-full">
                                    Xcaret Plus <i className="fa fa-angle-double-right"></i>
                                </button>
                            </div>
                        </div>
                }
            </Fragment>
        )
    }
}

Tab.defaultProps = {
    data: [],
    classType: "tab",
    movil: false
}