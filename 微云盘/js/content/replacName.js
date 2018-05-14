const rename=document.getElementById("rename");

rename.onclick=function(){
	let pid=breadNav.getElementsByTagName('span')[0].dataset.id;
	 
	let arr=t.getChild(pid);
	
	console.log(arr)
	let arr2=arr.filter(e=>e.checked);
	
	if(arr2.length&&arr2.length<2){
		let divs=folders.children;
		
		for(let i=0;i<divs.length;i++){
			if(divs[i].classList.contains('hov')){
				let span=divs[i].getElementsByTagName('span')[0];
				let txt = divs[i].getElementsByTagName('input')[0];
				
				span.style.display='none';
				txt.style.display='block';
				
				txt.select();
				
				txt.onblur=function(){
					let val=this.value;
					let o=arr.some(e=>{
						if(e.title!=arr2[0].title){
							return e.title==val;
						}
					});
					
					if(arr && o){
						openFullTip('命名冲突');
						this.focus();
						this.select();
						
					}else{
						data[divs[i].dataset.id].title=val;
						render(pid);
						treeMenu.innerHTML=renderTree(-1,-1);
					}
				}
			}
		}
	}else{
		openFullTip('请选择一个文件');
	}
}
