const del=document.getElementById('del');
const tanbox=document.getElementById('tanbox');

del.onclick=function(){
	let pid=breadNav.getElementsByTagName('span')[0].dataset.id;
	let arr=t.getChild(pid);
	
	if(arr.some(e=>e.checked)){
		tanbox.style.display='block';
	}
	
	tanbox.onclick=function(ev){
		console.log(111)
		if(ev.target.innerHTML=='确定'){
			
			arr.forEach(e=>{
				if(e.checked){
					let removeArr=t.getChilds(e.id).concat(data[e.id]);
					removeArr.forEach(e=>delete data[e.id]);
				}
			});
			
			render(pid);
			
			treeMenu.innerHTML=renderTree(-1,-1);
			tanbox.style.display='none';
		}
		
		if(ev.target.innerHTML=='取消'||ev.target.innerHTML=='X'){
			tanbox.style.display='none';
		}
	}
}
