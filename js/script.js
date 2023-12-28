var _this_scroll = 0;       // �ㅽ겕濡� up & down 泥댄겕�꾪븳 蹂���
var _isScrollTop;          // scrollTop 蹂���
var _device = '';           // �묒냽 device 泥댄겕 �꾪븳 蹂���
var _deviceCondition = '';  // �댁긽�� �곕Ⅸ device 泥댄겕 �꾪븳 蹂���
var _browser = '';          // browser 泥댄겕 �꾪븳 蹂���
var changeImgTopPosition;   // 吏��띻��κ꼍�� FO-ESG-005-05 �곗륫 �대�吏� top媛� 怨꾩궛 �꾪븳 蹂���
var changeImgBottomPosition;   // 吏��띻��κ꼍�� FO-ESG-005-05 �곗륫 �대�吏� bottom媛� 怨꾩궛 �꾪븳 蹂���
var _anchorPdNum// �곷떒 �щ갚 媛�
var _thrDepSwiper; // 3depth �ㅼ��댄띁
var _newsDetailSwiper; // 肄붿삤濡� �댁뒪 �곸꽭 由ъ뒪��
var _viewConTitHeight; // view �섏씠吏� title �믪씠媛�
var _isMotionOnce = false; // resize �덉뿉�� 紐⑥뀡 �쒕쾲留� �묐룞�섍린 �꾪븳 蹂���
var _mainPopSwiper; // 硫붿씤�앹뾽
var _mGnbAccordion; // mobile header accordion 蹂���
var _headerHeightArr = [];  // header
var _headerMaxHeight = 0;   // header
var _pathLength // top 踰꾪듉 stroke-dasharray
var _compHisTop  // �ㅻ━�곗� 而⑦뀗痢� �щ갚 蹂��� 
var _hisRtHt // �ㅻ━�곗� �곗륫 �곸뿭 �믪씠媛� 怨꾩궛 �꾪븳 蹂���

