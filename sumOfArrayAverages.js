const sumAverage = (arr) => {
    const total = arr.reduce((acc , curr) => acc + calcAverage(curr) , 0);
    return Math.floor(total);
}

const calcAverage = (subArr) => {
    const sum = subArr.reduce((acc , curr) => acc + curr , 0);
    return sum / subArr.length;
}

