//Dom加载
$(document).ready(function () {
    safety();
});

//安全设置
function safety() {
    var count = 1;
    var times = 6;
    var pwd = "da277d4e877ab470ba3837972866d181";
    var input = prompt('请输入密码：', '');
    var hash = md5(input);
    while (count < times) {
        if (hash == pwd) {
            append_img();
            append_js();
            break;
        }
        count += 1;
        input = prompt('密码错误! 请重新输入:');
    }
    if (hash != pwd && count >= times) {
        window.location.href = "https://jackwiy.com";
        return false;
    }
    return "这里是可以看到的内容。";
}

//循环添加图片元素
function append_img() {

    console.log("start append_img");

    var img_count = 74;
    var img_show = '<li data-spic="images/thumbnails/tmb_1.jpg" style="opacity: 0;"><img src="images/thumbnails/tmb_1.jpg"></li>';
    var img_click = '<li onclick="img.play(1)" class=""><img src="images/thumbnails/tmb_1.jpg"></li>';
    for (i = 2; i <= img_count; i++) {
        //console.log("img" + i);
        img_show += '<li data-spic="images/thumbnails/tmb_' + i + '.jpg" style="display: none; opacity: 0;"><img src="images/thumbnails/tmb_' + i + '.jpg"></li>';
        img_click += '<li onclick="img.play(' + i + ')" class=""><img src="images/thumbnails/tmb_' + i + '.jpg"></li>';
    }

    console.log("append……");

    $("#imagebg").append(img_show);
    $("#small_pic").append(img_click);

    console.log("end append_img");
}

//动态加载JS
function append_js() {
    console.log("start append_js");

    head = document.getElementsByTagName('head').item(0);
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'js/imgSlider.js';
    script.defer = true;
    head.appendChild(script);

    console.log("end append_js");
}