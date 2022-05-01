let var1 = true;
let var2 = true;
let res = !var1 && (var1 || var2);

function displayBoolean(){
    if(res){
        return "!var1 and (var1 or var2) is " 
        + res;
    };
}


