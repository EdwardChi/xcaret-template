import React, { Component } from 'react'
import { creat_url } from '../../helpers/peticiones';

export default class Carousel extends Component {
    constructor(props){
        super(props)
        this.state = {
            slideIndex: 1
        }
    }

    componentDidMount(){
        this.showSlides(this.state.slideIndex)
    }

    showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let slideIndex = this.state.slideIndex
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slides[slideIndex-1].style.display = "block";  
        this.setState({slideIndex})
    }

    changeImg(n){
        let slideIndex = this.state.slideIndex
        slideIndex += n
        this.setState({slideIndex}, () => {
            this.showSlides(this.state.slideIndex);
        })
    }

    render() {
        return (
            <div className="relative lg:pt-24 flex-initial">
                <div className="mySlides fade">
                    <img src={creat_url(1200,400,'0034')} alt="img"/>
                </div>
                <div className="mySlides fade">
                    <img src={creat_url(1200,400,'0000')} alt="img"/>
                </div>
                <div className="mySlides fade">
                    <img src={creat_url(1200,400,'0067')} alt="img"/>
                </div>
                <button className="prev" onClick={this.changeImg.bind(this, -1)}>&#10094;</button>
                <button className="next" onClick={this.changeImg.bind(this, 1)}>&#10095;</button>
            </div>
        )
    }
}