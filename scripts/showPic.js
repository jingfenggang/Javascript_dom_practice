function showPic(whichpic){
    if (!document.getElementById("placeholder"))return false;
    var source=whichpic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    if(document.getElementById("description")){
        var text=whichpic.getAttribute("title");
        var description=document.getElementById("description");
        description.firstChild.nodeValue=text;
    }
    return true;
}
function prepareGallery（）{
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById("imagegallery") return false;
    var gallery=document.getElementById("imagegallery");
    var links=gallery.getElementsByTagName("a");
    for (var i=0; i <links.length; i++) {
        links[i].onclick=function(){
            return !showPic(this);
        }
    }
}
window.onload=prepareGallery;
/*页面加载完毕执行多个函数
function addLoadEvent(func){
    var oldload=window.onload;
    if (typeof window.onload !='function') {
        window.onload=func;
    } else{
        window.onload=function(){
            onload();
            func();
        }
    }
}
addLoadEvent(prepareGallery);*/
