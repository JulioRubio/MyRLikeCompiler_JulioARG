program MyRLike;
vars 
    int: i,j,y, sum, value, valueMinus, temp, leftVal, rightVal, maxCount;
    int: h[5];
    float:avg;

function void addValues(){
    vars 
        int: temp;
    i = 0;
    while(i < 5){
        read(temp);
        h[i] = temp;
        i = i + 1;
    }
}

function void calculateMean(){  
    i = 0;
    while (i < 5){
        temp = h[i];
        sum = sum + temp;
        i = i + 1;
    }
    write("sum ", sum);
    avg = sum / 5.0;
    write("average = ", avg);
}
function void calculateModa(){  
    vars
        int: counter;
    i = 0;
    j = 0;
    maxCount = 0;
    while (i < 5){
        counter = 0;
        while (j < 5){
            leftVal = h[j];
            rightVal = h[i];
            if(leftVal == rightVal){
                counter = counter + 1;
            }
            j = j + 1;
        }
        if(counter > maxCount){
            maxCount = counter;
            value = h[i];
        }
        j = 0;
        i = i + 1;
    }

    write("max val ", value , " with ",  maxCount, " iterations");

}

function void main (){
    addValues();
    calculateModa();
    calculateMean();
}