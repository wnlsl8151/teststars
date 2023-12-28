// 홈페이지 상단 검색창 코드

function enterkey() {
    if (window.event.keyCode == 13) {
         document.getElementById("searchForm").submit();
    }
}

// 홈페이지 메인 슬라이드 코드

const images = document.querySelectorAll('.img');

let current = 0;

function showSlide() {
  for(let i=0; i<images.length; i++) {
    images[i].classList.remove('on');
  }
  current++;
  if(current > images.length) {
    current = 1;
  }
  images[current - 1].classList.add('on');
  setTimeout(showSlide, 7000);
}

showSlide();

// 가상견적 코드

function seven() {
  document.getElementById('two').style.display = 'none';
  document.getElementById('thr').style.display = 'none';
  document.getElementById('seven').style.color = 'red';
  document.getElementById('nine').style.color = '#fff';
  document.getElementById('chkn').style.display = 'none';
  document.getElementById('chks').style.display = 'block';
  document.getElementById('m1').style.display = 'none';
  document.getElementById('m2').style.display = 'none';
  document.getElementById('m3').style.display = 'none';
  document.getElementById('m4').style.display = 'none';
  document.getElementById('m5').style.display = 'none';
  document.getElementById('m6').style.display = 'none';
  document.getElementById('m7').style.display = 'none';
  document.getElementById('sec02-1').style.display = 'none';
  document.getElementById('sec02-2').style.display = 'none';
  document.getElementById('sec02-1-1').style.display = 'none';
  document.getElementById('thrd').style.display = 'none';
}

function nine() {
  document.getElementById('one').style.display = 'flex';
  document.getElementById('nine').style.color = 'red';
  document.getElementById('seven').style.color = '#fff';
  document.getElementById('chks').style.display = 'none';
  document.getElementById('chkn').style.display = 'block';
  document.getElementById('two').style.display = 'none';
  document.getElementById('seventwo').style.display = 'none';
  document.getElementById('thr').style.display = 'none';
  document.getElementById('m1').style.display = 'none';
  document.getElementById('m2').style.display = 'none';
  document.getElementById('m3').style.display = 'none';
  document.getElementById('m4').style.display = 'none';
  document.getElementById('m5').style.display = 'none';
  document.getElementById('m6').style.display = 'none';
  document.getElementById('m7').style.display = 'none';
  document.getElementById('sec02-1').style.display = 'none';
  document.getElementById('sec02-2').style.display = 'none';
  document.getElementById('sec02-1-1').style.display = 'none';
  document.getElementById('thrd').style.display = 'none';
}

function chks(){
  document.getElementById('seventwo').style.display = 'flex';
  document.getElementById('two').style.display = 'none';
}

function chkbox01() {
  var con = document.getElementById("two"); 	
    if(con.style.display=='flex'){ 		
    	con.style.display = 'none'; 	
    }else{
    	con.style.display = 'flex';
    } 
}


