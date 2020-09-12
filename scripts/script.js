//Смена стилизации меню при скроле от начала страницы
document.onscroll=function (event) {
    var scrollTop=window.pageYOffset || document.documentElement.scrollTop;
    //console.log(scrollTop);
    var mobiControl=document.getElementById('menu__control');
        if ((scrollTop > 0) && !mobiControl.checked) {
            changeStyle(true);
        } else {
            changeStyle(false);
        }
   // }
};
//Смена стилизации при нажатии кнопки меню
document.getElementById('btn-mobi').addEventListener('click',function () {
    var scrollTop=window.pageYOffset || document.documentElement.scrollTop;
    var mobiControl=document.getElementById('menu__control');
    if ((scrollTop > 0) && mobiControl.checked) {
        changeStyle(true);
    } else {
        changeStyle(false);
    }
});
//Задание стиля отображения меню в зависимости от параметра
function changeStyle(flag){
    var navDesck=document.getElementById('hd-navigate');
    var navMobi=document.getElementById('hm-navigate');
    var mobiControl=document.getElementById('menu__control');
    var navItems=document.getElementsByClassName('header__navigate__item');
    var navIcon=document.getElementsByClassName('header__logo_icon');
    if (flag==true){
        navDesck.style.backgroundColor = "#fff";
        navMobi.style.backgroundColor = "#fff";
        for (var i = 0; i < navIcon.length; i++) {
            navIcon[i].style.fill = '#000';
        }
        for (var i = 0; i < navItems.length; i++) {
            navItems[i].classList.add('nav-item-black');
        }
    }
    else {
        navDesck.style.backgroundColor = "transparent";
        navMobi.style.backgroundColor = "transparent";
        for (var i = 0; i < navIcon.length; i++) {
            navIcon[i].style.fill = '#fff';
        }
        for (var i = 0; i < navItems.length; i++) {
            navItems[i].classList.remove('nav-item-black');
        }
    }
};
//Закрытие окна мобильного меню при выборе пункта
var mobiMenuItem=document.getElementsByClassName('mobile-menu-item-link');
for (var i=0;i<mobiMenuItem.length;i++){
    mobiMenuItem[i].addEventListener('click',function () {
        document.getElementById('menu__control').checked=false;
    })
}


















