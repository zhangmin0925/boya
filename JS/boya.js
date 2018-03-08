/**
 * Created by zm on 2018/3/7.
 */
//遮罩
var jr=document.getElementById('jr');
var zz=document.getElementById('zz');
var sys=document.getElementById('sys');
var box=document.getElementById('box');
jr.onclick=function(){
    zz.style.display="block";
    sys.style.display="block";
    document.body.style.overflow="hidden";
}
box.onclick=function(){
    zz.style.display="none";
    sys.style.display="none";
    document.body.style.overflow="scroll";
}

//轮播图
var piclist=document.getElementById("piclist");
var controller=document.getElementById("controller");
var pics=piclist.getElementsByTagName("li");
var nums=controller.getElementsByTagName("li");
    for(var i=0;i<nums.length;i++){
         //this指向当前nums中的li
        nums[i].index=i;
        nums[i].onclick=function(){
            var j = this.index; //index是自己定义的
            piclist.style.marginLeft=-(j)*1920+'px';
            for(var i=0;i<nums.length;i++){
                nums[i].removeAttribute('class','current');
            }
            this.setAttribute('class','current');
        }
    }
//定时轮播
var i=1;
setInterval(function(){
    piclist.style.marginLeft=-i*1920+'px';
    i++;
    if(i>3){
        i=0;
    }
},2000)