var commonScript = (function(){
  return {
    deviceChk : function(){
      // �붾컮�댁뒪 泥댄겕
      if(/Android/i.test(navigator.userAgent)) {
        _device = 'android';
      } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        return navigator.userAgent.match(/(iPhone|iPod)/g) ? device='ios' : device='ipad';
      }else {
        _device = 'pc';
      }

      // 釉뚮씪�곗� 泥댄겕
      var agent = navigator.userAgent.toLowerCase(),
        name = navigator.appName;

      if(name === 'Microsoft Internet Explorer' || agent.indexOf('trident') > -1 || agent.indexOf('edge/') > -1) {
        _browser = 'ie';
        $("html").addClass("ie");
      } else if(agent.indexOf('safari') > -1) { // Chrome or Safari
        if(agent.indexOf("chrome") > -1){
          _browser = 'chrome';
          $("html").addClass("chrome");
        }else{
          _browser = 'safari';
          $("html").addClass("safari");
        }
      } else if(agent.indexOf('firefox') > -1) { // Firefox
        _browser = 'firefox';
      }
    },
    init: function(){
      if(window.location.href.indexOf("http://kolon-group.easymedia.kr") > -1 || window.location.href.indexOf('127.0.0.1') > -1 || window.location.href.indexOf("http://eznet1.easymedia.kr") > -1) {
        if(window.location.href.indexOf("styleguide/") == -1){
          if($("header").html() == ''){
            $("header").empty().load("../../../html/kr/common_page/header.html");
            $(".landscape_screen").empty().load("../../../html/kr/common_page/landscape-screen.html");
            $("footer").empty().load("../../../html/kr/common_page/footer.html", function(){
              commonScript.headerFooterFn();
              commonScript.formChkFn();
              // commonScript.resizeFn();
              // commonScript.scrollFn();
            });
          }
        }        
      }
    },
    headerFooterFn: function(){
      // pc header gnb
      var gnbNum = -1;
      var headerDelayTime;

      if(window.innerWidth > 1280){
        getMaxTwoDepHeight();
      }
      
      $("header nav .gnb").on("mouseenter focusin", function(){
        if(window.innerWidth > 1280){
          if($("header .header_srch_area .btn_srch").hasClass("active")){
            $("body").removeClass("stop_scroll");
          }

          $("header .gnb").height();
          $("header").addClass("mouse_hover gnb_hover")
          $("header .header_srch_area .btn_srch").removeClass("active").attr("title","寃��� �닿린");
          $("header .header_srch_pop_area").removeClass("show");
          $("header .header_srch_pop_area .inner_dimd").removeClass("active");
          $("header .header_srch_pop_area .inner_dimd").stop(true, true).fadeOut(300);
          $("header .header_lang_area").removeClass("on");
          $(".form_select.on").find("select").blur();
          $(".form_select").removeClass("on");
          headerDelayTime = 
          setTimeout(function(){
            if($("header").hasClass("mouse_hover")){
              $("header nav .gnb > li .two_pack").css("display","block");
              $("header").addClass("drop_down");

              $("header .gnb, header.drop_down").height(_headerMaxHeight + 60);
            }
          }, 450);
        }
      });


      $("header nav .gnb").on("mouseleave", function(){
        if(window.innerWidth > 1280){
          $("header").removeClass("drop_down gnb_hover mouse_hover");
          $("header .gnb, header").height(60);
          $(".dimd").stop(true, true).fadeOut(400);
          $("header nav .gnb > li").removeClass("on");
          $("header nav .gnb > li .two_pack").css("display","none");
          $("header nav .gnb > li .two_pack > li").removeClass("on");
          $("header .gnb > li .one_depth").blur();
          clearTimeout(headerDelayTime);
        }
      });

      $("header nav .gnb > li").each(function(q){
        $(this).on("mouseenter focusin", function(){
          if(window.innerWidth > 1280){
            if(gnbNum != $(this).index()){
              $("header nav .two_pack > li").removeClass("on");
            }
  
            $(this).siblings().removeClass("on");
            $(this).addClass("on");
  
            gnbNum = $(this).index();
          }
        });
      });

      $("header nav .two_pack > li").each(function(q){
        $(this).mouseenter(function(){
          if(window.innerWidth > 1280){
            $(this).siblings().removeClass("on");
            $(this).addClass("on");
          }
        });
      });

      // header search
      $("header .btn_srch, header .header_srch_pop_area .btn_close_srch_mo, header .header_srch_pop_area .inner_dimd").on("click", function(){
        if(!$(this).hasClass("active")){
          $("header .btn_srch, header .header_srch_pop_area .btn_close_srch_mo").addClass("active").attr("title","寃��� �リ린");
          $("header .header_srch_pop_area .btn_close_srch_mo").addClass("active").attr("title","寃��� �リ린");
          $("header .header_srch_pop_area .inner_dimd").addClass("active");
          $("header .header_srch_pop_area").addClass("show");
          $("header .header_srch_pop_area .form_search input").focus();
          $("header .header_srch_pop_area .inner_dimd").stop(true, true).fadeIn(300);
          $('body').addClass('stop_scroll');
          $("body, html").on('scroll touchmove mousewheel', function (e) {
            e.preventDefault();
          });
        }else{
          $("header .btn_srch, header .header_srch_pop_area .btn_close_srch_mo").removeClass("active").attr("title","寃��� �닿린");
          $("header .header_srch_pop_area .btn_close_srch_mo").removeClass("active").attr("title","寃��� �닿린");
          $("header .header_srch_pop_area .inner_dimd").removeClass("active")
          $("header .header_srch_pop_area").removeClass("show");
          $("header .header_srch_pop_area .inner_dimd").stop(true, true).fadeOut(300);
          $("body").removeClass("stop_scroll")
          $("body, html").off('scroll touchmove mousewheel');
        }
      });
      

      // header language
      $("header .header_lang_area .btn_lang_cho").on("click", function(){
        if(!$(this).parents(".header_lang_area").hasClass("on")){
          $(this).parents(".header_lang_area").addClass("on");
        }else{
          $(this).parents(".header_lang_area").removeClass("on");
        }
      });

      $('body').click(function(e){
        if(!$(e.target).parents().hasClass("header_lang_area")){
          $("header .header_lang_area").removeClass("on");
        }
      });
      

      // 怨꾩뿴�� �닿린
      $("header .subsidiary_site_area .btn_open_subsidiary_site").on("click", function(){
        $("header .subsidiary_list_popup").addClass("show");
        $("header .subsidiary_list_popup .inner_dimd").stop(true, true).fadeIn(300);
        $("body").addClass("stop_scroll");
      });
      // 怨꾩뿴�� �リ린
      $("header .subsidiary_list_popup .btn_close_subsidiary").on("click", function(){
        $("header .subsidiary_list_popup").removeClass("show");
        $("header .subsidiary_list_popup .inner_dimd").stop(true, true).fadeOut(300);
        if(!$("header nav").hasClass("show")){
          $("body").removeClass("stop_scroll");
        }
      });


      // mobile header gnb �꾩퐫�붿뼵
      _mGnbAccordion = -1;
      $("header .gnb > li .one_depth").on("click", function(){
        if(window.innerWidth <= 1280){
          if(_mGnbAccordion != $(this).parents("li").index()){
            $(this).parents("li").siblings().removeClass("on").find(".two_pack").stop(true, true).slideUp(300);
            $(this).parents("li").addClass("on").find(".two_pack").stop(true, true).slideDown(300);
            _mGnbAccordion = $(this).parents("li").index();
          }else{
            $(this).parents("li").removeClass("on").find(".two_pack").stop(true, true).slideUp(300);
            _mGnbAccordion = -1;
          }
          
        }
      });

      // mobile �꾩껜硫붾돱 �닿린
      $("header .btn_open_mo_menu").on("click", function(){
        $("header nav").addClass("show");
        $("header nav .inner_dimd").stop(true, true).fadeIn(300);
        $("header .gnb_w").height(window.innerHeight - 120) // 紐⑤컮�� 寃��됰컮 �섎떒�� �덈뒗 寃쎌슦
        $("body").addClass("stop_scroll");

        //紐⑤컮�� 硫붾돱 �대┃�� �꾩옱 �섏씠吏� 硫붾돱 �ㅽ뵂
        $(".gnb_w .isCurrent").each(function(){
          if(!$(this).hasClass("on")){
            $(this).find("a:first-child").first().click();
          }
        })
      });
      // mobile �꾩껜硫붾돱 �リ린
      $("header nav .btn_close_mo_menu").on("click", function(){
        $("header nav").removeClass("show");
        $("header nav .inner_dimd").stop(true, true).fadeOut(300);
        $("body").removeClass("stop_scroll");
      });



      //footer ���됲듃 諛뺤뒪
      /*$("#selectFmliList").change(function(){
        if($.trim($(this).val()) != "" && $.trim($(this).val()).toLowerCase() != "javascript:"){
          window.open($(this).val())
        }
      })*/

      //footer �⑤�由� �ъ씠��
      $(document).off().on("click", "footer .select_box_div .btn_open", function(){
        if(!$("footer .select_box_div .btn_open").hasClass("on")){
          $("footer .select_box_div .list_wrap").show();
          $("footer .select_box_div .btn_open").addClass("on");
        }else{
          $("footer .select_box_div .list_wrap").hide();
          $("footer .select_box_div .btn_open").removeClass("on");
        }
      });
    },
    commonFn: function(){
      // �듭빱 �⑥닔
      afterAnchor();

      // �묐쾭��
      repositioningTopBtn(); // �ㅽ겕濡� �녿뒗 �섏씠吏��먯꽌 �ㅽ겕濡� �� 珥덇린 �꾩튂媛� �ㅼ젙

      $(document).on("click", ".btn_top", function(){
        gsap.to($("html, body"), {duration: 0.8, scrollTop: 0, ease: Power3.easeOut});
      });

      // 紐⑤컮�� �붾㈃ 怨꾩뿴�� �뚭컻 �붾낫湲� 踰꾪듉
      $(".more_con_btn").each(function(){
        $(this).on("click", function(){
          repositioningTopBtn();
          $(this).hide();
          $(this).siblings(".more_con_div").show();
          repositioningTopBtn();
        });
      });
      
      // view �섏씠吏� title �믪씠媛�
      _viewConTitHeight = $(".view_con .tit_con").innerHeight();

      // 紐⑤컮�� �뚯씠釉� 媛�濡쒖뒪�щ· �ㅽ겕濡� �� �대�吏� fadeOut
      if($(".need_scroll").size() > 0){
        $(".need_scroll").each(function(){
          $(this).find(".scroll_table").on("scroll", function(){
            if(!$(this).siblings(".scroll_img_w").hasClass("on")){
              $(this).siblings(".scroll_img_w").addClass("on");
              $(this).siblings(".scroll_img_w").fadeOut(400);
            }
          });
        })
      }

      // tab
      $(".tab_fn_area").each(function(q){
        $(".tab_area").find("a").on("click", function(){
          var i = $(this).index()
          if (!$(this).hasClass("on")) {
            repositioningTopBtn();
            $(this).parents(".tab_area").find("a").removeClass("on");
            $(this).parents(".tab_area").find("a").attr("title","�좏깮�덈맖");
            $(this).addClass("on");
            $(".tab_con_area").children("div").removeClass("on")
            $(".tab_con_area").children("div").eq(i).addClass("on")
            $(this).attr("title","�좏깮��");
          }
          repositioningTopBtn();
        });
      });

      // �꾩퐫�붿뼵
      $(".accordion_list .list .tit").on("click", function() {
        $(this).parent(".list").toggleClass("on");

        if($(this).parent().hasClass("on")) {
          $(this).parent().siblings().removeClass("on");
          $(".accordion_list .list .hide_con").stop().slideUp(500);
          $(this).parent().find(".hide_con").stop().slideDown(500);
        } else {
          $(this).parent().find(".hide_con").stop().slideUp(500);
        }
      });

      // �ㅻ━�곗� �� �대┃
      $(".year_tab_area .year").each(function(k){
        $(this).on("click", function(){
          TweenMax.to($("html, body"), 0, {scrollTop:$(this).parents(".comp_his_inner").find(".comp_his_con .txt_box").eq(k).offset().top - _compHisTop, ease:Power3.easeOut});

          $(".year_tab_area .year").attr("title", "�좏깮�덈맖");
          $(this).attr("title", "�좏깮��");
          
          setTimeout(function () {
            $("header").addClass("hide");
            $("header").removeClass("drop_down");
          }, 20);
        });
      });
    },
    scrollFn: function(){
      // not IE
      $(window).on("scroll", function(){
        _isScrollTop =  $(window).scrollTop();

        if(_isScrollTop > _this_scroll) { // down
          if(_isScrollTop > 0){
            if($("header").size() > 0){
              if($(window).scrollTop() > 100){
                if(!$("header").hasClass("mouse_hover")){
                  $("header").addClass("hide");
                }
              }
            }
          }
        }
        
        if(_isScrollTop < _this_scroll) { // up
          $("header").removeClass("hide");
        }
        _this_scroll = _isScrollTop;

        // �묐쾭��
        repositioningTopBtn();

        // 3depth fixed
        if($(".thr_dep_area").size() != 0){
          if(_isScrollTop >= $(".thr_dep_area").offset().top){          
            $(".thr_dep_area .thr_dep_wrap").addClass("fixed");
          }else{
            $(".thr_dep_area .thr_dep_wrap").removeClass("fixed");
          }
        }
        
        // �듭빱 �곸뿭 �ㅽ겕濡� �� �대떦�곸뿭�� class 遺숈씠湲�
        if($(".anchor_func_area").size() > 0){
          $(".anchor_func_area .anchor_con").each(function(q){
            if($(this).offset().top - _anchorPdNum  - $("header").height() - 1 < _isScrollTop){
              $(".anchor_btn_area .anchor_btn").removeClass("on");
              $(".anchor_btn_area .anchor_btn").eq(q).addClass("on");
            }
          });
          
          if(Math.ceil(_isScrollTop) >= $(".cont_wrap").innerHeight() + $("footer").innerHeight() - $(window).innerHeight()){
            $(".anchor_btn_area .anchor_btn").removeClass("on");
            $(".anchor_btn_area .anchor_btn").eq(-1).addClass("on");
          }
        }

        // �ㅻ━�곗� �� �ㅽ겕濡�
        var thisSlide;

        if ($(".year_tab_area").size() > 0) {
          if(_isScrollTop >= $(".comp_his_inner").offset().top - _compHisTop - 1){
            $(".year_tab_wrap").addClass("on");
          }else{
            $(".year_tab_wrap").removeClass("on");
          }

          $(".comp_his_con .txt_box").each(function(q){
            if($(this).offset().top - _compHisTop - 1 < _isScrollTop){
              $(".year_tab_area .year").removeClass("on");
              $(".year_tab_area .year").eq(q).addClass("on");
              thisSlide = q; 
            }
          });
          _yearTabSwiper.slideTo(thisSlide)
        }
      });$(window).scroll()

      // for IE
      $("body").on("scroll", function(){
        
      });

      // scrollMotion
      if($(".smaller_img_area").size() == 0){
        scrollMotionTrigger();
      }
    },
    swiperFn: function(){
      // 3depth swiper
      if($(".thr_dep_area").size() > 0){
        _thrDepSwiper = new Swiper(".thr_dep_area .swiper-container", {
          slidesPerView: "auto",
          simulateTouch:false,
        });
      }

      // 吏��띻��κ꼍�� culture 留덈씪�� 諛쒖옄痍� �ㅼ��댄띁
      if ($(".his_wrap").size() > 0) {
        var swiper = new Swiper(".his_swiper", {
          slidesPerView: 3.25,
          freeMode: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      }

      // �ъ뾽�뚭컻 �섏씠吏� �ㅼ��댄띁
      if($(".img_txt_wrap").size() > 0){
        var slideTxtSwiper = [];
        $(".img_txt_wrap").each(function(q){
          if($(this).find(".swiper-slide").length > 1){
            $(this).find(".slide_div .swiper-container").addClass("slide_txt_swiper" + q);

            slideTxtSwiper[q]= new Swiper(".slide_txt_swiper"+q, {
              observer: true,
              observeParents: true,
              loop:true,
              navigation: {
                nextEl: $(this).find(".swiper-button-next"),
                prevEl: $(this).find(".swiper-button-prev"),
              },
              pagination: {
                el: $(this).find(".swiper-pagination")
              },
              on: {
                init: function(){
                }
              }
            });
          }else{
            $(this).find(".swiper-button-next").hide()
            $(this).find(".swiper-button-prev").hide()
          }
        });
      }

      // �뚯깋 踰꾪듉 �ㅼ��댄띁
      if($(".gray_tab_area").size() > 0){
        var grayBtnSwiper = [];
        $(".gray_tab_area").each(function(q){
          $(this).addClass("gray_tab_swiper" + q);

          grayBtnSwiper[q]= new Swiper(".gray_tab_swiper"+q, {
            observer: true,
            observeParents: true,
            slidesPerView: "auto",
            // simulateTouch:false,
            on: {
              init: function(){
              }
            }
          });
        });
      }
      
      // 肄붿삤濡� �댁뒪 �곸꽭 由ъ뒪��
      if($(".recommend_news_w").size() > 0){
        _newsDetailSwiper = new Swiper(".recommend_news_w", {
          slidesPerView: "auto",
          simulateTouch:false,
        });
      }

      // 硫붿씤�앹뾽
      if($(".popup_swiper").size() > 0){
        if($(".popup_swiper .swiper-slide").length > 1){
          $(".popup_swiper .swiper-container").after($('<div class="swiper-button-prev"></div>'));
          $(".popup_swiper .swiper-container").after($('<div class="swiper-button-next"></div>'));
          
          _mainPopSwiper = new Swiper(".popup_swiper .swiper-container", {
            observer: true,
            observeParents: true,
            navigation: {
              nextEl: ".popup_swiper .swiper-button-next",
              prevEl: ".popup_swiper .swiper-button-prev",
            },
            pagination: {
              el: ".popup_swiper .swiper-pagination",
            },
            touchReleaseOnEdges: true,
            loop:true,
          });
        }else{
          _mainPopSwiper = new Swiper(".popup_swiper .swiper-container", {
            observer: true,
            observeParents: true,
            touchReleaseOnEdges: true,
          });
        }
      }

      // �ㅻ━�곗� �� 踰꾪듉
      if($(".year_tab_area").size() > 0){
        _yearTabSwiper = new Swiper(".year_tab_area .swiper-container", {
          slidesPerView: "auto",
          // simulateTouch:false,
          observer: true,
          observeParents: true,
        });
      }
    },
    resizeFn: function(){
      var beforeWidth = window.innerWidth;

      $(window).resize(function(){
        // header
        if(window.innerWidth > 1280){ // pc
          $("header").addClass("pc");
          if($("header").hasClass("mobile")){
            _mGnbAccordion = -1;
            $("header .gnb > li").removeClass("on");
            $("header").removeClass("mobile");

            getMaxTwoDepHeight();
          }
          $("header .gnb_w").removeAttr("style");
        }else{ // mobile
          $("header .gnb_w").css("height","auto");
          $("header .gnb > li .two_pack").css("height","auto");
          $("header .gnb").css("height","auto");
          $("header").addClass("mobile");
          $("header .gnb_w").height(window.innerHeight - 120) // 紐⑤컮�� 寃��됰컮 �섎떒�� �덈뒗 寃쎌슦
          if($("header").hasClass("pc")){
            _mGnbAccordion = -1;
            $("header .gnb > li").removeClass("on");
            $("header .gnb > li .two_pack").removeAttr("style");
            $("header").removeClass("pc mouse_hover gnb_hover drop_down");
          } 
          
          if($(".overview_system_area").size() > 0){
            $(".overview_program_area .overview_program_box .overview_program_div .bg").width($(".overview_program_area .overview_program_box .overview_program_div").width())
          }
        }

        // �묐쾭��
        repositioningTopBtn();

        // �대�吏� 由ъ궗�댁쭠
        imgResizingFn();

        // �앹뾽 �믪씠 由ъ궗�댁쫰
        popupResize();
        
        // �앹뾽 visible �� ��
        if($(".layer_popup").is(":visible")){
          $(".layer_popup:visible").find(".pop_wrap").height(Math.ceil($(".layer_popup:visible").find(".pop_cont").height() + $(".layer_popup:visible").find(".pop_head").innerHeight())); // �뚯닔�� 踰꾨┝
          // $(".main_popup:visible").find(".main_pop_swiper").css("height","");
          $(".layer_popup:visible .pop_wrap").css({"margin-left": $(".layer_popup:visible .pop_wrap").width()*-0.5, "margin-top": $(".layer_popup:visible .pop_wrap").height()*-0.5}); // 以묒븰�뺣젹
          $(".layer_popup:visible .pop_cont").height($(".layer_popup:visible").find(".pop_wrap").height() - $(".layer_popup:visible").find(".pop_head").innerHeight());
          
          $(".layer_popup:visible").find(".btn_close").on("click", function () {
            $(this).closest(".layer_popup").hide();
            $("body").removeClass("stop_scroll");
          });      

          $(".main_popup:visible .swiper-slide").each(function(){
            $(this).find(".link_area").innerHeight($(this).height() - $(this).find(".title").innerHeight())
          });
        }

        // �댁긽�� �곕Ⅸ pc, mobile 援щ텇
        if(window.innerWidth > 1024 ){ // pc
          _deviceCondition = "pc";

          // 吏��띻��κ꼍�� FO-ESG-005-05 �곗륫 �대�吏� bottom媛� 怨꾩궛 �꾪븳 蹂���
          //changeImgBottomPosition = 100 + $(".sustainability_program_area .change_img_area").height();
        }else{ // mobile
          _deviceCondition = "mobile";

          if($(".view_con").size() > 0){
            if($(".tit_con").hasClass("on")){
              $(".tit_con").removeClass("on");
            }
          }
        }

        // 肄섑뀗痢� �곸뿭 理쒖냼�믪씠媛� �ㅼ젙
        setTimeout(function(){
          $(".cont_wrap").css("min-height", window.innerHeight - $("footer").innerHeight());
          if($(".main_contents_wrap").size() > 0){
            $(".main_contents_wrap").css("min-height", $(".main_quick_card_list_w").innerHeight());
          }
          repositioningTopBtn();
        }, 100);

        // �뚯뀥誘몃뵒��(而ㅻ��덉��댁뀡猷�) �곸꽭 �좏뒠釉� �곸긽�� 寃쎌슦 �믪씠媛�
        if($(".view_con .img iframe").size() > 0){
          var iframeH = $(".view_con .img").width() * 0.563;
          $(".view_con .img").height(iframeH);
          $(".view_con .img iframe").height(iframeH);
        }

        if($(".map_area").size() > 0){
          if(window.innerWidth <= 1280){
            $(".tb_txt_area .map_area").height($(".tb_txt_area .map_area").width() * 0.48)
          }
        }

        if(window.innerWidth <= 768){
          // 3depth swiper
          if($(".thr_dep_area").size() > 0){
            if(_thrDepSwiper.destroyed == true){
              _thrDepSwiper = new Swiper(".thr_dep_area .swiper-container", {
                slidesPerView: "auto",
              });
            }
          }
          
          // 肄붿삤濡� �댁뒪 �곸꽭 由ъ뒪��
          if($(".recommend_news_w").size() > 0){
            // if(_newsDetailSwiper.destroyed == true){
            //   _newsDetailSwiper = new Swiper(".recommend_news_w", {
            //     slidesPerView: "auto",
            //   });
            // }
            _newsDetailSwiper = new Swiper(".recommend_news_w", {
              slidesPerView: "auto",
            });
          }
        }else{
          if($(".recommend_news_w").size() > 0){
            $(".recommend_news_w .swiper-wrpper").removeAttr("style");
            if(_newsDetailSwiper.destroyed != true){
              _newsDetailSwiper.destroy();
            }
          }

          if($(".thr_dep_area").size() > 0){
            $(".thr_dep_area .swiper-wrpper").removeAttr("style");
            if(_thrDepSwiper.destroyed != true){
              _thrDepSwiper.destroy();
            }
          }
          
        }

        if(beforeWidth != window.innerWidth){
          if($(".view_con .tit_con").hasClass("on")){
            $(".view_con .pin-spacer .tit_con").css("max-height", _viewConTitHeight);
            $(".view_con .pin-spacer").css("max-height", _viewConTitHeight);
          }
        }

        beforeWidth = window.innerWidth;

        // 紐⑤컮�� ���대�吏� �믪씠媛�
        if($(".full_img_w").size() > 0){
          if(!_isMotionOnce){
            if(window.innerWidth <= 768){
              $(".full_img_w").innerHeight(window.innerHeight - $(".full_img_wrap").offset().top);  
              imgResizingFn();
              setTimeout(function () {
                _isMotionOnce = true;
              }, 220);
            }else{
              // full �대�吏� �섏씠吏� 吏꾩엯 �� �④낵
              $(".full_img_w").removeAttr("style");
              setTimeout(function () {
                _isMotionOnce = true;
              }, 220);
              if (!$(".cont_inner").hasClass("heritage_inner")) {
                gsap.to($(".full_img_w .only_pc"), { duration: 1, top: "30%", ease: Power3.ease });
              } else {
                gsap.to($(".full_img_w .only_pc"), { duration: 1, top: "37%", ease: Power3.ease });
              }
            }
          }
        }

        // �곗륫 �쎌뒪�섎뒗 �대�吏� 紐⑤컮�� pc濡� 媛� �� �대�吏� 蹂댁씠�� �④낵
        // if (window.innerWidth >= 768) {
        //   if ($(".right_img_fix_area .fixed_con_area .change_img_area .img_con_area").css("opacity") == 0) {
        //     setTimeout(function () {
        //       $(".right_img_fix_area .fixed_con_area .change_img_area .img_con_area").addClass("active");
        //     } ,20)
        //   }
        // }

        // �ㅻ━�곗�
        if ($(".comp_his_inner").size() > 0) {
          // �댁쟾 �ㅻ━�곗� 二쇱꽍
          // $(".comp_his_list").each(function (q) {
          //   var hisTxtHt = $(".comp_his_list").eq(q).find(".img_txt_area").outerHeight(true);
          //   var hisTxtRtHt = $(".comp_his_list").eq(q).find(".right_txt_box").outerHeight(true);
          //   if (window.innerWidth <= 768) {
          //     if (hisTxtHt >= 260) {
          //       $(".comp_his_list").eq(q).find(".img").css({ height: hisTxtHt });
          //       $(".comp_his_list").eq(q).find(".tit_area").css({ marginTop: hisTxtHt + 50 });
          //       $(".comp_his_list").eq(q).find(".right").css({ marginTop: hisTxtHt });
          //     }
          //     $(".comp_his_list").eq(-1).find(".right").css({ marginTop: 384, paddingTop: 40 });
          //     $(".comp_his_list").eq(-2).find(".right").css({ marginTop: 384, paddingTop: 40 });
          //   } else {
          //     if (!$(".comp_his_list").eq(q).find(".txt_box").hasClass("active")) {
          //       if (hisTxtRtHt > 480) {
          //         $(".comp_his_list").eq(q).find(".left .img").css({ height: hisTxtRtHt + 200 });
          //       } else {
          //         $(".comp_his_list").eq(q).find(".left .img").removeAttr("style");
          //       }
          //     }
          //     $(".comp_his_list").find(".left .tit_area").removeAttr("style");
          //     $(".comp_his_list").find(".txt_box .right").removeAttr("style");
          //   }
          // });

          // �ㅻ━�곗� �� 踰꾪듉
          if($(".year_tab_area").size() > 0){
            if (window.innerWidth <= 768) {
              _compHisTop = 80
            }else{
              _compHisTop = 160
            }
          }
        }
      }).resize();
    },
    formChkFn: function(){
      // select (focus �щ��� �곕Ⅸ �붿궡�� �꾪솚 �꾪븳 �ㅽ겕由쏀듃)
      /*$(".form_select_arr").each(function(q){
        $(this).find("select").focus(function(){
          $(this).parents(".form_select").addClass("on");

          console.log("focus");
        });

        $(this).find("select").blur(function(){
          $(this).data('isopen', false);
          $(this).parents(".form_select").removeClass("on");
          if($(this).parents(".has_error_msg").size() > 0){
            if($(this).val() == ""){
              $(this).parents(".form_select, .has_error_msg").addClass("error");
            }else{
              $(this).parents(".form_select").removeClass("error");
              if($(this).closest(".has_error_msg").find(".error").size() == 0){
                $(this).parents(".has_error_msg").removeClass("error");
              }
            }
          }
        });

        $(this).find("select").on("change", function(){
          $(this).parents(".form_select").removeClass("on");
          if($(this).parents(".has_error_msg").size() > 0){
            if($(this).val() == ""){
              $(this).parents(".form_select, .has_error_msg").addClass("error");
            }else{
              $(this).parents(".form_select").removeClass("error");
              if($(this).closest(".has_error_msg").find(".error").size() == 0){
                $(this).parents(".has_error_msg").removeClass("error");
              }
            }
          }
        });
        
        $(this).find("select").mouseup(function(e) {
          var open = $(this).data("isopen");
    
          if(open) {
            $(this).parents(".form_select").removeClass("on");
            if($(this).parents(".has_error_msg").size() > 0){
              if($(this).val() == ""){
                $(this).parents(".form_select, .has_error_msg").addClass("error");
              }else{
                $(this).parents(".form_select").removeClass("error");
                if($(this).closest(".has_error_msg").find(".error").size() == 0){
                  $(this).parents(".has_error_msg").removeClass("error");
                }
              }
            }
          } else {
            $(this).parents(".form_select").addClass("on");
          }
          $(this).data("isopen", !open);
        });
      });*/
      
      var lastKeyisEnter = false;

      // Enter �� �ъ슜�щ� �뺤씤
      $(document).keypress(function(e){
        if(e.keyCode==13){
          lastKeyisEnter = true;
        }else{
          lastKeyisEnter = false;
        }
      })    

      // input (Error �곹깭�� 寃쎌슦 focusin�섎㈃ �ㅼ떆 �낅젰以� �곹깭濡� 蹂���)
      $(".form_input, .form_input_cal, .form_textarea, .form_search").each(function(q){
        if($(this).parents(".has_error_msg").size() > 0){

          $(this).find("input, textarea").keyup(function(){
            if($(this).val() == ""){
              $(this).parents(".form_input, .form_input_cal, .form_textarea, .form_search, .has_error_msg").addClass("error");
            }else{
              $(this).parents(".form_input, .form_input_cal, .form_textarea, .form_search, .has_error_msg").removeClass("error");
            }
          });
    
          $(this).find("input, textarea").focusout(function(){
            if($(this).parents(".form_input_cal").size() > 0){
              if($(this).hasClass("datepicker_input")){
                $(this).on("propertychange change keyup paste input", function() {
                  $(this).parents(".form_input, .form_input_cal, .form_search, .has_error_msg").removeClass("error");
                });
              }else{
                if($(this).val() == ""){
                  $(this).parents(".form_input, .form_input_cal, .form_search, .has_error_msg").addClass("error");
                }else{
                  $(this).parents(".form_input, .form_input_cal, .form_search, .has_error_msg").removeClass("error");
                }
              }
            }else{
              if($(this).val() == ""){
                $(this).parents(".form_input, .form_input_cal, .form_textarea, .form_search, .has_error_msg").addClass("error");
              }else{
                $(this).parents(".form_input, .form_input_cal, .form_textarea, .form_search, .has_error_msg").removeClass("error");
              }
            }
          });
        }
      });

      // input checkbox (label �쒓렇 �대��� �띿뒪媛� �놁쓣 ��)
      $(".form_checkbox").each(function(q){
        if($(this).find("label").html() == ""){
          $(this).addClass("no_txt")
        };
      });

      $(".form_radio").each(function(q){
        if($(this).find("label").html() == ""){
          $(this).addClass("no_txt")
        }
      });


      // 寃��� 諛뺤뒪 吏��곌린 踰꾪듉 �몄텧/誘몃끂異�
      $(".form_search").each(function(q){
        if($(this).find("input").val() !== "") {
          $(this).find("input").closest(".form_search").find(".btn_delete").show();
        }

        $(this).find("input").on("keyup", function() {
          if(!$(this).is('[readonly]')){
            if($(this).val() !== "") {
              $(this).closest(".form_search").find(".btn_delete").show();
            } else {
              $(this).closest(".form_search").find(".btn_delete").hide();
            }
          }
        });
      });

      // 寃��� 諛뺤뒪 吏��곌린 踰꾪듉 �대┃ ��
      $(document).on("click", ".input_btn_wrap .btn_delete", function(){
        $(this).hide();
        $(this).parents(".input_btn_wrap").siblings("input").val("").focus();
      });

      //textarea
      textareaFn();

      // radio 吏곸젒�낅젰 �좏깮
      $(".choose_rad .list .form_radio input").on("click", function(){
        if($(this).parents(".list").hasClass("disabled")){
          $(this).parents(".choose_rad").find(".list").addClass("disabled");
          $(this).parents(".list").removeClass("disabled");

          $(this).parents(".list").find(".form_input input").attr('disabled', false);
          $(this).parents(".choose_rad").find(".list.disabled").find(".form_input input").attr('disabled', true);

          $(this).parents(".list").find(".border_btn").removeClass("disabled");
          $(this).parents(".choose_rad").find(".list.disabled").find(".border_btn").addClass("disabled");
        }
      });


      // 泥댄겕諛뺤뒪 �꾩껜
      $(".total_checkbox").each(function(q){
        $(this).find(".form_checkbox input").each(function(k){
          $(this).on("click", function(){
            if(k == 0){
              if(!$(this).parents(".total_checkbox").hasClass("check")){
                $(this).parents(".total_checkbox").addClass("check");
                $(this).parents(".total_checkbox").find(".depth_checkbox").addClass("check");
                $(this).parents(".total_checkbox").find(".form_checkbox input").prop("checked", true);
              }else{
                $(this).parents(".total_checkbox").removeClass("check");
                $(this).parents(".total_checkbox").find(".depth_checkbox").removeClass("check");
                $(this).parents(".total_checkbox").find(".form_checkbox input").prop("checked", false);
              }
            }else{
              if($(this).parent(".form_checkbox").parent(".depth_checkbox").size() > 0){
                if(!$(this).parents(".depth_checkbox").hasClass("check")){
                  $(this).parents(".depth_checkbox").addClass("check");
                  $(this).parent(".form_checkbox").parent(".depth_checkbox").find(".two_d_checkbox .form_checkbox input").prop("checked", true);
                }else{
                  $(this).parents(".depth_checkbox").removeClass("check");
                  $(this).parent(".form_checkbox").parent(".depth_checkbox").find(".two_d_checkbox .form_checkbox input").prop("checked", false);
                }
              }else{
                if($(this).parents(".two_d_checkbox").find(".form_checkbox input").size() == $(this).parents(".two_d_checkbox").find(".form_checkbox input:checked").size()){
                  $(this).parent(".form_checkbox").parents(".depth_checkbox").addClass("check");
                  $(this).parent(".form_checkbox").parents(".depth_checkbox").children(".form_checkbox").find("input").prop("checked", true);
                }else{
                  $(this).parent(".form_checkbox").parents(".depth_checkbox").removeClass("check");
                  $(this).parent(".form_checkbox").parents(".depth_checkbox").children(".form_checkbox").find("input").prop("checked", false);
                }
              }

              if($(this).parents(".total_checkbox").find(".total_wrap .form_checkbox input").size() == $(this).parents(".total_checkbox").find(".total_wrap .form_checkbox input:checked").size()){
								$(this).parents(".total_checkbox").addClass("check");
                $(this).parents(".total_checkbox").children(".form_checkbox").find("input").prop("checked", true);
							}else{
                $(this).parents(".total_checkbox").removeClass("check");
                $(this).parents(".total_checkbox").children(".form_checkbox").find("input").prop("checked", false);
              }
            }
          });
        });
      });
    },
    checkLangFn: function(){
      //var check_spc = /[��-��|��-��|媛�-��]/; //�쒓�
      //var check_kor = /[~!@#\#$%<>^&*]/; //�뱀닔臾몄옄
      var check_num = /[0-9]/; // �レ옄
      var check_eng = /[a-zA-Z]/; // �곸뼱

      $("span, a, p, em").each(function (index) {
        if($(this).children("img").length < 1){
          if(check_num.test($(this).text()) || check_eng.test($(this).text())){
            $(this).addClass("no_letterspacing");
          }
        }
      });

      $("table td").each(function (index) {
        if($(this).find("span, a, p, em").size() == 0){
          if($(this).children("img").length < 1){
            if(check_num.test($(this).text()) || check_eng.test($(this).text())){
              $(this).addClass("no_letterspacing");
            }
          }
        }
      });
    },
    scrollTriggerFn:function(){
      // 肄붿삤濡� �댁뒪 �곸꽭 �섏씠吏� �몃━嫄�
      if($(".view_con").size() > 0){
        if($(".view_con .tit_con.on .change_width").length){
          var afterHeight = $(".view_con .tit_con.on .change_width .tit").get(0).getBoundingClientRect().height
          var changingHeight = $(".view_con .tit_con .prev_btn").height() + $(".view_con .tit_con.on .change_width .tit").get(0).getBoundingClientRect().height + 24 + $(".view_con .tit_con .info_div").outerHeight(true) + 80;
        }

        $(".view_con .tit_con.on").removeClass("on");

        var originHeight = afterHeight / 0.65 ;

        ScrollTrigger.matchMedia({
          "(min-width : 1025px)": function(){
            // 肄붿삤濡� �댁뒪 �곸꽭 �섏씠吏� �몃━嫄�
            gsap.to(".view_con .tit_con", {
              scrollTrigger: {
                trigger: ".view_con .tit_con",
                start:"top 80",
                endTrigger: $(".view_con .txt_con"),
                end:"bottom " + changingHeight,
                pin:true,
                pinSpacing: false,
                //markers: true,
                //toggleClass: 'on',
                //invalidateOnRefresh: false,
                //scrub:1,
                onEnter:function(){
                  $(".view_con .tit_con").addClass("on");
                  gsap.to($(".view_con .tit_con .info_div"), 0.5, {bottom: originHeight - afterHeight, ease:Power3.easeOut});
                },
                onUpdate:function(){
                },
                onLeaveBack:function(){
                  $(".view_con .tit_con").removeClass("on")
                  gsap.to($(".view_con .tit_con .info_div"), 0.5, {bottom: 0, ease:Power1.ease});                
                },
              },
            });
          }
        });
        // ScrollTrigger.addEventListener("scrollStart", () => console.log("scrolling ended!"));
      }
      

      

      // gsap.to(".view_con .tit_con .tit", {
      //   scrollTrigger: {
      //     trigger: ".view_con .tit_con",
      //     start:"top top",
      //     end:"top top",
      //     scrub:1,
      //     // markers: true,
      //   },
      //   width:"390px",
      // });

      // 洹몃９ 媛쒖슂
      if($(".group_outline_sec").size() > 0){
        ScrollTrigger.matchMedia({
          "(min-width : 769px)": function(){
            // 肄붿삤濡� �댁뒪 �곸꽭 �섏씠吏� �몃━嫄�
            gsap.to(".group_outline_sec", {
              scrollTrigger: {
                trigger: ".group_outline_sec .bg_area",
                //trigger: $(this),
                start:"top top",
                end:"bottom top",
                endTrigger: $(".group_outline_sec"),
                pin:true,
                // markers: true,
                // scrub:1,
              },
            });
      
            gsap.to(".group_outline_sec", {
              scrollTrigger: {
                trigger: ".group_outline_sec .sub_con_tit_area",
                //trigger: $(this),
                start:"top-=80 top",
                end:"bottom top",
                // endTrigger: $(".group_outline_sec .txt_box").eq(-1).find(".heading_title_Minimum"),
                endTrigger: $(".group_outline_sec .txt_box").eq(-1).find(".img_wrap").eq(-2),
                pin:true,
                // markers: true,
                // scrub:1,
                onEnter: function() {
                  $(".group_outline_sec .sub_con_tit_area").css("z-index", 1);
                }
              },
            });
          }
        });
      }
      

      // �듭빱 踰꾪듉 fixed
      /*if($(".anchor_func_area").size() > 0){
        ScrollTrigger.matchMedia({
          "(min-width : 1025px)": function(){
            // 肄붿삤濡� �댁뒪 �곸꽭 �섏씠吏� �몃━嫄�
            gsap.to(".anchor_func_area", {
              scrollTrigger: {
                trigger: ".anchor_func_area .anchor_btn_area",
                //trigger: $(this),
                start:"top-=120 top",
                end:"bottom bottom",
                endTrigger: $(".anchor_con_area"),
                pin:true,
                // markers: true,
                // scrub:1,
              },
            });
          }
        });
      }*/
      

      // One&Only �꾩썝��(FO-COM-002-01)
      if($(".full_img_w").size() > 0){
        $(".full_img_w").addClass("active");
        // ScrollTrigger.matchMedia({
        //   "(min-width: 769px)": function () {
        //     gsap.to(".full_img_w .only_pc", {
        //       scrollTrigger: {
        //         trigger: ".full_img_w",
        //         //trigger: $(this),
        //         start: "top-=50% top",
        //         end: "bottom top",
        //         endTrigger: $(".full_img_w"),
        //         // pin:true,
        //         // markers: true,
        //         scrub: 1,
        //       },
        //       scale: 1.15,
        //     });
        //   }
        // });
        if (!$(".full_img_w").hasClass("no_scale")) {
          ScrollTrigger.matchMedia({
            "(min-width: 769px)": function () {
              gsap.to(".full_img_w .only_pc", {
                scrollTrigger: {
                  trigger: ".full_img_w",
                  //trigger: $(this),
                  start: "top-=50% top",
                  end: "bottom top",
                  endTrigger: $(".full_img_w"),
                  // pin:true,
                  // markers: true,
                  scrub: 1,
                },
                scale: 1.15,
              });
            }
          });
        }
      }
      
      // �ㅻ━�곗�
      if ($(".comp_his_inner").size() > 0) {
        $(".comp_his_list").each(function (q) {
          // if (window.innerWidth > 768) {
          //   var hisTxtRtHt = $(".comp_his_list").eq(q).find(".img_txt_area .right_txt_box").outerHeight(true);
          //   $(".comp_his_list").eq(q).find(".img_txt_area").removeClass("active");
          //   if (!$(".comp_his_list").eq(q).find(".txt_box").hasClass("active")) {
          //     if (hisTxtRtHt > 480) {
          //       $(".comp_his_list").eq(q).find(".left .img").css({ height: hisTxtRtHt + 200 });
          //     } else {
          //       $(".comp_his_list").eq(q).find(".left .img").removeAttr("style");
          //     }
          //   }
          // }

          ScrollTrigger.matchMedia({
            // �곷떒 鍮꾩＜�� �곸뿭
            "(min-width: 769px)": function () {
              if ($(".comp_his_list").eq(q).find(".his_detail").eq(-1).find(".img_txt_list p").length % 2 == 0) { 
                hisRtHt = $(".comp_his_list").eq(q).find(".right").height() - 615; 
              } else {
                hisRtHt = $(".comp_his_list").eq(q).find(".right").height() - 585; 
              }
              // �ㅻ━�곗� �댁쟾 �붿옄�� 二쇱꽍 泥섎━
              // gsap.to($(".comp_his_list").eq(q).find(".img_txt_area"), {
              //   scrollTrigger: {
              //     trigger: $(".comp_his_list").eq(q).find(".img_txt_area"),
              //     start: "top-=190px top",
              //     end: "bottom+=180% bottom",
              //     scrub: 1,
              //     pin: true,
              //     onUpdate: function (self) {
              //       if (self.progress.toFixed(3) > 0) {
              //         $(".comp_his_list").eq(q).find(".img").addClass("active");
              //         $(".comp_his_list").eq(q).find(".img_txt_area").addClass("active");
              //       } else {
              //         $(".comp_his_list").eq(q).find(".img").removeClass("active");
              //         $(".comp_his_list").eq(q).find(".img_txt_area").removeClass("active");
              //       }

              //       if (self.progress.toFixed(3) > 0.7) {
              //         $(".comp_his_list").eq(q).find(".left .img").removeAttr("style");
              //         $(".comp_his_list").eq(q).find(".txt_box").addClass("active");
              //         $(".comp_his_list").eq(q).find(".img_txt_area").addClass("fadeOut");
              //         setTimeout(function () {
              //           $(".comp_his_list").eq(q).find(".plus_btn").addClass("on");
              //         }, 100);
              //       } else {
              //         $(".comp_his_list").eq(q).find(".plus_btn").removeClass("on");
              //         $(".comp_his_list").eq(q).find(".txt_box").removeClass("active");
              //         $(".comp_his_list").eq(q).find(".img_txt_area").removeClass("fadeOut");
              //       }
              //       if (self.progress.toFixed(3) > 0.8) {
              //         $(".comp_his_list").eq(q).find(".right").addClass("on");
              //       } else {
              //         $(".comp_his_list").eq(q).find(".right").removeClass("on");
              //       }
              //     },
              //   }
              // });

              // 醫뚯륫 �대�吏� fixed
              gsap.to($(".comp_his_list").eq(q), {
                scrollTrigger: {
                  trigger: $(".comp_his_list").eq(q).find(".left"),
                  start: "top-=190px top",
                  end: hisRtHt + "bottom",
                  endTrigger: $(".comp_his_list").eq(q),
                  pin: true,
                  scrub: 1,
                }
              });
            },
            // �ㅻ━�곗� �댁쟾 �붿옄�� 二쇱꽍 泥섎━
            // "(min-width: 769px) and (max-width: 1279px)": function () {
            //   // �곷떒 鍮꾩＜�� �곸뿭
            //   hisRtHt = $(".comp_his_list").eq(q).find(".right").outerHeight(true);
            //   gsap.to($(".comp_his_list").eq(q), {
            //     scrollTrigger: {
            //       trigger: $(".comp_his_list").eq(q).find(".img_txt_area"),
            //       start: "top-=190px top",
            //       end: "1700px bottom",
            //       scrub: 1,
            //       pin: true,
            //       onUpdate: function (self) {
            //         if (self.progress.toFixed(3) > 0) {
            //           $(".comp_his_list").eq(q).find(".img").addClass("active");
            //           $(".comp_his_list").eq(q).find(".img_txt_area").addClass("active");
            //         } else {
            //           $(".comp_his_list").eq(q).find(".img").removeClass("active");
            //           $(".comp_his_list").eq(q).find(".img_txt_area").removeClass("active");
            //         }

            //         if (self.progress.toFixed(3) > 0.7) {
            //           $(".comp_his_list").eq(q).find(".txt_box").addClass("active");
            //           $(".comp_his_list").eq(q).find(".img_txt_area").addClass("fadeOut");
            //           setTimeout(function () {
            //             $(".comp_his_list").eq(q).find(".plus_btn").addClass("on");
            //           }, 100)
            //         } else {
            //           $(".comp_his_list").eq(q).find(".plus_btn").removeClass("on");
            //           $(".comp_his_list").eq(q).find(".txt_box").removeClass("active");
            //           $(".comp_his_list").eq(q).find(".img_txt_area").removeClass("fadeOut");
            //         }
            //         if (self.progress.toFixed(3) > 0.75) {
            //           $(".comp_his_list").eq(q).find(".right").addClass("on");
            //         } else {
            //           $(".comp_his_list").eq(q).find(".right").removeClass("on");
            //         }
            //       },
            //     }
            //   });
 
            //   // 醫뚯륫 �대�吏� fixed
            //   gsap.to($(".comp_his_list").eq(q).find(".img_txt_area"), {
            //     scrollTrigger: {
            //       trigger: $(".comp_his_list").eq(q).find(".left"),
            //       start: "top-=190px top",
            //       end: hisRtHt + "bottom",
            //       endTrigger: $(".comp_his_list").eq(q),
            //       markers: true,
            //       pin: true,
            //       scrub: 1,
            //     }
            //   });
            // },
            // "(max-width: 768px)": function () {
            //   //  �곷떒 鍮꾩＜�� �곸뿭
            //   $(".comp_his_list").eq(q).find(".txt_box").removeClass("active");
            //   $(".comp_his_list").eq(q).find(".img_txt_area").removeClass("fadeOut");
            //   gsap.to($(".comp_his_list").eq(q).find(".img_txt_area"), {
            //     scrollTrigger: {
            //       trigger: $(".comp_his_list").eq(q).find(".img_txt_area"),
            //       start: "top 75%",
            //       end: "bottom top",
            //       scrub: 1,
            //       onUpdate: function (self) {
            //         if (self.progress.toFixed(3) > 0) {
            //           $(".comp_his_list").eq(q).find(".img").addClass("active");
            //           $(".comp_his_list").eq(q).find(".img_txt_area").addClass("active");
            //           $(".comp_his_list").eq(q).find(".tit_area").addClass("active");
            //           $(".comp_his_list").eq(q).find(".plus_btn").addClass("active");
            //         } else {
            //           $(".comp_his_list").eq(q).find(".img").removeClass("active");
            //           $(".comp_his_list").eq(q).find(".img_txt_area").removeClass("active");
            //           $(".comp_his_list").eq(q).find(".tit_area").removeClass("active");
            //           $(".comp_his_list").eq(q).find(".plus_btn").removeClass("active");
            //         }
            //       },
            //     }
            //   });
            // }
          });

          // �띿뒪�� �몃쾭 �� 醫뚯륫 �대�吏� 援먯껜
          $(".comp_his_list").eq(q).find(".img_vis").each(function (i) {
            $(this).on("mouseenter focusin", function () {
              $(".comp_his_list").eq(q).find(".img_con").eq(i).addClass("on");
            });

            $(this).on("mouseleave focusout", function () {
              $(".comp_his_list").eq(q).find(".img_con").eq(i).removeClass("on");
            });
          });
        });
      }
      // ---------------------------------------------------------------------------------------- 吏��띻��κ꼍�� - 媛쒖슂(FO-ESG-005-05) Start ----------------------------------------------------------------------------------------
      // �ы쉶怨듯뿄 �꾨줈洹몃옩 title 怨좎젙
      /*gsap.to(".sustainability_program_area", {
        scrollTrigger: {
          trigger: ".sus_program_fix_area .sub_con_tit_area .tit",
          //trigger: $(this),
          start:"top 60", // header�믪씠 60
          end:"bottom bottom",
          endTrigger: $(".sus_program_fix_area"),
          pin:true,
          //markers: true,
          // scrub:1,
        },
      });*/

      // �곗륫 �대�吏� �곸뿭 fix
      if($(".right_img_fix_area").size() > 0){
        ScrollTrigger.matchMedia({
          "(min-width : 769px)": function(){
            gsap.to(".fixed_con_area", {
              scrollTrigger: {
                trigger: ".fixed_con_area .change_img_area",
                //trigger: $(this),
                start:"top "+ "12.5% + 30",
                endTrigger: $(".fixed_con_area"),
                end:"bottom+=400 "+ "87.5% + 30",
                pin:true,
                //markers: true,
                id: "right_fix",
                //scrub:1,
                onEnter: function(){
                  $(".fixed_con_area").addClass("on");
                  $(".fixed_con_area .txt_con_area").addClass("on");
                },
                onEnterBack: function(){
                  $(".fixed_con_area").addClass("on");
                  $(".fixed_con_area .txt_con_area").addClass("on");
                },
                onLeave: function(){
                  $(".fixed_con_area").removeClass("on");
                  $(".fixed_con_area .txt_con_area").removeClass("on");
                },
                onLeaveBack: function(){
                  $(".fixed_con_area").removeClass("on");
                  $(".fixed_con_area .txt_con_area").removeClass("on");
                }
              },
            });
            
            // �ㅽ겕濡ㅼ뼇�� �곕씪 �ㅻⅨ履� �대�吏� 援먯껜 紐⑥뀡
            $(".fixed_con_area .change_img_area .img_con_area .img_list").each(function(q){
              gsap.to($(this), 1, {
                scrollTrigger: {
                  trigger: $(".fixed_con_area .txt_con_area .con_list").eq(q),
                  start:"top "+ "87.5% + 30",
                  end:"bottom " + "87.5% + 30",
                  scrub: 1,
                  //markers: true,
                  onUpdate: function(self){              
                    if(q>0){
                      gsap.to($(".fixed_con_area .change_img_area .img_con_area .img_list").eq(q-1), 0, {top: -100*self.progress.toFixed(3)+"%", ease:Power3.easeOut});
                    }
                  }
                },
              });
            });


            // �쇱” 湲��� �곸뿭 �좉퉸 fixed �쒗궎湲�
            $(".fixed_con_area .txt_con_area .con_list").each(function(q){
              gsap.to($(this), 1, {
                scrollTrigger: {
                  trigger: $(this).find(".for_v_center"),
                  start:"bottom "+ "87.5% + 30",
                  end:"bottom+=400 "+ "87.5% + 30",
                  pin:true,
                  //pinSpacing: false,
                  scrub: 1,
                  //markers: true,
                  id: "left_txt_fix",
                },
              });
            });
          }
        });
      }
      
      // ---------------------------------------------------------------------------------------- 吏��띻��κ꼍�� - 媛쒖슂(FO-ESG-005-05) End ----------------------------------------------------------------------------------------

      if($(".overview_system_area").size() > 0){
        ScrollTrigger.matchMedia({
          "(min-width: 1025px)": function() {
            gsap.to(".overview_system_area .overview_list:nth-child(1) .img", {
              scrollTrigger: {
                trigger: ".overview_system_area",
                start:"top +=60px",
                end:"bottom bottom",
                // markers: true,
                scrub:1,
                onEnter: function(){
                  $(".overview_system_area .heading_title_Bold").addClass("active");
                  $(".overview_system_area .overview_list:nth-child(1) .img").addClass("on");
                },
                onEnterBack:function(){
                  $(".overview_system_area .heading_title_Bold").removeClass("active");
                  $(".overview_system_area .overview_list_con").removeClass("sec thr last");
                  $(".overview_system_area .overview_list:nth-child(1)").removeClass("first");
                  $(".overview_system_area .overview_list:nth-child(1) .img").removeClass("on motion");
                },
              },
            });
          }
        });
        ScrollTrigger.matchMedia({
          "(min-width: 1025px)": function() {
            gsap.to(".overview_system_area", {
              scrollTrigger: {
                trigger: ".overview_system_area",
                start:"center center",
                end:"bottom+=900% bottom",
                pin:true,
                // markers:true,
                scrub:1,
                onUpdate: function(self){ 
                  // console.log(self.progress.toFixed(3))
                  if(self.progress.toFixed(3) >= 0.15){
                    $(".overview_system_area .overview_list_con .overview_list:nth-child(1)").addClass("first");
                    $(".overview_system_area .overview_list:nth-child(1) .img").addClass("motion");
                  }
                  if(self.progress.toFixed(3) <= 0.85){
                    $(".overview_system_area .overview_list_con").removeClass("last");
                  }
                  if(self.progress.toFixed(3) < 0.25){
                    $(".overview_system_area .overview_list_con").removeClass("sec");
                  }else if(self.progress.toFixed(3) >= 0.25 && self.progress.toFixed(3) < 0.45){
                    $(".overview_system_area .overview_list_con").addClass("sec");
                    $(".overview_system_area .overview_list_con").removeClass("thr");
                  }else if(self.progress.toFixed(3) >= 0.45 && self.progress.toFixed(3) < 0.78){
                    $(".overview_system_area .overview_list_con").removeClass("sec");
                    $(".overview_system_area .overview_list_con").addClass("thr");
                  }else{
                    $(".overview_system_area .overview_list_con").addClass("thr last");
                  }
                }
              },
            });
          }
        });
        
      }

      // 吏��띻��κ꼍�� > esg寃쎌쁺
      if($(".smaller_img_area").size() > 0 && !$(".smaller_img_area").hasClass("no_smaller_motion")){
        var esgChangeImg = gsap.timeline();

        esgChangeImg.to(".smaller_img_area", {opacity: 1, duration: 0.5 }, "1")
                    .to(".smaller_img_area .change_img_area", {/*width: $(".inner").width(), height: 480,*/ borderRadius: 14, duration: 2 }, "0")
                    .to(".smaller_img_next", {top: 0, duration: 1 }, "1")
                    .to(".smaller_img_area .change_img_area .img_list .txt_area", {opacity: 0, top:-200, duration: 1 }, "1.2")
                    .to(".smaller_img_area .change_img_area .img_list.wide_img", {opacity: 0, duration: 1 }, "1.2")        


        ScrollTrigger.matchMedia({
          "(min-width : 769px)": function(){
            ScrollTrigger.create({
              animation: esgChangeImg,
              trigger: ".smaller_img_area",
              start: "top 50%",
              end: "bottom+=70% bottom",
              scrub: 1,
              //markers: true,
              onUpdate: function(self){
                //gsap.to($(".smaller_img_area .change_img_area"), 0, {width: window.innerWidth - ((window.innerWidth - $(".inner").width()) * self.progress.toFixed(3)), ease:Power3.easeOut});
              },
              onEnter:function(){
                $(".smaller_img_area").addClass("active");
                //$(".smaller_img_next").addClass("active");
                setTimeout(function(){
                  scrollMotionTrigger();
                }, 500);
              },
              onEnterBack: function(){
                $(".smaller_img_area").addClass("active");
              },
              onLeave: function(){
                //$(".smaller_img_area").removeClass("active");
              },
              onLeaveBack: function(){
                $(".smaller_img_area").removeClass("active");
              }
            });

            $(".left_txt_fix_area .txt_con_area .divide_section").each(function(q){
              gsap.to($(".left_txt_fix_area .flow_img_area .divide_section").eq(q), 1, {
                scrollTrigger: {
                  trigger: $(this),
                  start:"top 12.5%",
                  endTrigger: $(".left_txt_fix_area .flow_img_area .divide_section").eq(q),
                  end:"bottom 87.5%",
                  pin: true,
                  //pinSpacing: false,
                  scrub: 1,
                  //markers: true,
                },
              });
            });

            $(".left_txt_fix_area .txt_con_area .divide_section").each(function(r){
              $(".left_txt_fix_area .txt_con_area .divide_section").eq(r).find(".list_w .list").each(function(q){
                gsap.to($(this), 1, {
                  scrollTrigger: {
                    trigger: $(".left_txt_fix_area .flow_img_area .divide_section").eq(r).find(".list").eq(q),
                    start:"top 50%",
                    end:"bottom+=320 87.5%",
                    scrub: 1,
                    //markers: true,
                    onEnter: function(){
                      if( q > 0 ){
                        $(".left_txt_fix_area .txt_con_area .divide_section").eq(r).find(".list_w .list").eq(q-1).removeClass("is_active")
                        $(".left_txt_fix_area .txt_con_area .divide_section").eq(r).find(".list_w .list").eq(q).addClass("is_active");
                        $(".left_txt_fix_area .txt_con_area .divide_section").eq(r).find(".list_w .list").eq(q-1).addClass("is_prev");
                      }else{
                        $(".left_txt_fix_area .txt_con_area .divide_section").eq(r).find(".list_w .list").removeClass("is_active")
                        $(".left_txt_fix_area .txt_con_area .divide_section").eq(r).find(".list_w .list").eq(0).addClass("is_active");
                      }
                    },
                    onLeaveBack: function(){
                      $(".left_txt_fix_area .txt_con_area .divide_section").eq(r).find(".list_w .list").removeClass("is_prev is_active")
                      $(".left_txt_fix_area .txt_con_area .divide_section").eq(r).find(".list_w .list").eq(0).addClass("is_active");
                    }
                  },
                });
              });
            })
          },
          "(max-width : 768px)": function(){
            ScrollTrigger.create({
              animation: esgChangeImg,
              trigger: ".smaller_img_area",
              start: "top 30%",
              end: "bottom+=25% bottom",
              scrub: 1,
              //markers: true,
              onEnter:function(){
                $(".smaller_img_area").addClass("active");
                $(".smaller_img_next").addClass("active");
                setTimeout(function(){
                  scrollMotionTrigger();
                }, 500);
              },
              onEnterBack: function(){
                $(".smaller_img_area").addClass("active");
                $(".smaller_img_next").addClass("active");
              },
              onLeave: function(){
              },
              onLeaveBack: function(){
                $(".smaller_img_area").removeClass("active");
              }
            });
          }
        });
      }
    },
    popupFn: function () {
      // 留곹겕 蹂듭궗 �앹뾽
      $(".link_btn").on("click", function(){
        // var address = confirm('二쇱냼瑜� 蹂듭궗�섏떆寃좎뒿�덇퉴?\n' + window.location.href)
        // if(address){
        //   clip();
          
        // }
        if(!$(this).hasClass("on")){
          $(this).addClass("on");
          $(this).siblings(".link_popup").fadeIn();
        }
      });

      $(".link_popup .btn_close").on("click", function(){
        $(this).parents(".link_popup").fadeOut();
        $(this).parents(".link_popup").siblings(".link_btn").removeClass("on");
      });

      $(".main_popup .btn_close").on("click", function(){
        $(this).parents(".main_popup").fadeOut();
      });
    },
    openPopupFn: function(popName, comebackEl, customFunc){
      var designatedPopup = $(popName) || $("#popName");
      var comebackElement = comebackEl;
      
      gsap.delayedCall(0.1, function () {
        designatedPopup.show();
        designatedPopup.attr("tabindex", 0).focus();
        popupResize();

        //gsap �꾨즺 �� �몄텧�� �⑥닔
        if(customFunc){
          customFunc();
        }
        designatedPopup.find("input[type=text]").eq(0).focus();
        $("body").addClass("stop_scroll");
      });

      designatedPopup.find(".btn_close").on("click", function () {
        designatedPopup.hide();
        comebackElement.attr("tabindex", 0).show().focus();
        $("body").removeClass("stop_scroll");
      });      
    },
  }
})();

$(window).on("load", function(){
  commonScript.deviceChk();
  commonScript.init();
  commonScript.headerFooterFn();
  commonScript.checkLangFn(); // �곷Ц, �뱀닔臾몄옄 �ы븿 泥댄겕
  commonScript.swiperFn();
  commonScript.commonFn();
  commonScript.formChkFn(); // form 愿��� �ㅽ겕由쏀듃
  commonScript.resizeFn();
  commonScript.scrollTriggerFn(); // �ㅽ겕濡� �몃━嫄� 紐⑥뀡
  commonScript.scrollFn();
  commonScript.popupFn();
});

function textareaFn(){
  var str;
  var str_len;
  var rlen;
  var maxCount = 1000; // �쒗븳�� 珥� 湲��� ��
  $(".form_textarea").each(function(){
    $(this).find(".l_byte").text(maxCount);

    $(this).find("textarea").keyup(function(e){
      str = $(this).val();
      str_len = str.length;
      rlen = 0;
  
      for(var i = 0; i < str_len; i++){
        if(rlen <= maxCount){
          rlen = i + 1; // 湲��먯닔
        }
      };
  
      /*if(rlen > maxCount){
        rlen = maxCount;
      }*/
  
      $(this).parents(".form_textarea").find(".r_byte").text(rlen);
  
      if(rlen > maxCount){
        alert("理쒕�" + maxCount + "�먭퉴吏� �낅젰 媛��ν빀�덈떎.");  
  
        $(this).val(str.substr(0, rlen-1));
        $(this).parents(".form_textarea").find(".r_byte").text(rlen);
      }
    });

    $(this).find("textarea").focus(function(){
      $(this).parents(".form_textarea").addClass("focused");
    });

    $(this).find("textarea").blur(function(){
      if(str_len != 0){
        $(this).parents(".form_textarea").removeClass("focused");
        $(this).parents(".form_textarea").addClass("completed");
      }else{
        $(this).parents(".form_textarea").removeClass("focused");
        $(this).parents(".form_textarea").removeClass("completed");
      }

      $(this).trigger('keyup');
    });

    $(this).find("textarea").bind("input paste", function(){
      $(this).trigger('keyup');
    });

    if($(this).find("textarea").prop("disabled") == true){
      $(this).addClass("disabled");
    }
    

    // textarea�� �댁슜�� �덇퀬 �덈줈怨좎묠 �� 寃쎌슦
    if($(this).find("textarea").val() != ""){
      str = $(this).find("textarea").val();
      str_len = str.length;      
      
      $(this).find(".r_byte").text(str_len);
    }
  })
}

function imgResizingFn(){
  var imgNum;
  $(".img_resize_w").each(function(){
    if($(this).find("img").size() >= 2){
      if(window.innerWidth > 768){
        imgNum = 0;
      }else{
        imgNum = 1;
      }
    }else{
      imgNum = 0;
    }
    if($(this).find("img").get(imgNum).naturalWidth / $(this).find("img").get(imgNum).naturalHeight <= $(this).width() / $(this).innerHeight()){
      $(this).addClass("reverse");
    }else{
      $(this).removeClass("reverse");
    }
  });
}

function scrollMotionTrigger(){
  if($(".scroll_motion").size() > 0){
    $(".scroll_motion:visible").each(function(q){
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: "top 75%",
          end:"bottom top",
          toggleClass: {targets: $(".scroll_motion:visible").eq(q), className: "active"},
          once: true,
          //markers: true,
        },
      });
    });
  }
}

