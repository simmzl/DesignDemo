/**
 * Created by zelong on 2017/5/29.
 */
let worksStatus = document.getElementById( "works_more");
let worksBtn = document.getElementById("get_more_works");

let list = document.getElementById('list');

worksBtn.addEventListener('click',function () {
    if(worksStatus.style.display !== 'block'){
        worksStatus.style.display = 'block';
        worksBtn.setAttribute("src", "images/back.png");
    }else {
        worksStatus.style.display = "none";
        worksBtn.setAttribute("src", "images/more.png");
    }
});

list.addEventListener('click',function (e) {
    // alert(e.target.nodeName);
    let el = e.target;
    let text = el.parentNode.nextSibling.id;
    if(el.nodeName.toLowerCase() === 'input'){
        alert(text);
    }
});
// function toMore(){
//     document.getElementById( "more0").style.display="block";
//     document.getElementById("toPlus1").setAttribute("src", "images/reduce.png");
//     document.getElementById("toPlus1").setAttribute("onclick", "toReduce()");
// }
// function toReduce(){
//     document.getElementById( "more0").style.display="none";
//     document.getElementById("toPlus1").setAttribute("onclick", "toMore()");
//     document.getElementById("toPlus1").setAttribute("src", "images/plus.png");
// }
//
// function toMore1(){
//     document.getElementById( "more1").style.display="inline";
//     document.getElementById("toPlus2").setAttribute("src", "images/reduce.png");
//     document.getElementById("toPlus2").setAttribute("onclick", "toReduce1()");
// }
// function toReduce1(){
//     document.getElementById( "more1").style.display="none";
//     document.getElementById("toPlus2").setAttribute("onclick", "toMore1()");
//     document.getElementById("toPlus2").setAttribute("src", "images/plus.png");
// }
//
// function toMore2(){
//     document.getElementById( "more2").style.display="inline";
//     document.getElementById("toPlus3").setAttribute("src", "images/reduce.png");
//     document.getElementById("toPlus3").setAttribute("onclick", "toReduce2()");
// }
// function toReduce2(){
//     document.getElementById( "more2").style.display="none";
//     document.getElementById("toPlus3").setAttribute("onclick", "toMore2()");
//     document.getElementById("toPlus3").setAttribute("src", "images/plus.png");
// }
//
// function toMore3(){
//     document.getElementById( "more3").style.display="inline";
//     document.getElementById("toPlus4").setAttribute("src", "images/reduce.png");
//     document.getElementById("toPlus4").setAttribute("onclick", "toReduce3()");
// }
// function toReduce3(){
//     document.getElementById( "more3").style.display="none";
//     document.getElementById("toPlus4").setAttribute("onclick", "toMore3()");
//     document.getElementById("toPlus4").setAttribute("src", "images/plus.png");
// }
//
// function toMore4(){
//     document.getElementById( "more4").style.display="block";
//     document.getElementById("toPlus5").setAttribute("src", "images/reduce.png");
//     document.getElementById("toPlus5").setAttribute("onclick", "toReduce4()");
// }
// function toReduce4(){
//     document.getElementById( "more4").style.display="none";
//     document.getElementById("toPlus5").setAttribute("onclick", "toMore4()");
//     document.getElementById("toPlus5").setAttribute("src", "images/plus.png");
// }