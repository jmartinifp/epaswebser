export class UsuarioModel
 {

    async getUsuarioDelServicioWeb(url)
    {
        console.log("Entro en getUsuarioDelServicioWeb"); 
        const peticion= await fetch(url);
        if (!peticion.ok)
        {
            return null;
        }
        const resultado= await peticion.json();
         console.log("JSon obtenido: "+ JSON.stringify(resultado)); 
        return resultado;
    }

 }