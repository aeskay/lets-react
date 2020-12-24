import React, { Component } from 'react';
import {SiteConsumer} from '../context';
import NavBar from './NavBar';
import Footer from './Footer';

export class Details extends Component {
    render() {
        return (
            <React.Fragment>
                <SiteConsumer>
                    {(value)=>{
                        const {
                            id,
                            img,
                            title,
                            info
                        } = value.detailService;
                        return (
                            <React.Fragment>
                                <div className="row" style={{padding: '4rem'}}>
                                    <div className="col-sm-6 col-xs-12 p-6">
                                        <img src={img} alt={img} className="img-fluid"/>
                                    </div>
                                    <div className="col-sm-6 col-xs-12">
                                        <h2 className="headText pb-4">{title}</h2>
                                        <p className="text-justify">{info}</p>
                                    </div>
                                </div>
                            </React.Fragment>
                            
                        )
                    }}
                </SiteConsumer>
                <Footer/>
            </React.Fragment>
            
        )
    }
}

export default Details
