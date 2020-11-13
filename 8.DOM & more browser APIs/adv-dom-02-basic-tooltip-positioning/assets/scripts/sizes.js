//UNDERSTAING THE POSITIONING AND WIDTH
const div=document.getElementById('main-box');
div.getBoundingClientRect();//x=100,y=100,width=300,height=200,...//GIVES COORDINATES like height,bottom,left,right,top,width,x,y. (x,y) is at top left corner.x is from left of the screen to left of this div...
div.offsetTop;//100//gives the distance of the top most point of div start of cordinate system.it is relative to the document start not to view port.it does not change upon scrolling.post-item
div.offsetLeft;//100
div.clientLeft;//15//since border=15px//distance between left of div to left of content.ie.width of border,scroll bar,...
div.clientTop;//15
div.offsetWidth;//300//width of div including borders and scrollbars
div.offsetHeight;//200//height of div including borders and scrollbars
div.clientWidth;//270   (300-2*15)//inner width without borders and scrollbars
div.clientHeight;//170  (200-2*15)//inner height without borders and scrollbars
div.scrollHeight;//410  entire height of the content(including non visible parts) with is currently not visible in the box div due to scroll
div.scrollTop;//gives how much you scroll content in the div box.ie, 0 if scroll is at beginning.240 if scroll is at end
////for more///HTML ELEMENT MDN------



window.innerWidth;//entire width of the window with out chrome devtools(if open) and url bar at top.it will include the scroll bar of chrome/any browser.to exclude use document.documentElement.clientWidth
window.innerHeight;//entire window height

document.documentElement.clientWidth;//document width excluding browser scrollbar
document.documentElement.clientHeight;//this is reliable as it gives real width and height




