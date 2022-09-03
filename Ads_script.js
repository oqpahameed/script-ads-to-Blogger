function rep(url){
  let u1=["https://","http://","www.",".com","m.youtube","youtube","youtu","/"];
  let u2="";
  let idv=url;
  for(let i=0;i<u1.length;i++)
  idv=idv.replace(u1[i],u2);
return idv;
}
function rep2(url){
let u1=url.lastIndexOf('/')+1;
return url.substring(u1,url.length);
}
function drow(url,count){
let vid1='<iframe  src="';
 
let vid2='?&autoplay=1 " frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

let ads=["<script type='text/javascript' src='//pl17668397.profitablegatetocontent.com/e1/46/48/e14648e095f415cdbd8902b6c7d07f16.js'></script>","<div id="container-54554ae1658f3fb5bb169910a7ddd118"></div>"];
  
  
  
  let view1=document.getElementById('view');
  let div1='<h1>';
  let div2='</h1>';
  let div3="";
  let hr='<hr>';
for(let i=1;i<=count;i++){
   if(i%2==0){
    div3+=vid1+url+vid2+hr+ads[0];//+ads1+ads2+ads3+ads4+ads5;
   }else{
    div3+=vid1+url+vid2+hr+ads[1];
   }
  view1.innerHTML=div3;
  
}
}
function play(){
let url="https://www.youtube.com/embed/";
let idv=document.getElementById('url').value;
let coun=document.getElementById('seek').value;
  let idv2=rep2(idv);
  url+=idv2;
  drow(url,coun);
 
}


function seek(){
let con=document.getElementById('num');
con.innerText=document.getElementById('seek').value;
       
}