function doOpenCheck(chk){
  var obj = document.getElementsByName("aaa");
  for(var i=0; i<obj.length; i++){
      if(obj[i] != chk){
          obj[i].checked = false;
      }
  }

  

  var con = document.getElementById("two"); 		
    if(con.style.display=='flex'){ 		
    	con.style.display = 'none'; 	
    }else{
    	con.style.display = 'flex'; 	
    }
  } 

  

  function boOpenCheck(chk){
    var obj = document.getElementsByName("bbb");
    for(var i=0; i<obj.length; i++){
        if(obj[i] != chk){
            obj[i].checked = false;
        }
    }

    document.getElementById('thr').style.display = 'flex';
    }

    function coOpenCheck(chk){
      var obj = document.getElementsByName("ccc");
      for(var i=0; i<obj.length; i++){
          if(obj[i] != chk){
              obj[i].checked = false;
          }
      }
      } 

      function eoOpenCheck(chk){
        var obj = document.getElementsByName("ddd");
        for(var i=0; i<obj.length; i++){
            if(obj[i] != chk){
                obj[i].checked = false;
            }
        }
    
        document.getElementById('incol').style.display = 'block';
        }
    
        function eoOpenCheck(chk){
          var obj = document.getElementsByName("ddd");
          for(var i=0; i<obj.length; i++){
              if(obj[i] != chk){
                  obj[i].checked = false;
              }
          }
          } 

          function aoOpenCheck(chk){
            var obj = document.getElementsByName("eee");
            for(var i=0; i<obj.length; i++){
                if(obj[i] != chk){
                    obj[i].checked = false;
                }
            }
        
            document.getElementById('sec02-2').style.display = 'block';
            }
        
            function aoOpenCheck(chk){
              var obj = document.getElementsByName("eee");
              for(var i=0; i<obj.length; i++){
                  if(obj[i] != chk){
                      obj[i].checked = false;
                  }
              }
              } 

          

      function money1() {
        document.getElementById('m1').style.display = 'block';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m13').style.display = 'none';
        document.getElementById('m14').style.display = 'none';
        document.getElementById('m15').style.display = 'none';
        document.getElementById('m16').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function money2() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'block';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m13').style.display = 'none';
        document.getElementById('m14').style.display = 'none';
        document.getElementById('m15').style.display = 'none';
        document.getElementById('m16').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function money3() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'block';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m13').style.display = 'none';
        document.getElementById('m14').style.display = 'none';
        document.getElementById('m15').style.display = 'none';
        document.getElementById('m16').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function money4() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'block';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m13').style.display = 'none';
        document.getElementById('m14').style.display = 'none';
        document.getElementById('m15').style.display = 'none';
        document.getElementById('m16').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function money5() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'block';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m13').style.display = 'none';
        document.getElementById('m14').style.display = 'none';
        document.getElementById('m15').style.display = 'none';
        document.getElementById('m16').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function money6() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'block';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m13').style.display = 'none';
        document.getElementById('m14').style.display = 'none';
        document.getElementById('m15').style.display = 'none';
        document.getElementById('m16').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function money7() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'block';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m13').style.display = 'none';
        document.getElementById('m14').style.display = 'none';
        document.getElementById('m15').style.display = 'none';
        document.getElementById('m16').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function money7sub() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'block';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m13').style.display = 'none';
        document.getElementById('m14').style.display = 'none';
        document.getElementById('m15').style.display = 'none';
        document.getElementById('m16').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function money8() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'block';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m13').style.display = 'none';
        document.getElementById('m14').style.display = 'none';
        document.getElementById('m15').style.display = 'none';
        document.getElementById('m16').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function money9() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'block';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m13').style.display = 'none';
        document.getElementById('m14').style.display = 'none';
        document.getElementById('m15').style.display = 'none';
        document.getElementById('m16').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function money10() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'block';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m13').style.display = 'none';
        document.getElementById('m14').style.display = 'none';
        document.getElementById('m15').style.display = 'none';
        document.getElementById('m16').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function money11() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'block';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m13').style.display = 'none';
        document.getElementById('m14').style.display = 'none';
        document.getElementById('m15').style.display = 'none';
        document.getElementById('m16').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function money12() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'block';
        document.getElementById('m13').style.display = 'none';
        document.getElementById('m14').style.display = 'none';
        document.getElementById('m15').style.display = 'none';
        document.getElementById('m16').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function dicelOp() {
        document.getElementById('sec02-1-1').style.display = 'flex';
        document.getElementById('sec02-1').style.display = 'none';
      }

      function dicelcol() {
        document.getElementById('thrd').style.display = 'block';
        document.getElementById('thr').style.display = 'none';
        document.getElementById('sec02-1-1').style.display = 'none';
        document.getElementById('sec02-1').style.display = 'none';
        document.getElementById('sec02-2').style.display = 'none';
      }

      function money13() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m13').style.display = 'block';
        document.getElementById('m14').style.display = 'none';
        document.getElementById('m15').style.display = 'none';
        document.getElementById('m16').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function money14() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m13').style.display = 'none';
        document.getElementById('m14').style.display = 'block';
        document.getElementById('m15').style.display = 'none';
        document.getElementById('m16').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function money15() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m13').style.display = 'none';
        document.getElementById('m14').style.display = 'none';
        document.getElementById('m15').style.display = 'block';
        document.getElementById('m16').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function money16() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m13').style.display = 'none';
        document.getElementById('m14').style.display = 'none';
        document.getElementById('m15').style.display = 'none';
        document.getElementById('m16').style.display = 'block';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function money17() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m13').style.display = 'none';
        document.getElementById('m14').style.display = 'none';
        document.getElementById('m15').style.display = 'none';
        document.getElementById('m16').style.display = 'none';
        document.getElementById('m17').style.display = 'block';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('m23').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function inColor() {
        document.getElementById('sec02-1').style.display = 'flex';
      }

      function option() {
        document.getElementById('sec02-2').style.display = 'flex';
      }

      function todo() {
        document.getElementById('sec02-3').style.display = 'flex';
        document.getElementById('sec02-2').style.display = 'none';
      }

      function gasol(){
        document.getElementById('thrd').style.display = "none";
        document.getElementById('thr').style.display = "block";
        document.getElementById('sec02-1-1').style.display = 'none';
        document.getElementById('m1').style.display = 'block';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m13').style.display = 'none';
        document.getElementById('m14').style.display = 'none';
        document.getElementById('m15').style.display = 'none';
        document.getElementById('m16').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('sec02-3').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('m23').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function nbga(){
        document.getElementById('noblega').style.display = 'grid';
        document.getElementById('sec02-2').style.display = 'none';
      }

      function nobleMoney1() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m13').style.display = 'none';
        document.getElementById('m14').style.display = 'none';
        document.getElementById('m15').style.display = 'none';
        document.getElementById('m16').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'block';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('m23').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function nobleMoney2() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m13').style.display = 'none';
        document.getElementById('m14').style.display = 'none';
        document.getElementById('m15').style.display = 'none';
        document.getElementById('m16').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'block';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('m23').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function nobleMoney3() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m13').style.display = 'none';
        document.getElementById('m14').style.display = 'none';
        document.getElementById('m15').style.display = 'none';
        document.getElementById('m16').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'block';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('m23').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function nobleMoney4() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m13').style.display = 'none';
        document.getElementById('m14').style.display = 'none';
        document.getElementById('m15').style.display = 'none';
        document.getElementById('m16').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'block';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('m23').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function nobleMoney5() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m13').style.display = 'none';
        document.getElementById('m14').style.display = 'none';
        document.getElementById('m15').style.display = 'none';
        document.getElementById('m16').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'block';
        document.getElementById('m23').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function nobleMoney6() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m13').style.display = 'none';
        document.getElementById('m14').style.display = 'none';
        document.getElementById('m15').style.display = 'none';
        document.getElementById('m16').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('m23').style.display = 'block';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function nobleMoney7() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m13').style.display = 'none';
        document.getElementById('m14').style.display = 'none';
        document.getElementById('m15').style.display = 'none';
        document.getElementById('m16').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('m23').style.display = 'none';
        document.getElementById('m24').style.display = 'block';
        document.getElementById('m25').style.display = 'none';
        document.getElementById('m26').style.display = 'none';
        document.getElementById('m27').style.display = 'none';
        document.getElementById('m28').style.display = 'none';
        document.getElementById('m29').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function nobleMoney8() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m13').style.display = 'none';
        document.getElementById('m14').style.display = 'none';
        document.getElementById('m15').style.display = 'none';
        document.getElementById('m16').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('m23').style.display = 'none';
        document.getElementById('m24').style.display = 'none';
        document.getElementById('m25').style.display = 'block';
        document.getElementById('m26').style.display = 'none';
        document.getElementById('m27').style.display = 'none';
        document.getElementById('m28').style.display = 'none';
        document.getElementById('m29').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function nobleMoney9() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m13').style.display = 'none';
        document.getElementById('m14').style.display = 'none';
        document.getElementById('m15').style.display = 'none';
        document.getElementById('m16').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('m23').style.display = 'none';
        document.getElementById('m24').style.display = 'none';
        document.getElementById('m25').style.display = 'none';
        document.getElementById('m26').style.display = 'block';
        document.getElementById('m27').style.display = 'none';
        document.getElementById('m28').style.display = 'none';
        document.getElementById('m29').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function nobleMoney10() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m13').style.display = 'none';
        document.getElementById('m14').style.display = 'none';
        document.getElementById('m15').style.display = 'none';
        document.getElementById('m16').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('m23').style.display = 'none';
        document.getElementById('m24').style.display = 'none';
        document.getElementById('m25').style.display = 'none';
        document.getElementById('m26').style.display = 'none';
        document.getElementById('m27').style.display = 'block';
        document.getElementById('m28').style.display = 'none';
        document.getElementById('m29').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function nobleMoney11() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m13').style.display = 'none';
        document.getElementById('m14').style.display = 'none';
        document.getElementById('m15').style.display = 'none';
        document.getElementById('m16').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('m23').style.display = 'none';
        document.getElementById('m24').style.display = 'none';
        document.getElementById('m25').style.display = 'none';
        document.getElementById('m26').style.display = 'none';
        document.getElementById('m27').style.display = 'none';
        document.getElementById('m28').style.display = 'block';
        document.getElementById('m29').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function nobleMoney12() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m13').style.display = 'none';
        document.getElementById('m14').style.display = 'none';
        document.getElementById('m15').style.display = 'none';
        document.getElementById('m16').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('m23').style.display = 'none';
        document.getElementById('m24').style.display = 'none';
        document.getElementById('m25').style.display = 'none';
        document.getElementById('m26').style.display = 'none';
        document.getElementById('m27').style.display = 'none';
        document.getElementById('m28').style.display = 'none';
        document.getElementById('m29').style.display = 'block';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function moneyh1() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('mh1').style.display = 'block';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function moneyh2() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'block';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
      }

      function moneyh3() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'block';
        document.getElementById('mh4').style.display = 'none';
      }

      function moneyh4() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'block';
      }

      function moneyPlusW() {
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m5').style.display = 'none';
        document.getElementById('m6').style.display = 'none';
        document.getElementById('m7').style.display = 'none';
        document.getElementById('m7-1').style.display = 'none';
        document.getElementById('m8').style.display = 'none';
        document.getElementById('m9').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('m11').style.display = 'none';
        document.getElementById('m12').style.display = 'none';
        document.getElementById('m17').style.display = 'none';
        document.getElementById('m18').style.display = 'none';
        document.getElementById('m19').style.display = 'none';
        document.getElementById('m20').style.display = 'none';
        document.getElementById('m21').style.display = 'none';
        document.getElementById('m22').style.display = 'none';
        document.getElementById('mh1').style.display = 'none';
        document.getElementById('mh2').style.display = 'none';
        document.getElementById('mh3').style.display = 'none';
        document.getElementById('mh4').style.display = 'none';
        document.getElementById('w1').style.display = 'block';
      }

      function noWi(){
        document.getElementById('w1').style.display = 'none';
      }
      fun