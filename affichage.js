const message = 'TP SABIN MULUMBU' // Try edit me




function affichage(nombre) {

var precision =0;

if (nombre < 0.0000001)
{precision = 10;}
else if (0.0000001 < nombre && nombre < 0.00001)
  {precision = 9;}
else if (0.00001 < nombre && nombre < 0.001)
  {precision = 7;}
else if (0.001 < nombre && nombre < 0.1)
 { precision = 6;}
else if (0.1 < nombre && nombre < 1)
  {precision = 5;}
else if (1 < nombre && nombre < 10)
{precision = 3;}
else if (10 < nombre)
  {precision = 2;}
console.log(precision);
return nombre.toFixed(precision);
}

  var resultat = affichage(0.0000010000166);
  console.log(resultat)
