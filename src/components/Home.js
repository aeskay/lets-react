import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {SiteConsumer} from '../context';
import {servicesList} from '../data';
import Service from './Service';
import Footer from './Footer';

export default class Home extends Component {
    state={
        services: servicesList
    }
    render() {
        console.log(this.state.services);
        let homeServices = this.state.services.filter(item => item.id <=4);

        return (
            <div>
            <div className="text-center firstSection d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="mainText">Let's React Together</h1>
                    <p className="subText">Sed lorem ipsum sed dolor nullam adipiscing</p>
                    <Link to="/about">
                        <button className="mainButton">learn more</button>
                    </Link>
                </div>
            </div>
            
            <div className="section text-center d-flex justify-content-center">
                <div className="col-lg-8">
                    <h3 className="headText pt-6 text-center">About Us</h3>
                    <p className="bodyText text-center">Ipsum dolor tempus commodo turpis adipiscing adipiscing in tempor placerat sed amet accumsan enim lorem sem turpis ut. Massa amet erat accumsan curae blandit porttitor faucibus in nisl nisi volutpat massa mi non nascetur.
                    Ipsum dolor tempus commodo turpis adipiscing adipiscing in tempor placerat sed amet accumsan enim lorem sem turpis ut. Massa amet erat accumsan curae blandit porttitor faucibus in nisl nisi volutpat massa mi non nascetur.
                    </p>
                    <div className="text-center my-6">
                    <Link to="/about">
                        <button className="moreButton">learn more</button>
                    </Link>
                </div>
                </div>
                
            </div>
            
            <div className="section bg-white">
                <h3 className="headText text-center" style={{padding: "10px 0px"}}>Our Services</h3>
                <br/> 
                <div className="row">                
                    <SiteConsumer>
                        {value=>{

                            return homeServices.map(service => {
                                return <Service key={service.id} service={service}/> 
                            });
                        }}
                    </SiteConsumer>
                </div>  <br/> 
                <div className="text-center my-6">
                    <Link to="/services">
                        <button className="viewMoreButton">view all</button>
                    </Link>
                </div>
            </div>
            <Footer/>
        </div>
        )
    }
}