function popupResize(){
  $(".layer_popup:visible").find(".pop_wrap, .pop_cont").css("height","");
  $(".layer_popup:visible").find(".pop_wrap").height(Math.ceil($(".layer_popup:visible").find(".pop_cont").height() + $(".layer_popup:visible").find(".pop_head").innerHeight())); // �뚯닔�� 踰꾨┝
  $(".layer_popup:visible").find(".pop_wrap").css({"margin-left": $(".layer_popup:visible").find(".pop_wrap").width()*-0.5, "margin-top": $(".layer_popup:visible").find(".pop_wrap").height()*-0.5}); // 以묒븰�뺣젹
  $(".layer_popup:visible").find(".pop_cont").height($(".layer_popup:visible").find(".pop_wrap").height() - $(".layer_popup:visible").find(".pop_head").innerHeight());
  
  $(".main_popup:visible .swiper-slide").each(function(){
    $(this).find(".link_area").innerHeight($(this).height() - $(this).find(".title").innerHeight())
  });
}

// function clip(){
// 	var url = '';
// 	var dummy = document.createElement("textarea");
// 	document.body.appendChild(dummy);
// 	url = window.document.location.href;
// 	dummy.value = url;
// 	dummy.select();
// 	document.execCommand("copy");
// 	document.body.removeChild(dummy);
// }


