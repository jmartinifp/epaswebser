import { PastillasModel } from "../models/PastillasModel.js";

export class PastillasViewModel
{
    constructor()
    {
        this.pastillasModel= new PastillasModel();
    }

    async cargarPastillas(url)
    {
        return await this.pastillasModel.getPastillasDelServicioWeb(url);
    }
    render(datos)
    {
        console.log("Entro en render de PastillasViewModel");
        console.log("JSon obtenido: "+ JSON.stringify(datos));
        document.getElementById("informacion").innerHTML= JSON.stringify(datos);
        var i=0;
        var contenido="";
        for (i=0; i<datos.length; i++)
        {
            contenido+= `<!--repetir-->
            <div class="d-flex">
                <div class="flex-shrink-0">
                    <img
                        class="imagen"
                        src="./assets/img/pastilla.png"
                        alt="Image"
                    />
                </div>
                <div class="flex-grow-1 ms-3">
                    <h5>${datos[i].nombre}</h5>
                    <p>
                        La duración es ${datos[i].duracion} y la hora es ${datos[i].hora}.
                    </p>
                    
                </div>
            </div>
            <!--repetir -->`;       
        }
    
            document.getElementById("informacion").innerHTML= contenido;
    }


}