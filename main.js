
function calc(value){
    let v = 0;
    return {
        plus : function(arg){
            console.log(value+arg);
            value += arg;
        },
        mainas : function(arg){
            console.log(value-arg);
            value -= arg;
        },
        multi : function(arg){
            console.log(value*arg);
            value *= arg;
        },
        dev : function(arg){
            console.log(value/arg);
            value /= arg;
        }
    }
}

let siki = calc(3);
siki.plus(5);
siki.mainas(3);
siki.multi(2);
siki.dev(2);