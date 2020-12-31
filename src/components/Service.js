import React, { Component } from 'react';
import {SiteProvider, SiteConsumer} from '../context';
import {Link} from 'react-router-dom';

export default class Service extends Component {
    render() {
        const {id, img, title, info} = this.props.service; 
        let newId = id-1;
        let idLike= `${id}like`
        let iddislike= `${id}dislike`

        let sumArr = info.split('');
        let summ = []
        for (var i=0; i<60; i++){
            summ.push(sumArr[i]);
        }
        let summary = summ.join("");
        return (
            <React.Fragment>
                <SiteConsumer>
                    {value=>{
                        const {handleDislike, handleLike} = value;
                        
                        
                        
                        return(
                        <div className="col-9 mx-auto col-md-6 col-lg-3 my-3 " onClick={() =>value.handleDetail(id)}>
                            <div className=" border  text-center pb-3 br2 shadow-4">
                                <img src={img} alt={id} className="img-responsive" style={{width: "100%"}}/>
                                <h5 className="text-center font-weight-bold py-3 text-dark">{title}</h5>
                                <p className="text-center" style={{fontSize: "0.9rem", padding: "0rem 0.5rem"}}>{summary}...</p>
                                {/* <Dislike/> */}
                                <span className="dislikeSpan" onClick={()=>handleDislike(id)}>
                                    <i className="fa fa-thumbs-down dislikeIcon" id={iddislike}></i>
                                    <span style={{color: '#444', fontSize: '20px', marginLeft: '3px'}}>
                                        {value.dislike[newId]}
                                    </span>
                                </span>
                                <Link to="/details" style={{textDecoration: 'none'}}>
                                    <button className="moreButton">Read More</button>
                                </Link>
                                <span className="likeSpan" onClick={() =>handleLike(id)}>
                                    <i className="fa fa-thumbs-up likeIcon" id={idLike}></i>
                                    <span style={{color: '#444', fontSize: '20px', marginLeft: '3px'}}>
                                        {value.like[newId]}
                                    </span>
                                </span>
                                
                            </div>          
                        </div>
                    )}
                }
                </SiteConsumer>
                
            </React.Fragment>              
        )
    }
}

