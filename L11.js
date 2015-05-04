
var truedarr=[];
var truedd=[];
var dtime=100;
window.onload=function()
{
    
    var dlist=document.getElementsByTagName("div");
    var darr=[];
    for(j=0;j<dlist.length;j++)
    {
        darr.push(dlist[j]);
    }

    try
    {
    
    }
    catch(err)
    {
        
    }
    
    

for (i = 0 ; i < 100 ; i++ )
{
    
    truedarr.push(darr[i%darr.length]);
    var d=document.createElement("div");
    d.style.visibility="hidden";
    d.className="dd";
    d.style.width="150px";
    d.style.height=((50+20*(i%7))+'px');
    d.style.backgroundImage='url("img/'+(i%8+1)+'.jpg")';
//    d.addEventListener("mouseover",onMouseOver);
//    d.addEventListener("mouseout",onMouseOut);
//    d.style.backgroundColor=('#'+5*(i%20)+''+6*(i%18)+''+7*(i%13));
    var a="";
    truedd.push(d);
//    darr[i%darr.length].appendChild(d);
    truedarr[i].appendChild(truedd[i]);

}
    
    
    setTimeout("addC()",dtime);
}


function addC()
{
//    if(truedarr.length>0&&truedd.length>0)
//    {
    if(truedd.length>0)
    {
//        truedarr[0].appendChild(truedd[0]);
//        truedarr.shift();
        truedd[0].style.visibility="visible";
        truedd.shift();
        setTimeout("addC()",dtime);
    }
}

function onMouseOver(event)
{
    event.target.style.borderColor="#ffffff";
//    event.target.style.opacity=1;
//    event.target.className="ddx";
}

function onMouseOut(event)
{
    event.target.style.borderColor="transparent";
//    event.target.style.opacity=0.5;
//    event.target.className="ddy";
}