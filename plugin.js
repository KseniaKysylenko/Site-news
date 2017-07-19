/**
 * Created by Ksenya on 29.06.2017.
 */

var item = [
    {id: 0, name: 'кіт', value: 10},
    {id: 1, name: 'собака', value: 12},
    {id: 2, name: 'жираф', value: 3},
    {id: 3, name: 'слон', value: 6},
    {id: 4, name: 'носоріг', value: 9},
    {id: 5, name: 'білка', value: 4},
    {id: 6, name: 'мураха', value: 7},
    {id: 7, name: 'попугай', value: 8},
    {id: 8, name: 'акула', value: 5},
    {id: 9, name: 'аіст', value: 1},
    {id: 10, name: 'ведмідь', value: 11},
    {id: 11, name: 'гуси', value: 2}
];


var data = [
    {id: 1, sum: 12},
    {id: 5, sum: 52},
    {id: 5, sum: 23},
    {id: 3, sum: 76},
    {id: 1, sum: 5},
    {id: 3, sum: 87},
    {id: 5, sum: 15},
    {id: 1, sum: 68},
    {id: 3, sum: 8},
    {id: 3, sum: 13},
    {id: 1, sum: 76},
    {id: 1, sum: 76},
    {id: 5, sum: 97}
];

var idArray = [];
//[1,3,5]
data.map(function(item){
    if (idArray.indexOf(item.id) === -1){
        idArray.push(item.id)
    }
});

var totalSumArr = idArray.map(function(id){
    var totalSum = 0;

    data.map(function (dataItem) {
        if (dataItem.id === id){
            totalSum += dataItem.sum
        }
    });

    return {
        id: id,
        totalSum: totalSum
    }

});

//нужно получить новый массив вида:
//[
//    {id: 1, totalSum: 521},
//    {id: 3, totalSum: 1241},
//    {id: 5, totalSum: 124},
//]

function nameSortAlphabet(){
    item.sort(function (a, b) {
        if(a.name > b.name){
            return 1;
        }else {
            return -1;
        }
        return 0;
    });

    createHtml()
}
console.log();

function fromLowToHigh(){
    item.sort(function(a, b) {
        return a.value - b.value;
    });
    createHtml()
}

function fromHighToLow(){
    item.sort(function(a, b) {
        return b.value - a.value;
    });
    createHtml()
}
console.log();



function createHtml(){
    var container = $('#elem');

    container.empty();

    item.map(function(item){
        var element = $('<div class="block-tabl"></div>');
        element.text(item.value + item.name);

        container.append(element)
    });
    console.log()
}

$(document).ready(function (){

    $('#sortBy').on('change', function () {

        if(this.value === "nameSortAlphabet"){
            nameSortAlphabet();
        } else if(this.value === "fromLowToHigh"){
            fromLowToHigh();
        } else if(this.value === "fromHighToLow"){
            fromHighToLow();
        }



    });

});
