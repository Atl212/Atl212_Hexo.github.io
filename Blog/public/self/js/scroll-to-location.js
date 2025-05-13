window.onload = function(){
    /*
        如果滚动页面也是DOM没有解决的一个问题。为了解决这个问题，浏览器实现了一下方法，
    以方便开发人员如何更好的控制页面的滚动。在各种专有方法中，HTML5选择了scrollIntoView()
    作为标准方法。
        scrollIntoView()可以在所有的HTML元素上调用，通过滚动浏览器窗口或某个容器元素，
    调用元素就可以出现在视窗中。如果给该方法传入true作为参数，或者不传入任何参数，那么
    窗口滚动之后会让调动元素顶部和视窗顶部尽可能齐平。如果传入false作为参数，调用元素
    会尽可能全部出现在视口中（可能的话，调用元素的底部会与视口的顶部齐平。）不过顶部
    不一定齐平，例如：
    //让元素可见
    document.forms[0].scrollIntoView();
    当页面发生变化时，一般会用这个方法来吸引用户注意力。实际上，为某个元素设置焦点也
    会导致浏览器滚动显示获得焦点的元素。
        支持该方法的浏览器有 IE、Firefox、Safari和Opera。
    */

    document.querySelector("#scroll-top-btn").onclick = function(){
        document.querySelector("#top-section").scrollIntoView();
    }

    document.querySelector("#scroll-project-btn").onclick = function(){
        document.querySelector("#portfolio").scrollIntoView();
    }
    document.querySelector("#scroll-painting-btn").onclick = function(){
        document.querySelector("#painting").scrollIntoView();
    }
    document.querySelector("#scroll-clip-btn").onclick = function(){
        document.querySelector("#clip").scrollIntoView();
    } 
    document.querySelector("#scroll-contact-btn").onclick = function(){
        document.querySelector("#contact").scrollIntoView(true);
    }
}