(function($, window){

    var starBucks = {
          init: function(){
              this.header();
              this.section1();
              this.section2Notice();  //cnt  mainSlide() ... 변수, 함수 충돌
              this.section2Slide();   //cnt  mainSlide() ... 
              this.section3();
              this.section4();
              this.section5();
              this.section6();
              this.section7();
              this.section8();
              this.goTop();
              this.quickMenu();
          },
          header:function(){

              //모바일 버튼 이벤트
              $('.berger-btn').on({
                click: function(){
                    $('#mobileNav').addClass('addMobile');
                    $('.mobile-container').stop().animate({left:0}, 400);
                }
              });


              $('.mobile-close').on({
                click: function(){
                  $('.mobile-container').stop().animate({left:110+'%'}, 400, function(){
                      $('#mobileNav').removeClass('addMobile');
                  });                  
                }
              });

              
              $('.mobile-container li a').on({
                  click: function(){                    
                    $(this).toggleClass('addMobile');
                    $(this).next('div').slideToggle(300);
                    $('.mobile-container li a.none-sub').removeClass('addMobile');
                  }
              });






              //통합검색 버튼 클릭 이벤트
              $('.find-btn').on({
                  click: function(){
                      $('.find-box').toggleClass('addInput');
                  }
              });

              //네비게이션 : 메인메뉴의 마우스 이벤트
              $('.main-btn').on({
                  mouseenter: function(){
                    $('.main-btn').removeClass('addCurrent');
                    $(this).addClass('addCurrent');
                    $('.sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(600,'easeOutExpo');
                  },
                  focusin: function(){
                    $('.main-btn').removeClass('addCurrent');
                    $(this).addClass('addCurrent');
                    $('.sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(600,'easeOutExpo');
                  }
              });

              //네비게이션을 마우스가 떠나면 
              //모두 초기화
              $('#nav').on({
                  mouseleave: function(){
                    $('.main-btn').removeClass('addCurrent');
                    $('.sub').stop().slideUp(600,'easeOutExpo');
                  }
              });



          },
          section1: function(){
             //애니메이션 페이드 인효과
             function ani(){
                $('.img').eq(0).stop().animate({opacity:1},600, function(){
                    $('.img').eq(1).stop().animate({opacity:1},600, function(){
                        $('.img').eq(2).stop().animate({opacity:1},600, function(){
                            $('.img').eq(3).stop().animate({opacity:1},600, function(){
                                $('.img').eq(4).stop().animate({opacity:1},600);
                            });
                        });
                    });
                });
             }
             setTimeout(ani, 600);
             
          },
          section2Notice: function(){
            var cnt = 0;

                // 1. 메인 슬라이드 함수
                function mainSlide(){
                    $('.notice')                   .css({zIndex:1}).stop().animate({top:24},0);
                    $('.notice').eq(cnt==0?4:cnt-1).css({zIndex:2}).stop().animate({top: 0},0);
                    $('.notice').eq(cnt)           .css({zIndex:3}).stop().animate({top:24},0).animate({top:0},1000);
                }

                // 2. 다음 카운트 함수
                function nextCount(){
                    cnt++;  //1 2 3 4 0 1 2 3 4 
                    if(cnt>4){cnt=0}
                    mainSlide();
                }

                // 3. 자동타이머 함수(셋인터발)
                function autoTimer(){
                    setInterval(nextCount, 3000);
                }

                setTimeout(autoTimer, 100);

          },
          section2Slide: function(){
              var cnt = 0;
              var setId = null;
              var winW = $(window).innerWidth()*0.9;    //창너비의 90% 크기
                // 반응형
                
                function resizeFn(){

                    if( $(window).innerWidth()<=819 ){
                      winW = $(window).innerWidth()*0.9;
                    }
                    else{ 
                      winW = 819;
                    }
                    
                    $('.slide').css({width: winW }); //슬라이드 너비
                    //mainSlide(); //실시간으로 메인슬라이드 연동 반응 즉각
                    $('.slide-wrap').stop().animate({left:-winW*cnt}, 0);
                }
                resizeFn();


                $(window).resize(function(){
                    resizeFn();
                });


                //   1. 메인슬라이드함수
                  function mainSlide(){
                     $('.slide-wrap').stop().animate({left:-winW*cnt}, 600, function(){
                         if(cnt>2){cnt=0}
                         if(cnt<0){cnt=2}
                         $('.slide-wrap').stop().animate({left:-winW*cnt}, 0);
                        //  슬라이드 번호별 스타일 적용 addClass
                         $('.slide').removeClass('addCurrent');         //밝아지는 효과 삭제
                         $('.slide').eq(cnt+1).addClass('addCurrent');  //밝아지는 효과 설정
                     });
                     pageEvent();
                  }

                //   2-1. 다음카운트함수
                  function nextCount(){
                    cnt++;
                    mainSlide();
                  }
                //   2-2. 이전카운트함수
                  function prevCount(){
                    cnt--;
                    mainSlide();
                  }

                //   3. 자동타이머함수(셋인터발)
                  function autoTimer(){
                    setId = setInterval(nextCount, 3000);
                  }
                  //autoTimer();
                  //setTimeout(autoTimer,10);
                  // 로딩시 실행 안함. 기본


                // 4. 페이지 이벤트 함수
                //    효과적용 : 동그라미 색상 변경 현재 슬라이드에만 적용
                //    동그라미 이미지 속성 src='' 값을 변경 속성 attribute 어트리뷰트
                //    현재 슬라이드의 페이지버튼 자식요소인 이미지 src='경로/이미지' 속성변경
                  function pageEvent(){
                    // console.log( cnt );
                    $('.page-btn')        .children().attr('src','./images/main_prom_off.png')
                    $('.page-btn').eq(cnt==3?0:cnt).children().attr('src','./images/main_prom_on.png')

                  }

                //  5. 페이지버튼 클릭 이벤트
                //  $('.page-btn').eq(0).on({
                //     click:  function(e){
                //         e.preventDefault();
                //         cnt = 0;
                //         mainSlide();
                //     }
                //  })

                //  $('.page-btn').eq(1).on({
                //     click:  function(e){
                //         e.preventDefault();
                //         cnt = 1;
                //         mainSlide();
                //     }
                //  })

                //  $('.page-btn').eq(2).on({
                //     click:  function(e){
                //         e.preventDefault();
                //         cnt = 2;
                //         mainSlide();
                //     }
                //  })

                 //배열 반복처리
                 $('.page-btn').each(function(idx){
                    $(this).on({
                      click: function(e){
                        e.preventDefault();
                        cnt = idx;
                        mainSlide();
                        stopFn() // 정지
                      }
                    });
                 });

                // 6. 일시정지와 플레이버튼 클릭 이벤트
                //    클래스 활용 hasClass() 메서드 이용 : true  or  false 반환
                  // 클릭하여 선택한 요소에 해당 클래스(on)가 있는지 없는지 검색
                  // true 이면 있다. 
                  // false 이면 없다.

                  function stopFn(){
                    $('.play-btn').children().attr('src','./images/main_prom_play.png');
                    $('.play-btn').removeClass('on'); //삭제
                    // 슬라이드정지
                    clearInterval(setId);
                  }
                  function playFn(){
                    $('.play-btn').children().attr('src','./images/main_prom_stop.png');
                    $('.play-btn').addClass('on');  //꺼짐 클래스 추가
                    // 슬라이드플레이
                    autoTimer();
                  }


                   $('.play-btn').on({
                     click: function(e){
                       e.preventDefault();

                          if( $(this).hasClass('on') ){ //참이면
                          // if( $(this).is('.on') ){ //클래스 아이디 요소
                            stopFn();
                          }
                          else{
                            playFn();
                          }
                     }
                   });

                      //  이 버틑에 on 클래스가 있니? 
                      // var a=1   //숫자  Integer
                      // var b='1' //문자  String
                      // console.log('a===b 결과 논리값 까지 비교 정확하게 비교 : ', a===b ); //false
                      // console.log('a==b  결과 형태만 비교해서 불정확하게 비교 : ',  a==b  ); //true
                  
                      // console.log( $(this).hasClass('on') );
                      // if( $(this).hasClass('on') === true ){ //참이면                          


                   //7-1. 다음화살버튼 클릭 이벤트
                   $('.next-btn').on({
                     click: function(e){
                       e.preventDefault();
                       stopFn(); // 정지
                       nextCount();
                     }
                   });


                   //7-2. 이전화살버튼 클릭 이벤트
                   $('.prev-btn').on({
                    click: function(e){
                      e.preventDefault();
                      stopFn(); // 정지
                      prevCount();
                    }
                  });


                  // 8. 프로모션 버튼 클릭 이벤트
                  // 클릭하면
                  // (슬라이드)#slide 박스가 부드럽게 슬라이드 업
                  $('.promotion-btn').on({
                    click: function(e){
                      e.preventDefault();

                      if( $(this).hasClass('close')  ){ //오픈
                        $('#slide').stop().slideDown(600);
                        $(this).removeClass('close');
                        playFn();
                      }
                      else{ //닫기 close
                        $('#slide').stop().slideUp(600);
                        $(this).addClass('close');
                        //정지
                        stopFn();
                        cnt=0;
                        // $('.slide-wrap').stop().animate({left:-819*cnt}, 0);
                        mainSlide(); //처음으로 초기화
                      }
                      
                    }
                  });


                  // 슬라이드 랩 박스 위에 마우스 올라가면 슬라이드 정지
                  $('.slide-wrap').on({
                    mouseenter: function(e){
                      e.preventDefault();
                      stopFn();
                    },
                    mouseleave: function(e){
                      e.preventDefault();
                      playFn();
                    }
                  });

                  //슬라이드 콘테이너 박스 위에 마우스 떠나면 슬라이드 재실행




          },
          section3: function(){

          },
          section4: function(){

              //윈도우 스크롤이벤트 : 페럴럭스 애니메이션 효과
              $(window).scroll(function(){

                  if( $(window).scrollTop() == 0 ){
                    $('#section4').removeClass('addAni');
                  }

                  if( $(window).scrollTop() > 500 ){
                      $('#section4').addClass('addAni');
                  }

              });


          },
          section5: function(){
              var sec3Top = $('#section3').offset().top-200;

                  $(window).scroll(function(){

                      if( $(window).scrollTop() == 0 ){
                        $('#section5').removeClass('addFadein');
                      }

                      if( $(window).scrollTop() >= sec3Top ){
                        $('#section5').addClass('addFadein');
                      }
                  });

          },
          section6: function(){
              var sec4Top = $('#section4').offset().top;

                  $(window).scroll(function(){

                      if( $(window).scrollTop() == 0 ){
                          $('#section6').removeClass('addAni')
                      }
                      
                      if( $(window).scrollTop() >= sec4Top ){
                          $('#section6').addClass('addAni')
                      }

                  });
          },
          section7: function(){
            var sec6Top = $('#section6').offset().top-200;

                $(window).scroll(function(){

                    if( $(window).scrollTop() == 0 ){
                        $('#section7').removeClass('addFade')
                    }
                    
                    if( $(window).scrollTop() >= sec6Top ){
                        $('#section7').addClass('addFade')
                    }

                });
          },
          section8: function(){
            var sec6Top = $('#section6').offset().top+200;

                $(window).scroll(function(){
                    if( $(window).scrollTop() == 0 ){
                        $('#section8').removeClass('addAni')
                    }
                    if( $(window).scrollTop() >= sec6Top ){
                        $('#section8').addClass('addAni')
                    }
                });

                //반응형
                var leftW=null;
                var leftH=null;

                function leftResize(){

                  // 자체너비는 문제가 있음
                  // 이유는 안에 들어있는 이미지 작은이미지가 우측 으로 빠진것 때문에 크기 문제
                  // 그래서 
                  // 창너비가 960이하이면 
                  // left박스의 너비 = 창너비*(이미지너비 비율) 0.38125
                  // left박스의 높이 = left박스의 너비*높이 비율 0.85246

                  let winW = $(window).innerWidth();          
                  if( winW <= 960 ){    // 창너비가 
                    leftW = winW * 0.38125;                 
                    leftH = leftW * 0.85246; //높이 = 너비*비율(85.246%)
                  }
                  else{
                    leftW = 366;
                    leftH = 312;
                  }
                  $('#section8 .left').css({ width:leftW, height:leftH });

                }
                leftResize();

                $(window).resize(function(){
                  leftResize();
                });


          },         
          goTop: function(){
            
            $('.go-top').stop().fadeOut(1000);

            $(window).scroll(function(){
                if( $(window).scrollTop() >=100 ){
                    $('.go-top').stop().fadeIn(1000);
                }
                else{
                    $('.go-top').stop().fadeOut(1000);
                }
            });


            $('.go-top-btn').on({
              click: function(){
                $('html, body').stop().animate({scrollTop: 0 }, 600);
              }
            });

          },
          quickMenu: function(){
              // var quicTop = (창높이에서 - 퀵메뉴박스높이)/2;
              var quicTop1 = ($(window).height() - 96)/2;
              var quicTop2 = 150;
                  
                  function quickMenuFn(){
                    $('.quick-menu').stop().animate({top: $(window).scrollTop() + quicTop2 }, 300, "easeOutExpo");
                  }                               
              
                  quickMenuFn(); //로딩시

              $(window).scroll(function(){
                  quickMenuFn();
              });
          }
    }  
    
    starBucks.init();  //스타벅스 객체 init() 메서드 실행


})(jQuery, window);