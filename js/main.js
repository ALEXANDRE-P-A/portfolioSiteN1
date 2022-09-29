/* ------- 1.画面の幅が280px以下であればスマホナビの幅を250pxにする ------- */
if(window.innerWidth <= 280){
  document.getElementById('nav-sp').style.width = '250px';
};

/* ------- 画面の大きさを変更した際に幅が250px以下であれば１と同じ処理をする ------- */
window.addEventListener('resize',()=>{
  if(window.innerWidth <= 280){
  document.getElementById('nav-sp').style.width = '250px';
  };
})
