import React  from "react";
import './Loading.css'

const Loading = ()=>{
    return (
        <div className="container_loading">
            <div class="loading-container">
                <div class="loading"></div>
            </div>
            <p>Carregando...</p>
        </div>
    )
}

export default Loading