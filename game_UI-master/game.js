var cls="";
var count_crl=0;
var count_crs=0;
disp_count_cross(count_crs);
disp_count_circle(count_crl);
function disp_count_cross(countr){
  document.getElementById("crs_count01").value=countr;
}
function disp_count_circle(countr){
document.getElementById("crl_count01").value=countr;  
}


console.log("test");

function selectCircle(){
    cls="tdcircle";
    document.getElementById("crsbtn01").disabled=true;
    document.getElementById("crsbtn01").style.opacity=0.3;
    if(!(reseticon_id==null)){
       document.getElementById(reseticon_id).style.display='none'
       }
}
function selectCross(){
    cls="tdcross";
    document.getElementById("crlbtn01").disabled=true;
    document.getElementById("crlbtn01").style.opacity=0.3;
   if(!(reseticon_id==null)){
       document.getElementById(reseticon_id).style.display='none'
       }
}


function clickCell(elem){
    console.log("cell clicked") 
    if(!(cls=="")){
       if(!(reseticon_id==null)){
       document.getElementById(reseticon_id).style.display='none'
       }
        reseticon_id=elem.firstChild.id;
       var elmnt=document.getElementById(elem.id);
    var elm_class=elem.className;
    if((!elm_class.includes("tdcross") && !elm_class.includes("tdcircle"))){
       elmnt.classList.add(cls);
        document.getElementById(elem.firstChild.id).style.display='block'
    
    if(cls=="tdcircle"){
       document.getElementById("crlbtn01").disabled=true;
        document.getElementById("crsbtn01").disabled=false;
        document.getElementById("crsbtn01").style.opacity=1;
        document.getElementById("crlbtn01").style.opacity=0.3;
        cls="tdcross";
       }
       else if(cls=="tdcross"){
       document.getElementById("crsbtn01").disabled=true;
           document.getElementById("crlbtn01").disabled=false;
           document.getElementById("crlbtn01").style.opacity=1;
           document.getElementById("crsbtn01").style.opacity=0.3;
           cls="tdcircle";
       }
        else if(cls==""){
       return;
       }
//    cls="";
    
    
    if(document.getElementsByClassName("tdcross").length>2 ||document.getElementsByClassName("tdcircle").length>2){
       findmatch();
       }
    
    
       }
       }
   
    
}


function findmatch(){
   
    console.log("validating");
    var cl11=document.getElementById("cel11").className;
    var cl12=document.getElementById("cel12").className;
    var cl13=document.getElementById("cel13").className;
    var cl21=document.getElementById("cel21").className;
    var cl22=document.getElementById("cel22").className;
    var cl23=document.getElementById("cel23").className;
    var cl31=document.getElementById("cel31").className;
    var cl32=document.getElementById("cel32").className;
    var cl33=document.getElementById("cel33").className;

    
    if(cl11===cl12 && cl12===cl13){
       wnr(cl11);
       }
    else if(cl21===cl22 && cl22===cl23){
            wnr(cl21);
            }
    else if(cl31===cl32 && cl32===cl33){
            wnr(cl31);
            }
    else if(cl11===cl21 && cl21===cl31){
            wnr(cl11);
            }
    else if(cl12===cl22 && cl22===cl32){
            wnr(cl12);
            }
    else if(cl13===cl23 && cl23===cl33){
            wnr(cl13);
            }
    else if(cl11===cl22 && cl22===cl33){
            wnr(cl22);
            }
    else if(cl13===cl22 && cl22===cl31){
            wnr(cl13);
            }
                                    
    
}

function wnr(cel_cls){
   var clsname=cel_cls;
   if(cel_cls==="cel-class tdcross"){
      console.log("Winner is cross");
       count_crs+=1;
       disp_count_cross(count_crs);
       document.getElementById("wonpopup01").style.display='block';
       document.getElementById(reseticon_id).style.display='none'
       
      } 
      else if(cel_cls==="cel-class tdcircle"){
       console.log("Winner is circle");
          count_crl+=1;
          disp_count_circle(count_crl);
          document.getElementById("wonpopup01").style.display='block';
          document.getElementById(reseticon_id).style.display='none'
          
   }
    else{
        console.log("none")
    }
    
}

function resetGame(){
    var cellsarr=[];
    
    cellsarr.push(document.getElementById("cel11"))
    cellsarr.push(document.getElementById("cel12"));
    cellsarr.push(document.getElementById("cel13"));
    cellsarr.push(document.getElementById("cel21"));
    cellsarr.push(document.getElementById("cel22"));
    cellsarr.push(document.getElementById("cel23"));
    cellsarr.push(document.getElementById("cel31"));
    cellsarr.push(document.getElementById("cel32"));
    cellsarr.push(document.getElementById("cel33"));
    
    for(var celelm=0; celelm<cellsarr.length; celelm++){
        var arrelm=cellsarr[celelm]
        var elmclass=arrelm.className;
        if(elmclass.includes("tdcross")){
            arrelm.classList.remove("tdcross");
        }
       else if(elmclass.includes("tdcircle")){
            arrelm.classList.remove("tdcircle");
        }
    }
    
    document.getElementById("wonpopup01").style.display='none';
    document.getElementById("crlbtn01").disabled=false;
    document.getElementById("crsbtn01").disabled=false;
}
var reseticon_id;


function resetcell(cell_elm){
  
    var cell_elm_class=cell_elm.className;
    reseticon_id=cell_elm.firstChild.id;
    document.getElementById(reseticon_id).style.display='none'
    if(cell_elm_class.includes("tdcross")){
            cell_elm.classList.remove("tdcross");
        document.getElementById("crsbtn01").disabled=false;
        document.getElementById("crlbtn01").disabled=true;
        document.getElementById("crsbtn01").style.opacity=1;
           document.getElementById("crlbtn01").style.opacity=0.3;
         cls="tdcross";
        
        }
       else if(cell_elm_class.includes("tdcircle")){
            cell_elm.classList.remove("tdcircle");
           document.getElementById("crlbtn01").disabled=false;
           document.getElementById("crsbtn01").disabled=true;
           
           document.getElementById("crlbtn01").style.opacity=1;
           document.getElementById("crsbtn01").style.opacity=0.3;
            cls="tdcircle";
        }
    event.stopPropagation() 
}