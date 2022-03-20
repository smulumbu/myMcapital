const message = 'TP SABIN MULUMBU' // Try edit me




function affichage(marketPrice) {

var precision =0;

if (marketPrice < 0.0000001)
{precision = 10;}
else if (0.0000001 < marketPrice && marketPrice < 0.00001)
  {precision = 9;}
else if (0.00001 < marketPrice && marketPrice < 0.001)
  {precision = 7;}
else if (0.001 < marketPrice && marketPrice < 0.1)
 { precision = 6;}
else if (0.1 < marketPrice && marketPrice < 1)
  {precision = 5;}
else if (1 < marketPrice && marketPrice < 10)
{precision = 3;}
else if (10 < marketPrice)
  {precision = 2;}
return marketPrice.toFixed(precision);
}

function affichageQuantity(marketPrice, quantity) {

  var precision =0;

  if (marketPrice < 1)
  {precision = 2;}
  else if (1 < marketPrice && marketPrice < 1000)
    {precision = 3;}
  else if (1000 < marketPrice && marketPrice < 10000)
  {precision = 4;}
  else if (10000 < marketPrice)
    {precision = 6;}
  return quantity.toFixed(precision);
  }
