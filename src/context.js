import React, { Component } from 'react';
import {servicesList, detailService} from './data';
const SiteContext = React.createContext();

class SiteProvider extends Component {
    state = {
        services: [],
        detailService: detailService,
        like: [0,0,0,0,0,0,0,0],
        dislike: [0,0,0,0,0,0,0,0]
    }

    componentDidMount (){
        this.setList();
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

    setDislike = () =>{
        let tempDislike = [];
        this.state.services.forEach(item=>{
            tempDislike.push(item.dislike);
        })
        this.setState(()=>{
            return{dislike: tempDislike}
        })
    }

    setLike = () =>{
        let tempLike = [];
        this.state.services.forEach(item=>{
            tempLike.push(item.like);
        })
        this.setState(()=>{
            return{like: tempLike}
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

    handleDislike = (id) => {
        let tempServices = [...this.state.services];
        let index = tempServices.indexOf(this.getId(id));

        tempServices[index].dislike = tempServices[index].dislike+1;
        //console.log(service);
        this.setState(()=>{
            return { 
                services: tempServices
            }
        }, 
        ()=>{
            this.setDislike();
        })
    }

    handleLike = (id) => {
        let tempServices = [...this.state.services];
        let index = tempServices.indexOf(this.getId(id));

        tempServices[index].like = tempServices[index].like+1;
        //console.log(service);
        this.setState(()=>{
            return { 
                services: tempServices
            }
        }, 
        ()=>{
            this.setLike();
        })
    }

    render() {
        return (
            <SiteContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                handleDislike:this.handleDislike,
                handleLike:this.handleLike
                }}>
            {this.props.children}
            </SiteContext.Provider>
        )
    }
}

const SiteConsumer = SiteContext.Consumer;

export {SiteProvider, SiteConsumer}
