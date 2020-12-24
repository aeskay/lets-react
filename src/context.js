import React, { Component } from 'react';
import {servicesList, detailService} from './data';
const SiteContext = React.createContext();

class SiteProvider extends Component {
    state = {
        services: [],
        detailService: detailService
    }

    componentDidMount (){
        this.setList()
    }

    setList = () =>{
        let tempServices = [];
        servicesList.forEach(item =>{
        const singleItem = {...item};
            tempServices = [...tempServices, singleItem]
        })
        this.setState(()=>{
           return {services: tempServices}
        })
    }

    getId=(id) =>{
        const service = this.state.services.find(item => item.id === id);
        return service;
    }

    handleDetail = (id) =>{
        const service = this.getId(id);
        this.setState(() =>{
            return {detailService:service}
        })
    }

    render() {
        return (
            <SiteContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail
                }}>
            {this.props.children}
            </SiteContext.Provider>
        )
    }
}

const SiteConsumer = SiteContext.Consumer;

export {SiteProvider, SiteConsumer}
