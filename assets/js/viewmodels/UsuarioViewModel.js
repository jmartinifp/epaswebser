import { UsuarioModel } from "../models/UsuarioModel.js";

export class UsuarioViewModel
{
    constructor()
    {
        this.usuarioModel= new UsuarioModel();
    }

    async cargarUsuario(url)
    {
        return await this.usuarioModel.getUsuarioDelServicioWeb(url);
    }
    render(datos)
    {
        console.log("Entro en render de UsuarioViewModel");
        console.log("JSon obtenido: "+ JSON.stringify(datos));
        document.getElementById("informacion").innerHTML= JSON.stringify(datos);
        var i=0;
        var contenido="";
            contenido+= `<!--repetir-->
            <div class="d-flex">
                <div class="flex-shrink-0">
                    <img
                        class="imagen"
                        src="./assets/img/usuario.jpg"
                        alt="Image"
                    />
                </div>
                <div class="flex-grow-1 ms-3">
                    <h5>${datos.nombre}</h5>
                    <p>
                        El idenficador del usuario es ${datos.id} 
                    </p>
                    
                </div>
            </div>
            <!--repetir -->`;       
       
    
            document.getElementById("informacion").innerHTML= contenido;
            
    }


}