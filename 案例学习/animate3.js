/*
* @Author: Administrator
* @Date:   2017-03-26 20:07:33
* @Last Modified by:   Administrator
* @Last Modified time: 2017-03-26 20:51:36
*/
// 动画效果的封装
function animate(ele,target){
	clearInterval(ele.timer);

	ele.timer=setInterval(function(){

		var step=(target-ele.offsetTop)/10;

		step=step>0?Math.ceil(step):Math.floor(step);

		ele.style.top=ele.offset+step+"px";

		if(Math.abs(target-ele.offsetTop)<Math.abs(step)){

			ele.style.top=target+"px";

			clearInterval(ele.timer);
		}
	},25)
}

// 开始封装自己的scrollTop

function scroll(){
	if (window.pageYOffset!==null) {
		return{
			left:window.pageXOffset,
			top:window.pageYOffset
		}
	}else if(document.compatMode==="Css1compat"){
		return{
			left:document.documentElement.scrollLeft,
			top:document.documentElement.scrollTop
		}
	}else{
		return{
			left:document.body.scrollLeft,
			top:document.body.scrollTop
		}
	}

}

