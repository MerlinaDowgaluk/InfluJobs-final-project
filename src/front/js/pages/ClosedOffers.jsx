import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { Placeholder } from "../component/Placeholder.jsx";

export const ClosedOffers = () =>{
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getClosedOffers();
    },[]);

    const handleStatusOffer = (id) =>{
        // actions.openOffer(id);
    }
    
    return (
        <div>
            <div className="container-fluid my-4">
            <div className="container">
                <h1 className="text-center title-style mt-4">Historial de ofertas</h1>
                <h5 className="text-center title-style mt-1 mb-5">Cerradas o canceladas</h5>
                <div className="row">
                    {!store.closedOffers ?
                    <Placeholder />
                    :
                    store.closedOffers.map((item,index) => (
                        <div className="d-flex justify-content-center">
                        <div key={index} className="card mb-3 p-0 col-8" style={{border: "solid", borderColor: "#FFC66B", backgroundColor: "#ffdfaf1",  borderRadius: "15px"}}>
                            <div className="row justify-content-center g-0">
                                <div className="">
                                    <div className="card-body mt-3 mx-3">
                                        <h4 className="card-title">Título: {item.title}</h4>
                                        <p className="card-text"> Descripción: {item.post}</p>
                                        <p lassName="card-text">Estado de la oferta: {item.status == "closed" ? "Cerrada" : "Cancelada"}</p>
                                        <p className="card-text">Fecha de publicación: {new Date(item.date_post).toLocaleDateString()}</p>
                                    </div>
                                    <div className="mx-3 my-2">
                                        <button type="button" className="btn btn-primary me-2" onClick={handleStatusOffer(item.id)}>Reactivar oferta</button>
                                    </div>
                                    <div className="col-md-2 d-flex align-items-start justify-content-end btn btn-group">
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    )

}