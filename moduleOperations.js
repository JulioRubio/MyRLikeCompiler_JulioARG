const math = require('mathjs')
const { ChartJSNodeCanvas  } = require('chartjs-node-canvas');

var fs = require('fs')

let variance  = (arr)  =>{
    return math.variance(arr);
}

let mean = (arr) =>{
    return math.mean(arr);
}

let mode = (arr) =>{
    return math.mode(arr);
}

const linearRegression = (x,y) =>{
    var lr = {};
    var n = y.length;
    var sum_x = 0;
    var sum_y = 0;
    var sum_xy = 0;
    var sum_xx = 0;
    var sum_yy = 0;

    for (var i = 0; i < y.length; i++) {

        sum_x += x[i];
        sum_y += y[i];
        sum_xy += (x[i]*y[i]);
        sum_xx += (x[i]*x[i]);
        sum_yy += (y[i]*y[i]);
    } 

    lr['slope'] = (n * sum_xy - sum_x * sum_y) / (n*sum_xx - sum_x * sum_x);
    lr['intercept'] = (sum_y - lr.slope * sum_x)/n;
    lr['r2'] = Math.pow((n*sum_xy - sum_x*sum_y)/Math.sqrt((n*sum_xx-sum_x*sum_x)*(n*sum_yy-sum_y*sum_y)),2);

    return lr;
}

const width = 1000;
const height = 1000;   
const chartCallback = (ChartJS) => {

};
const canvasRenderService = new ChartJSNodeCanvas({ width, height, chartCallback});

var xLabels = ['1','2','3','4','5','6','7','8','9','10','11']

const createImage = async (arrXY) => {
    const configuration = {
        type: 'scatter',
        data: {
            datasets: [{
              label: 'PLOT XY',
              data: arrXY,
              borderColor: 'blue',
              borderWidth: 1,
              pointBackgroundColor: ['#000', '#00bcd6', '#d300d6'],
              pointBorderColor: ['#000', '#00bcd6', '#d300d6'],
              pointRadius: 5,
              pointHoverRadius: 5,
              fill: false,
              tension: 0,
              showLine: true
            }]
          },
          options: {}
    }
        

    const dataUrl = await canvasRenderService.renderToDataURL(configuration);
	saveImage(dataUrl)
    return dataUrl;
};


function saveImage(baseImage) {
    const uploadPath = "./";
    const localPath = `${uploadPath}`;
    const ext = baseImage.substring(baseImage.indexOf("/")+1, baseImage.indexOf(";base64"));
    const fileType = baseImage.substring("data:".length,baseImage.indexOf("/"));
    const regex = new RegExp(`^data:${fileType}\/${ext};base64,`, 'gi');
    const base64Data = baseImage.replace(regex, "");
    const filename = `graph.png`;
    fs.writeFileSync(localPath+filename, base64Data, 'base64');
    return filename;
}


const parseArray = async (arrX, arrY) => {

    let arrPairs = []

    for(let i = 0; i < arrX.length; i++){
        arrPairs[i] = {x: arrX[i], y: arrY[i]};
    }
    createImage(arrPairs);
}

const moduleOperations = (operation, arrX, arrY) => {
    switch(operation){
        case 'mean':
            console.log('Calculando media');
            console.log(mean(arrX));
            break;
        case 'mode':
            console.log('Calculando moda');
            console.log(mode(arrX));
            break;
        case 'variance':
            console.log('Calculando varianza');
            console.log(variance(arrX));
            break;
        case 'linearRegression':
            console.log('Regresion lineal');
            console.log(linearRegression(arrX,arrY)); 
            break;
        case 'plotXY':
            console.log('Creando grafica...');
            parseArray(arrX,arrY);
            console.log('Imagen "grafica" creada');
            break;
    }
}

module.exports = moduleOperations;

