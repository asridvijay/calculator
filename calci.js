let uinput=document.getElementById("input")
let expresn=""
function click1(x){
    expresn=expresn+x
    uinput.value=expresn
}
function equal()
{
    expresn=eval(expresn)
    uinput.value=expresn
}
function clear()
{
    expresn=" "
    uinput.value=expresn
}
