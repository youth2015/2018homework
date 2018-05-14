const remove=document.getElementById("remove");
const modelTree=document.querySelector(".modal-tree");
const contentTree=document.querySelector(".content");

const cancel=document.querySelector('.cancel');
const iconClose=document.querySelector(".icon_close");

//选中要移动的id 
let checkedId=-1;

remove.onclick=function(){
	
	let pid=breadNav.getElementsByTagName('span')[0].dataset.id;
	
	let arr=t.getChild(pid);
	
	if(arr.some(e=>e.checked)){
		
		contentTree.innerHTML=renderTree(-1,-1);
		
		let contentTreeChilds=contentTree.querySelectorAll('.tree-title');
		
		for(let i=0;i<contentTreeChilds.length;i++){
			contentTreeChilds[i].onclick=function(){
				for(let i=0;i<contentTreeChilds.length;i++){
					contentTreeChilds[i].style.background='';
				}
				this.style.background='rgba(204,204,204,1)';
				checkedId=this.children[0].dataset.id;
				
			}
		}
		
		const ok=modelTree.querySelector(".ok");
		
		ok.onclick=function(){
			let checkedData=arr.filter(e=>e.checked);
			
			let dataLine=[];
			checkedData.forEach(e=>{
				let arr=t.getChilds(e.id).concat(data[e.id]);
				//勾选的id不能和移动到的id一样
				//也不能放到自己的子级中
				//我们可以拿到选中数据下的所有的数据，下面的arr
				//去判断里面有没有包含checkedId
				//如果包含就说明把老爹放子级
				
				dataLine.push(...arr);
			});
			
			if(!dataLine.some(e=>e.id==checkedId)){
				checkedData.forEach(ee=>{
					ee.pid=checkedId*1;
					ee.checked=false;
					
				})
			}else{
				openFullTip('不可以移动的！');
			}
			
			render(pid);
			treeMenu.innerHTML=renderTree(-1,-1);
			
			modelTree.style.display='none';
		}
		modelTree.style.display='block';
	
	}else{
		openFullTip('请选择要移动的文件！');
	}
	
}

cancel.onclick=iconClose.onclick=function(){
	modelTree.style.display='none';
}
