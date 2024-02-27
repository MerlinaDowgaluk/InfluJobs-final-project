import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { Spinner } from "../component/Spinner.jsx";
import { UploadImage } from "../component/UploadImage.jsx";

export const Inscripcion = () => {
    const { store, actions } = useContext(Context);
    const [ coverLetter, setCoverLetter ] = useState("");
    const [ socialNetworkUrl, setSocialNetworkUrl ] = useState("");
    const [ followers, setFollowers ] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    const handleOnSubmit = (event) =>{
        event.preventDefault();
        const register = {
            cover_letter: coverLetter,
            social_network_url: socialNetworkUrl,
            followers: followers,
            id_offer: store.oneOffer.id
        }
        handleRegisterOffer(register);
        navigate('/offer-candidates')
    }

    const handleRegisterOffer = async (register) =>{
        const url = process.env.BACKEND_URL + "/api/offer-candidates";
        const options = {
            method: "POST",
            body: JSON.stringify(register),
            headers:{
                "Content-Type": "application/json",
                "Authorization" : "Bearer " + localStorage.getItem("token")
            },   
        };
        const response = await fetch(url, options);
        if (!response.ok){
            console.log(response.status, response.statusText);
            return
        }
        const data = await response.json();
        console.log(data);
        actions.getOfferByCandidates(store.profile.id);
    }



        return(
            <div>
                <h1 className="text-center title-style mt-4 mb-5">Regístrate a la oferta</h1>
                <div className="d-flex justify-content-center">
                        <div className="m-5 col-8 background_form p-2 rounded" style={{background: "#FFC66B"}}>
                        <form onSubmit={handleOnSubmit}>
                        <div className="container d-flex justify-content-center">
                            <div className="mb-3 text-start col-6 mx-2">
                                <label htmlFor="exampleInputEmail1" className="form-label">Red Social</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                value={socialNetworkUrl} onChange={(e) => setSocialNetworkUrl(e.target.value)} placeholder="Copia la URL de tu usuario en la red social"></input>
                              </div>
                            <div className="mb-3 text-start col-6 mx-2">
                                <label htmlFor="exampleInputLastName" className="form-label">Cantidad de seguidores</label>
                                <input type="text" className="form-control" id="exampleInputLastName" aria-describedby="emailHelp"
                                value={followers} onChange={(e) => setFollowers(e.target.value)} placeholder="Coloca la cantidad de seguidores"></input>
                              </div>
                            </div>
                            <div className="mb-3 text-start mx-2">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Carta de presentación</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" maxLength="2000"
                                value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} placeholder="Envía a la empresa una breve presentación..."></textarea>
                                <div id="emailHelp" className="form-text">Máximo 2.000 caracteres.</div>
                            </div>
                            <button  type="submit" className="btn btn-primary btn-lg mx-2 my-2">Registrarte</button>
                        </form>
                        </div>
                </div>
                <Link to="/OneOffer" className="text-secondary m-2">
                    <p className="text-end m-1 me-5">O vuelve a la oferta.</p></Link>
            </div>
        )
    }