// JavaScript Document
/*图像振动*/

var rector =3;
var stopit = 0;
var a=1;
var zhend;
function init(which)
{    stopit =0;
    zhend = which;
    zhend.style.left =0;
    zhend.style.top =0;
}
function rattleimage()
{
    if(stopit==1)
    {
        return;
    }    
    if(a==1)
    {
        zhend.style.top = parseInt(zhend.style.top)+rector+"px";
    }
    else if(a==2)
    {
        zhend.style.left = parseInt(zhend.style.left)+rector+"px";
    }
    else if(a==3)
    {
        zhend.style.top = parseInt(zhend.style.top)-rector+"px";
    }
    else 
    {
        zhend.style.left = parseInt(zhend.style.left)-rector+"px";
    }
    if(a<4)a++;    else a =1;
    setTimeout("rattleimage()",50);
}

function stoprattle(which)
{
    stopit = 1;
    which.style.left =0;    
    which.style.top =0;        
}
