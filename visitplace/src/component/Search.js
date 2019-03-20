import React,{Component} from 'react';
import axios from 'axios';
class Search extends Component{

    getKey(e){
        e.preventDefault();
        const keyTyped = this.refs.inputword.value;
        const update = this.props;
        //console.log(keyTyped);
        axios.post('http://localhost:3001/getLocations', {
          city: keyTyped
          
        })
        .then(function (response) {
          console.log(response)
          update.callUpdate(response.data.data)
        })
        .catch(function (error) {
          console.log(error);
        });

        //AIzaSyBgl6V1hWIEnhjWcxVRYLQSHfz1l1T3lXU

    }
    render(){
        return(
        <form className ="form-horizontal">
            <fieldset>

            <legend>Search Near By Place</legend>
            <div className ="col-md-10">
              
             
                <div className="form-group">
                  <label htmlFor="SearchArea" className="col-sm-2 control-label">Search</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control-plaintext" id="SearchArea" placeholder="Search here" ref = "inputword"/>
                    </div>
                </div>
              </div>

              <div className = "col-md-2">
                  <button className = "btn btn-primary" onClick = {this.getKey.bind(this)}>Search</button>
              </div>
                
            </fieldset>
        </form>
        )
    }
}
export default Search;