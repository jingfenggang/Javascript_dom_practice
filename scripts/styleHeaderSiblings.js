function styleHeaderSibling(){
    if (!document.getElementsByTagName) return false;
    var header=document.getElementsByTagName("h1");
    var elem;
    for (var i = 0; i < header.length; i++) {
        var elem=getNextElement(header[i].nextSibling);
        addClass(elem,"intro");
    }
}
function getNextElement(node){
    if (node.nodeType==1) {
        return node;
    }
    if (node.nextSibling) {
        return getNextElement(node.nextSibling);
    }
    return null;
}
addLoadEvent(styleHeaderSibling);
