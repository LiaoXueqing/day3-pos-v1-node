// require("datbase.js");
// const printInventory = require('../main/datbase.js');
module.exports = function printInventory(inputs) {
    // console.log('***<没钱赚商店>购物清单***\n' +
    // '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
    // '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
    // '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
    // '----------------------\n' +
    // '挥泪赠送商品：\n' +
    // '名称：雪碧，数量：1瓶\n' +
    // '名称：方便面，数量：1袋\n' +
    // '----------------------\n' +
    // '总计：51.00(元)\n' +
    // '节省：7.50(元)\n' +
    // '**********************');
    // return "hello world";
    
// function printInventory(inputs) {
    // inputs = [
    //     'ITEM000001'
    // ];
    let allItems = [
        {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000002',
            name: '苹果',
            unit: '斤',
            price: 5.50
        },
        {
            barcode: 'ITEM000003',
            name: '荔枝',
            unit: '斤',
            price: 15.00
        },
        {
            barcode: 'ITEM000004',
            name: '电池',
            unit: '个',
            price: 2.00
        },
        {
            barcode: 'ITEM000005',
            name: '方便面',
            unit: '袋',
            price: 4.50
        }
    ];

    let result = '***<没钱赚商店>购物清单***\n';
    let allItemsTotal = 0.00;
    for(let i=0;i<inputs.length;i++){
        if(inputs[i].indexOf("-")==-1){
            for(let j=0;j<allItems.length;j++){
                if(inputs[i]==allItems[j].barcode){
                    let item = {
                        "barcode": allItems[j].barcode,
                        "name": allItems[j].name,
                        "unit": allItems[j].unit,
                        "price": allItems[j].price,
                        "count":1,
                        "itemTotal":(+allItems[j].price)*(+allItems[j].count)
                    }
                    result+=`名称：${item.name}，数量：1${item.unit}，单价：${item.price}(元)，小计：${item.itemTotal}(元)\n`;
                }
            }
        }
    }
    result+=`----------------------
总计：${allItemsTotal}(元)
节省：0.00(元)
**********************`;
    console.log(result);
    // console.log(allItems);
    // let items = {

    // }
    //根据输入，构造items {
    // name :
    // count:
    // price:
    // unit:
    // totalPrice:
    // }
    //合并同种类商品
    // function mergeSameItem(){

    // }

    //计算每个条目的价钱
    // function getSubTotal(){

    // }

    // //计算不打折价钱
    // function getTotalMoney(){

    // }
    // //计算打折后价钱
    // function getTotalMoneyAfterDiscount(){

    // }
    // // 计算优惠的价钱
    // function getDiscount(){
        
    // }
    return "hello world";
    
};
// printInventory();