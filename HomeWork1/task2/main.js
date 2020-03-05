var temp = {
    Minsk: 16,
    Moscow: 18,
    London: 21,
    Paris: 15,
    Berlin: 34,
};


function middleTemp(temp){
    let sum = 0;
    for (let key in temp) {
        sum += temp[key];
    }

    return sum / 5;
}

console.log('средняя температура ' + middleTemp(temp) + ' градус(ов)а');

function maxTemp(temp){
    let max = temp.Minsk;
    for (let key in temp) {
        if (max < temp[key]){
            max = temp[key];
        }
    }

    return max;
}

console.log('максимальная температура ' +  maxTemp(temp) + ' градус(ов)а');