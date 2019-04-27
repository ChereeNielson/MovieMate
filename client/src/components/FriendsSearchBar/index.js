import React from "react";
import "./style.css";

function FriendsSearchBar(props) {

return(
    <div className="search-form-wrapper search-form-rev">
        <div className="container">
            <form id="search-form-1">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-sm-10 col-12">
                        <div className="form-group">
                            <input name={props.name} 
                                type="text" 
                                id="search-keyword" 
                                value={props.value} 
                                onChange={props.onChange}   className="form-control"  placeholder="Enter Your Friends Email Here"></input>
                            <button type="submit" onClick={props.onClick}  className="btn btn-main btn-effect"><i className="fa fa-search"></i></button>
                            
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    
    )
}

export default FriendsSearchBar;