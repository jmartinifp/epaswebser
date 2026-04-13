import { Config } from "../config/Config.js";
import { UsuarioViewModel } from "./viewmodels/UsuarioViewModel.js";


const config= new Config();
alert(config.getUrlPastillas());
const usuarioViewModel= new UsuarioViewModel();
const datos= await usuarioViewModel.cargarUsuario(config.getUrlUsuario());
console.log("en usuariojs recibo: "+ JSON.stringify(datos));
usuarioViewModel.render(datos);

