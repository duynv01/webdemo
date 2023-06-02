function clickdn(){
    window.location.href="http://127.0.0.1:5501/dangnhap.html";
}
// document.getElementById('item_header-dn').onclick = function(){clickdn()};

var dnhap = document.getElementById('item_header-dn');
dnhap.addEventListener('click',clickdn);

var dky = document.getElementById('item_header-dk')
dky.addEventListener('click', function(){
    window.location.href = "http://127.0.0.1:5501/dangky.html";
})



// var arr_anh=[
//     "https://tse1.mm.bing.net/th?id=OIP.YBDlM4PgNxC9JwkZSNLPxgHaEo&pid=Api&P=0&h=180",
//     "https://tse3.mm.bing.net/th?id=OIP.LL1by12Cz897EZCJW6eMlwHaDc&pid=Api&P=0&h=180",
//     "https://tse2.mm.bing.net/th?id=OIP.16CRTa7l5X51mYGk-nKm3AHaEK&pid=Api&P=0&h=180",
//     "https://tse2.mm.bing.net/th?id=OIP.aBKM46w_dIYJDwGkrNQcsQHaEK&pid=Api&P=0&h=180",
//     "https://tse2.mm.bing.net/th?id=OIP.M_wTQPDK-eDrVSntaEPc4wHaEE&pid=Api&P=0&h=180",
//     "https://tse4.mm.bing.net/th?id=OIP.JPaM-6GJglXh7ipk2vterwHaEK&pid=Api&P=0&h=180",
// ]
var arr_link=[
    "https://shopee.vn/m/shopnoibat-xtra",
    "https://shopee.vn/shopee-dong-kiem",
    "https://shopeefood.shopee.vn/bo-suu-tap/Popeyes-2023",
    "https://shopee.vn/m/don-dau-tien-mien-phi",
    "https://shopee.vn/cpd",
    "https://shopee.vn/ThoiTrangSieuSale"
]
var dem =0;
var next = document.getElementById('icon-right')
next.addEventListener('click', function(){
    dem++;
    if(dem>= arr_anh.length)dem=0;
    document.getElementById('anh').src = arr_anh[dem];
    
})
var pre = document.getElementById('icon-left')
pre.addEventListener('click', function(){
    dem--;
    if(dem<0)
    dem= arr_anh.length -1;
    document.getElementById('anh').src = arr_anh[dem];
})
// setInterval(function(){
//     dem++
//     if(dem>= arr_anh.length)dem=0;
//     document.getElementById('anh').src = arr_anh[dem];
// }, 3500);


var clickanh1 = document.getElementById('anh')
clickanh1.addEventListener('click', function(){
   dem++
   if(dem>=arr_link.length)dem=0;
    window.location.href=arr_link[dem];
})
var clickanh2 = document.getElementById('anh')
clickanh1.addEventListener('click', function(){
   dem--
   if(dem<0)dem=arr_link.length-1;
    window.location.href=arr_link[dem];
})

