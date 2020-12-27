import React, { Component } from "react";
import {SiteConsumer} from '../context';
import Service from './Service';
import {servicesList} from '../data';
import Footer from './Footer';

export class Services extends Component {    
    state = {
        services: servicesList
    }
    render() { 
        return (
            <React.Fragment>
                <div style={{padding: '4rem 1.3rem'}}>  
                    <h2 className="headText text-center" style={{padding: "10px 0px"}}>Our Services</h2>   
                    <div className="row">
                        <SiteConsumer>
                            {(value)=>{
                                return value.services.map(service => {
                                    return <Service key={service.id} service={service}/> 
                                });
                            
                            }}
                        </SiteConsumer>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Services

