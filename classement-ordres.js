/classification orders function of prices, quantity and currencies
var orders = [
  {"type" : "achat", "currency" : "BTC", "price" : 40500, "quantity": 0.05},
  {"type" : "achat", "currency" : "AVAX", "price" : 80, "quantity": 3},
  {"type" : "vente", "currency" : "AVAX", "price" : 87, "quantity": 2},
  {"type" : "achat", "currency" : "BTC", "price" : 40200, "quantity": 0.105},
  {"type" : "vente", "currency" : "BTC", "price" : 41500, "quantity": 0.015},
  {"type" : "vente", "currency" : "AVAX", "price" : 88, "quantity": 5},
  {"type" : "achat", "currency" : "BTC", "price" : 40000, "quantity": 0.055},
  {"type" : "vente", "currency" : "BTC", "price" : 41200, "quantity": 0.025},
  {"type" : "achat", "currency" : "AVAX", "price" : 81, "quantity": 1},
  {"type" : "vente", "currency" : "BTC", "price" : 41700, "quantity": 0.305},
  {"type" : "achat", "currency" : "AVAX", "price" : 82, "quantity": 0.5},
  {"type" : "achat", "currency" : "BTC", "price" : 39500, "quantity": 0.065},
  {"type" : "vente", "currency" : "BTC", "price" : 42000, "quantity": 0.1505},
  {"type" : "achat", "currency" : "AVAX", "price" : 82, "quantity": 2.5},
  {"type" : "vente", "currency" : "BTC", "price" : 42100, "quantity": 0.05},
  {"type" : "achat", "currency" : "BTC", "price" : 39400, "quantity": 0.05},
  {"type" : "vente", "currency" : "BTC", "price" : 43000, "quantity": 0.051},
  {"type" : "vente", "currency" : "AVAX", "price" : 89, "quantity": 6.3}
]
var market = [
  {"currency": "BTC", "marketPrice":40800},
  {"currency": "AVAX", "marketPrice":85}
]
function arrayOrders (orders, markets, currency){
   let currencyOrders = orders.filter(order=>order["currency"]==currency);
   let currencyMarket = markets.filter(market=>market["currency"]==currency);
   let currencySellOrders = currencyOrders.filter(order=>order["type"]=="vente").sort((b,a)=>a["price"]-b["price"]);
   let currencyBuyOrders = currencyOrders.filter(order=>order["type"]=="achat").sort((b,a)=>a["price"]-b["price"]);
   let currencyAllOrders =[currencySellOrders,currencyMarket,currencyBuyOrders];

return currencyAllOrders;

 }
