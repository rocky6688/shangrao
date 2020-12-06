// 列表tab切换
// var curIndex = 1;
// var tabs_lis = document.getElementsByClassName("tabs_li");
// var tabs_items = document.getElementsByClassName("tabs_content_item");


// for (let i = 0; i < tabs_lis.length; i++) {
//     tabs_lis[i].onclick = function () {
//         for(let j = 0;j<tabs_lis.length;j++){
//             tabs_lis[j].className = "tabs_li";
//         }
//         // tabs_lis[curIndex].className = "tabs_li";
//         tabs_items[curIndex].className = "tabs_content_item active";
//         tabs_items[curIndex].style.display = "none";
//         this.className = "tabs_li active";
//         tabs_items[i].style.display = 'block'
//         curIndex = i
//     }
// }

// 工作动态
$('.main_right_tabs>ul>li').mouseenter(function () {
    var i = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.main_right_content').eq(i).addClass('active').siblings().removeClass('active');
});

// 统计分析
$('.tjfx_tabs>ul>li').mouseenter(function () {
    var i = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.tjfx_content').eq(i).addClass('active').siblings().removeClass('active');
});


// 统计数据
$('.tjsj_tabs>ul>li').mouseenter(function () {
    var i = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.tjsj_content').eq(i).addClass('active').siblings().removeClass('active');
});

// 县市分析
$('.xsfx_tabs>ul>li').mouseenter(function () {
    var i = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.xsfx_content').eq(i).addClass('active').siblings().removeClass('active');
});

// 县市动态
$('.xsdt_tabs>ul>li').mouseenter(function () {
    var i = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.xsdt_content').eq(i).addClass('active').siblings().removeClass('active');
});


// 轮播
createCarsoul();

function createCarsoul() {
    var lunbo = document.getElementById("swiper_items");
    var items = lunbo.getElementsByClassName('swiper_item');
    var lunbo_btn = document.getElementById("lunbo_btn");
    var btns = lunbo_btn.getElementsByClassName('swiper_nav_btn');

    var lunbo_p = document.getElementsByClassName('lunbo_p');
    console.log(lunbo_p);

    var n = 0;
    var timer = null;
    autoplay();
    bind();

    function bind() {
        for (var i = 0; i < btns.length; i++) {
            btns[i].index = i;
            btns[i].onclick = function () {
                // console.log(this.index);
                n = this.index;
                show(items, n);
                autoplay();
            }
        }
    }

    // 展示指定的页面
    function show(items, index) {
        for (let i = 0; i < items.length; i++) {
            items[i].className = 'swiper_item';
            btns[i].className = 'swiper_nav_btn';
            lunbo_p[i].className = 'lunbo_p';
        }
        items[index].className = 'swiper_item active';
        btns[index].className = 'swiper_nav_btn active';
        lunbo_p[index].className = 'lunbo_p active';
    }

    // 自动轮播
    function autoplay() {
        clearInterval(timer);
        timer = setInterval(function () {
            n++;

            if (n === btns.length) {
                n = 0;
            }
            // console.log(n); // 逻辑计算，得到数据 1 2 0
            // 应用效果
            show(items, n);
        }, 3000);

    }
}