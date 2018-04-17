/*
* @Author: Administrator
* @Date:   2017-03-24 00:12:06
* @Last Modified by:   Administrator
* @Last Modified time: 2017-03-24 00:25:47
*/
//动画基本设计
function animate(ele,target){
	clearInterval(ele.timer);
	ele.timer=setInterval(function(){

		var step=(target-offsetTop)/10;
		step=step>0?Math.ceil(step):Math.ceil(step);

		ele.style.left=ele.offsetTop+step+"px";

		if(Math.abs(target-ele.offsetTop)<Math.abs(step)){
			ele.style.left=target+"px";
			clearInterval(timer);
		}

	},25)
}

//处理浏览器兼容

function scroll(){
	if (window.pageYOffset!=null) {

		return{
			left:window.pageXOffset,
			top:window.pageYOffset
		}
	}else if (document.compatMode==="Css1compate") {
		return{
			left:document.documentElement.scrollLeft,
			top:document.documentElement.scrollTop
		}
	}else{
		return{
			left:document.body.scrollLeft,
			top:document.bod.scrollTop
		}
	}


}