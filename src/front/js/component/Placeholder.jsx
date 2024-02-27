import React from "react";

export const Placeholder = () =>{

    return(
    <div className="justify-content-center d-flex">
        <div className="card col-8 m-3 mb-5" style={{border: "solid", borderColor: "#FFC66B", borderRadius: "15px", backgroundColor: "#FFFEF8"}}>
            <div className="row g-0">
                <div className="d-none d-lg-block col-sx-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 m-5">
                    <img src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg" className="img-fluid rounded-circle" style={{ objectFit: "cover", aspectRatio: "1/1" }} />
                </div>
                <div className="col-sx-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 mt-4">
                    <div className="card-body">
                        <h2 className="card-title placeholder-wave placeholder col-7 m-1"></h2>
                        <h5 className="card-title placeholder-wave placeholder col-7 m-1"></h5>
                        <small className="card-subtitle placeholder-wave placeholder col-5 m-1"></small>
                        <span><hr className="dropdown-divider mt-2"></hr></span>
                        <p className="card-text placeholder-wave mt-3">
                            <span className="placeholder col-12"></span>
                            <span className="placeholder col-12"></span>
                            <span className="placeholder col-12"></span>
                            <span className="placeholder col-12"></span>
                        </p>
                        <p className="card-text">
                            <small className="text-body-secondary placeholder-wave"><span className="placeholder col-8"></span></small>
                        </p>
                        <button className="btn btn-primary my-2 disabled placeholder col-3"></button>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    )
}