function repositioningTopBtn(){
  if($(".btn_top").length) {
    if($(window).scrollTop() > 0){
      $(".btn_top").addClass("view");
    }else{
      $(".btn_top").removeClass("view");
    }
    
    if(window.innerWidth > 768) {
      _pathLength = 175;
      document.getElementById("top_svg_circle").setAttribute("r", 28);
      document.getElementById("top_svg_circle").setAttribute("cx", 29);
      document.getElementById("top_svg_circle").setAttribute("cy", 29);
    } else {
      _pathLength = 145;
      document.getElementById("top_svg_circle").setAttribute("r", 23);
      document.getElementById("top_svg_circle").setAttribute("cx", 24);
      document.getElementById("top_svg_circle").setAttribute("cy", 24);
    }

    var topBtnPositionGap = 0;

    if(window.innerWidth > 1024){
      topBtnPositionGap = 0;
    }else{
      topBtnPositionGap = - 20;
    }

    if($(window).scrollTop() + window.innerHeight + topBtnPositionGap > $("footer").offset().top) {
      $(".btn_top").css("bottom", $(window).scrollTop() + window.innerHeight - $("footer").offset().top + 30 + topBtnPositionGap);
    }else {
      $(".btn_top").css("bottom", 30);
    }

    $(".svg_circle").css("stroke-dasharray", _pathLength + Math.floor(($(window).scrollTop() / ($(document).height() - window.innerHeight)) * _pathLength));
    $(".btn_top .percent").text(Math.floor($(window).scrollTop() / ($(document).height() - window.innerHeight) * 100) + "% �ㅽ겕濡� 吏꾪뻾");
  }
}

