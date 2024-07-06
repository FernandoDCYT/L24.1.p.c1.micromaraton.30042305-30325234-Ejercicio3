import Cl_cliente from "./Cl_cliente.js";
import Cl_empresa from "./Cl_empresa.js";

let cli1= new Cl_cliente("Juan", 2, 20, 1);
let cli2= new Cl_cliente("Ana", 1, 19, 2);
let cli3= new Cl_cliente("Lin", 2, 18, 2);
let cli4= new Cl_cliente("Mary", 1, 15, 2);

let empresa = new Cl_empresa();

empresa.procesarCliente(cli1);
empresa.procesarCliente(cli2);
empresa.procesarCliente(cli3);
empresa.procesarCliente(cli4);

let salida = document.getElementById("salida");
salida.innerHTML=`
Cantidad de clientes femeninas mayores de edad: ${empresa.contF18}
<br>
La menor edad atendida fue de ${empresa.menor} años
<br>
El promedio de edad de los clientes es de ${empresa.calcPromEd()} años
`


