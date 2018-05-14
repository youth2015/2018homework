const folderContent=document.querySelector(".folder-content");
folders.onmousedown=function(ev){
	
	console.log(folders);
	//为了防止点到文件身上，只要目标点不是在folders就不能创建框，
	//那么我点击document身上，就能找到这两个元素;
	if(ev.target.className!=='folders') return;

	//创建坐标点x,y
	let disX=ev.pageX;
	
	let disY=ev.pageY;
	
	let div=document.createElement("div");
	//获取folders下面的child
	let checkedsArr=[];
	
	let foldersChild=folders.children;
	
	for(let i=0;i<foldersChild.length;i++){
				
		//然后在找到子元素下面的自定义属性为data.id
		let id=foldersChild[i].dataset.id;
		if(data[id]!=undefined){
			checkedsArr.push(data[id]);		
		}
	
		console.log(id);
		
		//let llf=checkedsArr.push(data[id]);	
	}
	div.className="kuang";
	
	div.style.cssText=`left:${disX}px;top:${disY-folders.getBoundingClientRect().top+breadmenu.offsetHeight}px`;
	
	folderContent.appendChild(div);
	//当鼠标移动的时候，给这个div加上宽和高。
	document.onmousemove=function(ev){	
		div.style.width=Math.abs(ev.pageX-disX)+'px';
		div.style.height=Math.abs(ev.pageY-disY)+'px'
		
		let l=Math.min(disX,ev.pageX);
		let tt=Math.min(disY,ev.pageY);
		
		for(let i=0;i<foldersChild.length;i++){
			if(foldersChild[i].classList.contains('lang')) continue;
			
			let id=foldersChild[i].dataset.id;
			
			let onOff=t.bong(div,foldersChild[i]);
			
			data[id].checked=onOff;
			
			
			foldersChild[i].className=onOff?'file-item hov':'file-item';
			
			foldersChild[i].getElementsByTagName('i')[0].className=onOff?'checked':'';
			//checkedAll.className=checkedsArr.every(e=>e.checked)?'checked':'';
			
			if(checkedsArr.length){
				checkedAll.className=checkedsArr.every(e=>e.checked)?'checked':'';
			}else{
				checkedAll.className='';
			}
			
			console.log(1111)	
		}
		
		
		div.style.left=l+'px';
		div.style.top=tt-section.offsetTop+'px';
		return false;
	}
	
		document.onmouseup=function(){
			div.remove();
			
			document.onmousemove=document.onmouseup=null;
		}
	}	
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
