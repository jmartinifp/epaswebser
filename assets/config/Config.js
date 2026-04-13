export class Config
{
    constructor()
    {
         this.urlPastillas="http://localhost:9876/pastillas/1";
         this.urlUsuario="http://localhost:9876/usuario/1";

    }
    getUrlPastillas()
    {
        return this.urlPastillas;
    }
    getUrlUsuario()
    {
        return this.urlUsuario;
    }

}