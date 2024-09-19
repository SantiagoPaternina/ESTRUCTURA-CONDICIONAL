//estructura condicional
let edad = prompt('Digite su edad');
if( edad >= 18 ){
    // instruccion si es positiva la respuesta
    alert('Eres mayor de edad');
}else{
    //instruccion si es negativa
    alert('Eres menor de edad');
}
/** 
 * Calcular el salario de un empleado que deacuerdoa los siguientes topes:
 * si gana 1.300.000 se descontara en salud 4% y 5% en pension 
 * si gana entre 1.300.000 a 2.500.000 se descontara en salud 5% y 6% en pension 
 * si gana mas de 2.500.000 se descontara el 6% en salud y 7% en pension 
 * de lo contrario no se hara descuento
*/
// datos de entrada 
let salario = Number(prompt('Digite el salario del empleado'))
let salud;
let pension;
let netoApagar;
//calculos a realizar 
if( salario = 1_300_000){
    salud = salario * 4/100; //salario * 0.04
    pension = salario * 5/100; //salario * 0.05
    netoApagar = salario - (salud + pension);
}else if(salario > 1_300_000 && salario <= 2_500_000 ){
    salud = salario * 5/100;
    pension = salario * 6/100;
    netoApagar = salario - (salud * pension);
}else if(salario > 2_500_00){
    salud = salario * 6/100;
    pension = salario * 7/100;
    netoApagar = salario - (salud + pension);
}else{
    netoApagar = salario;
}
document.write(
    'El salario del empleado es: '+salario+'<br>'
    +'Dto en salud: '+salud+'<br>'
    +'Dto en pension: '+pension+'<br>'
    +'-------------------------<br>'
    +'Total a pagar: '+netoApagar
)