function afterAnchor(){
  _anchorPdNum = 60;
      
  $(".anchor_func_area").each(function(){
    $(this).find(".anchor_btn").each(function(q){
      $(this).on("click", function(){
        if(!$(this).hasClass("on")){
          if(q == $(this).parents(".anchor_btn_area").find(".anchor_btn").length - 1){
            setTimeout(function(){
              $(".anchor_btn_area").find(".anchor_btn").removeClass("on");
              $(".anchor_btn_area").find(".anchor_btn").eq(-1).addClass("on");
            },300)
          }else{
            $(this).parents(".anchor_btn_area").find(".anchor_btn").removeClass("on");
            $(this).addClass("on");
          }
        }
        TweenMax.to($("html, body"), 0.5, {scrollTop:$(this).parents(".anchor_func_area").find(".anchor_con").eq(q).offset().top - _anchorPdNum - $("header").height(), ease:Power3.easeOut})
      });
    });
  });

  // �듭빱 �곸뿭 �ㅽ겕濡� �� �대떦�곸뿭�� class 遺숈씠湲�
  /*if($(".anchor_func_area").size() > 0){
    $(".anchor_func_area .anchor_con").each(function(q){
      if($(this).offset().top - _anchorPdNum  - $("header").height() - 1 < _isScrollTop){
        $(".anchor_btn_area .anchor_btn").removeClass("on");
        $(".anchor_btn_area .anchor_btn").eq(q).addClass("on");
      }
    });
  }*/

  // �듭빱 踰꾪듉 fixed
  if($(".anchor_func_area").size() > 0){
    ScrollTrigger.matchMedia({
      "(min-width : 1025px)": function(){
        // 肄붿삤濡� �댁뒪 �곸꽭 �섏씠吏� �몃━嫄�
        gsap.to(".anchor_func_area", {
          scrollTrigger: {
            trigger: ".anchor_func_area .anchor_btn_area",
            //trigger: $(this),
            start:"top-=120 top",
            end:"bottom bottom",
            endTrigger: $(".anchor_con_area"),
            pin:true,
            // markers: true,
            // scrub:1,
          },
        });
      }
    });
  }
}


