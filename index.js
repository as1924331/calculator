function clac(){
    var value1 = document.getElementById("first").value
    var value2 = document.getElementById("second").value
    var opr = document.getElementById('select').value
    if(opr == "none"){
        var ans = "please select any oprator"    
        alert(ans)
    }
    if(opr == "+"){
        var ans = parseInt(value1) + parseInt(value2)
        
    }
    if(opr == "-"){
        var ans = parseInt(value1) - parseInt(value2)
        
    }
    if(opr == "*"){
        var ans = parseInt(value1) * parseInt(value2)
        
    }
    if(opr == "/"){
        var ans = parseInt(value1) / parseInt(value2)
        
    }
    document.getElementById('res').value=ans
    
}
