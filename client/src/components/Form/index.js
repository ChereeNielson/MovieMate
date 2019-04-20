import React from "react";
import "./style.css";

function Form(props) {
    return (
        <div>
            {/* ===== START OF SEARCH FORM WRAPPER ===== */}
            <div className="search-form-wrapper search-form-rev">
                <div className="container">
                    {/* ===== START OF SEARCH FORM ===== */}
                    <form id="search-form-1">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-sm-10 col-12">
                                <div className="form-group">
                                    <input name={props.name} value={props.value}  onChange = {props.onChange} type="text" id="search-keyword" defaultValue className="form-control" placeholder="Enter Movies or Series Title" />
                                    <button onClick={props.onClick} type="submit" className="btn btn-main btn-effect"><i className="fa fa-search" /></button>
                                </div>
                            </div>
                        </div>
                    </form>
                    {/* ===== END OF SEARCH FORM ===== */}
                </div>
            </div>
            {/* ===== END OF SEARCH FORM WRAPPER ===== */}
        </div>
    )
};

export default Form;