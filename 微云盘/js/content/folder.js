const folders=document.querySelector(".folders");
const fempty=document.querySelector(".f-empty");

render(0);

console.log(checkedAll)
function render(id){
	
	folders.innerHTML="";
	//找到ID里面所有的子集
	let arr=t.getChild(id);
	//如果arr下面为null,
	if(!arr){
		//就把图片显示出来
		fempty.style.display="block";
		checkedAll.className="";	
		return;
	}else{
		fempty.style.display="none";
		
		//console.log(fempty)
		
		checkedAll.className=arr.every(e=>e.checked)?' checked':'';
		
		arr.forEach(e=>{
			let div=document.createElement("div");
			div.className="file-item"+`${e.checked?' hov':''}`; 
			
			div.dataset.id=e.id; //给每个元素的div添加一个索引值。
		
		//console.log(arr)
		
		let img=document.createElement("img");
		img.src='img/folder-b.png';
		
		//双击进入子文件夹
		img.ondblclick=function(){
			//通过forEach循环拿到checked值为false;
			arr.forEach(e=>e.checked=false);
			
			let childArr=t.getChild(e.id);
			
			if(childArr){
				childArr.forEach(e=>e.checked=false);
			}
			console.log(childArr);
			render(e.id)
			renderNav(e.id);
		}
		
		let span=document.createElement("span");
		span.className="folder-name";
		span.innerHTML=e.title;
		
		let input=document.createElement("input");
		input.className="editor";
		
		let i=document.createElement("i");
		
		
		i.onclick=function(){
			//this.classList.toggle("checked");
			//如果i里面的className包含checked
//			if(this.classList.contains("checked")){
//				//那么就给div添加一个hov
//				div.classList.add('hov');
//			}else{
//				//否则就删除div的hov
//				div.classList.remove('hov');
//			}
			e.checked=!e.checked;
			render(id);
		}
		
		i.className=e.checked?'checked':'';
		
		
		div.appendChild(img);
		div.appendChild(span);
		div.appendChild(input);
		div.appendChild(i);
		
		folders.appendChild(div)
		
		})
	}

	//当没有数据的时候就不能全选，只有数据的时候才能全选;
	checkedAll.onclick=function(){
		console.log(11)
		
		if(fempty.style.display=="none"){
			let onOff=this.classList.toggle('checked');
			arr.forEach(e=>e.checked=onOff);
			
			render(id);
		}
	}
	
}
