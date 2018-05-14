const treeMenu=document.querySelector(".tree-menu");

console.log(treeMenu)

//生成下面的ul>li

//* <ul>
//  <li>
//      <div class="tree-title tree-ico close">
//          <span><i></i>微云</span>
//      </div>
//      <ul>
//          <li>
//              <div class="tree-title tree-ico close">
//                  <span><i></i>我的音乐</span>
//              </div>
//          </li>
//      </ul>
//  </li>
//</ul> */


function renderTree(pid,num){
	let child=t.getChild(pid);
	//如果没有子数据直接返回空字符串
	if(!child) return '';
	num++;
	
	let html=`<ul style="padding-left:${num*10}px">`;
	
	child.forEach(e=>{
		html+=`<li>
              <div class="tree-title">
                  <span data-id="${e.id}" class="${t.getChild(e.id)?('open'):('')}"><i></i>${e.title}</span>
              </div>
              ${renderTree(e.id,num)}
          </li>`
	})
	
	html+='</ul>';
	
	return html;
}

treeMenu.innerHTML=renderTree(-1,-1);
