/**
 * Created by simmzl on 2017/5/29.
 * Refactored by simmzl on 2017/10/22.
 */
let worksStatus = document.getElementById("works_more");
let worksBtn = document.getElementById("get_more_works");

let list = document.getElementById('list');

let worksImgs = document.getElementById('works_imgs');
let worksMore = document.getElementById('works_more');

let play = document.getElementById('play');
let playAll = document.getElementById('play_all');
let header = document.getElementById('header');
let video = document.getElementById('video');
let pause = document.getElementById('pause');

let imgs = document.getElementsByTagName('img');
for (let i = 0; i < imgs.length; i++) {
    imgs.item(i).onmousedown = function (e) {
        e.preventDefault();
    }
}

worksBtn.addEventListener('click', () => {
    if (worksStatus.style.display !== 'block') {
        worksStatus.style.display = 'block';
        worksBtn.setAttribute("src", "images/back.png");
    } else {
        worksStatus.style.display = "none";
        worksBtn.setAttribute("src", "images/more.png");
    }
});

list.addEventListener('click', e => {
    let el = e.target;
    let text = el.parentNode.nextElementSibling;
    let status = text.style.display;
    if (el.nodeName.toLowerCase() === 'input') {
        if (status === 'none' || status === '') {
            text.style.display = 'block';
            el.setAttribute('src', 'images/reduce.png');
        } else {
            text.style.display = 'none';
            el.setAttribute('src', 'images/plus.png');
        }
    }
});

let enter = e => {
    let el = e.target, img;
    let first = el.parentNode.className === 'img_cont', second = el.parentNode.parentNode.className === "img_cont";
    if (first) {
        img = el.parentNode;
    } else if (second) {
        img = el.parentNode.parentNode;
    }
    if (first || second) {
        img.firstElementChild.style.height = '270px';
        img.firstElementChild.style.borderBottomRightRadius = '0';
        img.firstElementChild.style.borderBottomLeftRadius = '0';
    }
};
let out = e => {
    let el = e.target, img;
    let first = el.parentNode.className === 'img_cont', second = el.parentNode.parentNode.className === "img_cont";
    if (first) {
        img = el.parentNode;
    } else if (second) {
        img = el.parentNode.parentNode;
    }
    if (first || second) {
        img.firstElementChild.style.height = '370px';
        img.firstElementChild.style.borderBottomRightRadius = '10px';
        img.firstElementChild.style.borderBottomLeftRadius = '10px';
    }
};
worksImgs.addEventListener('mouseover', enter);
worksMore.addEventListener('mouseover', enter);
worksImgs.addEventListener('mouseout', out);
worksMore.addEventListener('mouseout', out);

play.addEventListener('click', () => {
    playAll.style.display = 'none';
    pause.style.display = 'inherit';
    header.style.backgroundColor = 'rgba(102,102,102,0)';
    video.muted = false;
    video.style.opacity = '1';
});
pause.addEventListener('click', () => {
    playAll.style.display = 'inherit';
    pause.style.display = 'none';
    header.style.backgroundColor = 'rgba(102,102,102,0.5)';
    video.muted = true;
    video.style.opacity = '0.5';
});