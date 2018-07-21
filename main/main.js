let datbase = require("./datbase.js");

module.exports = function printInventory(inputs) {
    let allItems = datbase.loadAllItems();
    let map = new Map();
    for(let i=0;i<inputs.length;i++){
        let barcode="";
        let number=0;
        if(inputs[i].indexOf("-")!=-1){
            let item = inputs[i].split("-");
            barcode = item[0];
            number = item[1];
        }else{
            barcode = inputs[i];
            number = 1;
        }
        if(map.get(barcode) != undefined){
            number += map.get(barcode);
            map.set(barcode,number);
        }else{
            map.set(barcode,number);
        }
    }
    let dash=[];
    let discountInfo = [];
    let discountMoney = 0;
    let allItemsTotal = 0;
    let allPromotions = datbase.loadPromotions()[0].barcodes;
    for (let [barcode, number] of map) {
        for(let j=0;j<allItems.length;j++){
            if(barcode == allItems[j].barcode){
                let disnumber=0;
                if(allPromotions.indexOf(barcode)!=-1){
                    disnumber = parseInt(number/3);
                    discountInfo.push({
                        name:allItems[j].name,
                        disnumber:disnumber,
                        unit:allItems[j].unit
                    });
                }
                let itemTotal = allItems[j].price*(number-disnumber);
                discountMoney += allItems[j].price*disnumber;
                dash.push({
                    barcode:barcode,
                    name:allItems[j].name,
                    number:number,
                    price:allItems[j].price,
                    unit:allItems[j].unit,
                    itemTotal:itemTotal
                });
                allItemsTotal += itemTotal;
            }
        }
    }
    let result = '***<没钱赚商店>购物清单***\n';
    for(let i=0;i<dash.length;i++){
        result += `名称：${dash[i].name}，数量：${dash[i].number}${dash[i].unit}，` +
            `单价：${dash[i].price.toFixed(2)}(元)，` +
            `小计：${dash[i].itemTotal.toFixed(2)}(元)\n`;
    }
    result +='----------------------\n挥泪赠送商品：\n';
    for(let i=0;i<discountInfo.length;i++){
        result+=`名称：${discountInfo[i].name}，数量：${discountInfo[i].disnumber}${discountInfo[i].unit}\n`;
    }
    result +=`----------------------\n` +
            `总计：${allItemsTotal.toFixed(2)}(元)\n` +
            `节省：${discountMoney.toFixed(2)}(元)\n` +
            `**********************`;
    console.log(result);
    return "hello world"; 
};
