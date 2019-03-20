import React,{Component} from 'react';

class ResultList extends Component{
    render(){
        if(this.props.resultPlace.results !== undefined){
            var placeList = this.props.resultPlace.results.map(name=>{
               
                return(
                    <div className="row" key ={name.id}>
                    <div className ="list-group">
                        <div className ="list-group-item clearfix">
                            <div className="profile-teaser-left">
                                <div className ="profile-img"><img src = {name.icon} alt =""/></div>
                            </div>
                            <div className = "profile-teaser-main">
                                <h2 className ="profile-name">{name.name}</h2>
                                <div className ="profile-info">
                                    <div className ="info" ><span className ="">Address</span>{name.formatted_address}</div>
                                    <div className ="info" ><button className ="btn btn-primary">Save Place</button></div>
                                    
                                </div>

                            </div>

                        </div>

                    </div>

                    </div>
                )
            })
        }
        console.log("Result list iitialize",this.props.resultPlace);
        return(
            <ul> 
              {placeList}
            </ul>
        )
    }
}
export default ResultList;