function getMaxTwoDepHeight(){
  $("header").addClass("initial_time gnb_hover");
  $("header nav .gnb > li .two_pack").css("display","block");

  $("header .gnb > li").each(function(q){
    _headerHeightArr[q] = $("header .gnb > li").eq(q).find(".two_pack").innerHeight();
    _headerMaxHeight = Math.max.apply(Math, _headerHeightArr);
  })

  $("header .gnb > li .two_pack").innerHeight(_headerMaxHeight);
  $("header nav .gnb > li .two_pack").css("display","none");
  $("header").removeClass("gnb_hover");

  setTimeout(function(){
    $("header").removeClass("initial_time");
  }, 10);
}

function mainContentHeight(){
  if($(".main_contents_wrap").size() > 0){
    $(".main_contents_wrap").css("min-height", $(".main_quick_card_list_w").innerHeight());
  }
}


function showBack(focusEle) {	// �붾㈃ 媛곷룄 諛붾�붾븣 湲곗쥌, �ㅽ뙣�� �щ씪�붾뒗吏� �꾨땶吏� 泥댄겕 ��  landscape_screen �몄텧,誘몃끂異� 泥댄겕 
	var agent = navigator.userAgent.toLowerCase();
		
	var mobileArr = new Array("iPhone", "iPod", "Android");
	var mobileNum;
	for(var txt in mobileArr){
		if(navigator.userAgent.match(mobileArr[txt]) != null){
			mobileNum = txt;
			//alert(txt);
			break;
		}
	}

  if(agent.indexOf('nexus 5 build/mra58n') > -1 || agent.indexOf('Windows') > -1){
  }else{
    if(mobileNum > 1){ // ios �� �ㅻⅨ 湲곗쥌 				
      if(window.matchMedia("(orientation: portrait)").matches){
        // �몃줈 紐⑤뱶 (�됱냼 �ъ슜�섎뒗 媛곷룄)
        if(typeof focusEle != "undefined"){// �ㅽ뙣�� �щ씪�붿쓣 ��
          $("body").addClass("landscape_screen");
          $(".landscape_screen").addClass("on");
        }else{
          $("body").removeClass("landscape_screen");
          $(".landscape_screen").removeClass("on");
        }		
        
      }else if(window.matchMedia("(orientation: landscape)").matches){
        // 媛�濡� 紐⑤뱶 (�숈쁺�� 蹂쇰븣 �ъ슜�섎뒗 媛곷룄)
        $("body").addClass("landscape_screen");
        $(".landscape_screen").addClass("on");
      }
    }else{	// ios 
      if(agent.indexOf("version") != -1){
        if(window.matchMedia("(orientation: portrait)").matches){
          // �몃줈 紐⑤뱶 (�됱냼 �ъ슜�섎뒗 媛곷룄)
          $("body").removeClass("landscape_screen");
          $(".landscape_screen").removeClass("on");
        }else if(window.matchMedia("(orientation: landscape)").matches){
          // 媛�濡� 紐⑤뱶 (�숈쁺�� 蹂쇰븣 �ъ슜�섎뒗 媛곷룄)
          $("body").addClass("landscape_screen");
          $(".landscape_screen").addClass("on");
        }
      }else{			
        if(window.matchMedia("(orientation: portrait)").matches){
          // �몃줈 紐⑤뱶 (�됱냼 �ъ슜�섎뒗 媛곷룄)
          $("body").addClass("landscape_screen");
          $(".landscape_screen").addClass("on");
        }else if(window.matchMedia("(orientation: landscape)").matches){
          // 媛�濡� 紐⑤뱶 (�숈쁺�� 蹂쇰븣 �ъ슜�섎뒗 媛곷룄)
          $("body").removeClass("landscape_screen");
          $(".landscape_screen").removeClass("on");
        }
      }
    }
  }
		
	
}

$(window).on("orientationchange", function(event){
  var focusEle = document.activeElement.name;
  $("input:focus, textarea:focus").blur();
  setTimeout(function(){
    showBack(focusEle);
  },280)
});