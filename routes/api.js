'use strict';

module.exports = function (app) {

  var stocks = [{"stock":"MSFT","price":62.30,"rel_likes":-1},{"stock":"GOOG","price":786.90,"rel_likes":1}];

  app.route('/api/stock-prices')
    .get(function (req, res){
      const userIP = req.ip;
    // console.log(`User IP: ${userIP}`);
    // res.send(`Your IP address is: ${userIP}`);
    console.log(userIP);
      const stock = req.query.stock;
      const like = req.query.like;

      if(Array.isArray(stock)){
        let targetStocks = [];
        stock.forEach(stockItem => {
          let targetStock = stocks.find(s=>{
            return s.stock === stockItem;
          });
          if(targetStock){
            targetStocks.push(targetStock);
          }
        });
        res.send({stockData:targetStocks});
      }else{
        let  targetStock = stocks.find(s=>{
          return s.stock === stock;
        });
        res.send({stockData:{
          stock:targetStock.stock,
          price:targetStock.price,
          likes:targetStock.rel_likes,
        }});
      }
    });
    
};
