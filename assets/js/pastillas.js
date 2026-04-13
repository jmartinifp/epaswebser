import { Config } from "../config/Config.js";
import { PastillasViewModel } from "./viewmodels/PastillasViewModel.js";


const config= new Config();
//alert(config.getUrlPastillas());
const pastillasViewModel= new PastillasViewModel();
const datos= await pastillasViewModel.cargarPastillas(config.getUrlPastillas());
console.log("en pastillasjs recibo: "+ JSON.stringify(datos));
pastillasViewModel.render(datos);

