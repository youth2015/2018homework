//开始创建div
const create=document.getElementById('create');

create.onclick=function(){

	//点击creat，找到父级下面的子节点的span里的dataset.id
	let pid=breadNav.getElementsByTagName('span')[0].dataset.id;	
	let arr=t.getChild(pid);
	checkedAll.className='';	
	creatItem(arr,pid);
}

function creatItem(arr,pid){	
	
	let num=0;
	if(arr){
		let filterArr=arr.filter(e=>e.title.includes('新建文件夹'));
		
		if(filterArr.length) num=filterArr.length+1;
		
	}else{
		fempty.style.display="none";
	}
	
	//创建div元素
	let div=document.createElement('div');	
	//再给元素添加类名
	div.className="file-item lang";

	//创建img
	let img=document.createElement("img");
	img.src='img/folder-b.png';
	//创建span
	let span=document.createElement("span");
	span.className="folder-name"
	
	//创建input
	let input=document.createElement("input");
	input.className="editor";
	
	input.style.display="block";
	
	input.value='新建文件夹'+(num?num:'');
	
	
	input.onblur=function(){
		//1.失焦的时候要看一看兄弟元素的名字有没有重名;
		
		//2.必须要有文字，默认为新建文件夹
		
		//3.给个标识证明它就是新建文件夹
		
		//当点击创建按钮的时候，循环一下当前目录所有的文件夹名字，把重复的拿出来，给未失焦的那条数据
	
		let val=this.value;
		
		if(arr&&arr.some(e=>e.title==val)){
			this.focus();
			this.select();
			openFullTip('名字重复')
		}else{
			//创建一个唯一的ID
			
			let creatId=+new Date;
			
			data[creatId]={
				"id": creatId,
        		"pid": pid,
        		"title":val,
        		"type": "file",
        		"checked":false
			}
			render(pid);
			treeMenu.innerHTML=renderTree(-1,-1);
		}
	}
	
	//创建i
	let i=document.createElement("i");
	//i.className="checked";
	
	//添加
	div.appendChild(img);
	div.appendChild(input);
	div.appendChild(i);
	folders.appendChild(div);
	input.select();
}
