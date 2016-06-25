function displayAccesskeys(){
 if(!document.getElementsByTagName) return false;
 if(!document.createElement) return false;
 if(!document.createTextNode) return false;
 //取得所有链接
 var links=document.getElementsByTagName("a");
 var akeys=new Array();
 //遍历所有链接
 for (var i = 0; i < links.length; i++) {
     var current_links=links[i];
//如果没有accesskey属性，则继续循环
     if (!links[i].getAttribute("accesskey")) continue;
//把accesskey属性保存起来
     var key=current_links.getAttribute("accesskey");
//取得链接文本
     var text=current_links.lastChild.nodeValue;
//添加到数组
     akeys[key]=text;
 }
 //创建列表
 var list=document.createElement("ul");
 //遍历访问键
 for (key in akeys) {
    var text=akeys[key];
    var str=key+":"+text;
 //创建列表项
    var item=document.createElement("li");
    var item_text=document.createTextNode(str);
    item.appendChild(item_text);
    list.appendChild(item);
  }
//创建标题
 var header=document.createElement("h2");
 var header_text=document.createTextNode("Accesskeys");
 header.appendChild(header_text);
//把标题添加到页面主体
 document.body.appendChild(header);
//把列表添加到页面主体
 document.body.appendChild(list);
}
addLoadEvent(displayAccesskeys);
