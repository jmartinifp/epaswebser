export class PastillasModel
 {

    async getPastillasDelServicioWeb(url)
    {
        console.log("Entro en getPastillasDelServicioWeb"); 
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