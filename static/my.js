    function Toggle(view, icon1) {
        var portf1 = document.getElementById('portf');
        var icon1 = document.getElementById('cont1');
        var icon2 = document.getElementById('cont2');
        var icon3 = document.getElementById('cont3');
        if (icon1.style.display == "none" && icon2.style.display == "none" && icon3.style.display == "none") {
          // view.style.display = "revert"
          icon1.style.display = "revert"
          icon2.style.display = "revert"
          icon3.style.display = "revert"
          portf1.style.color = "green"
          document.getElementById('btn1').innerHTML = "Deactivate"
          // deac.style.color = "white";
  
        }
  
        else {
          // view.style.display = "none"
          icon1.style.display = "none"
          icon2.style.display = "none"
          icon3.style.display = "none"
          portf1.style.color = "red"
          document.getElementById('btn1').innerHTML = "Activate"
  
        }
      }


    
      var counter = 1;
      setInterval(function () {
          document.getElementById('radio' + counter).checked = true;
          counter++;
          if (counter > 3) {
            counter = 1;
          }
      }, 5000);
      
  
    
        // Animation on vertical nav bar liness   
  
      // var icon1 = document.getElementById('cont1');
      // var abticon = document.getElementById('abt');
      // var meicon = document.getElementById('me');
      // var vlscolor = document.getElementById('vl1');
      // icon1.addEventListener('mouseover', function run() {
      //   icon1.style.left = "94vw";
      //   icon1.style.width = "55px";
      //   abticon.style.display = "revert";
      //   meicon.style.display = "revert";
      //   vlscolor.style.borderLeft = "6px solid cyan"
      // })
      // icon1.addEventListener('mouseout', function run() {
      //   icon1.style.left = "99vw";
      //   icon1.style.width = "6px";
      //   abticon.style.display = "none";
      //   meicon.style.display = "none";
      //   vlscolor.style.borderLeft = "6px solid green"
      // })
  
      // var icon2 = document.getElementById('cont2');
      // var myicon = document.getElementById('my');
      // var projicon = document.getElementById('proj');
      // var vlscolor2 = document.getElementById('vl2');
      // icon2.addEventListener('mouseover', function run() {
      //   icon2.style.left = "88vw";
      //   icon2.style.width = "177px";
      //   myicon.style.display = "revert";
      //   projicon.style.display = "revert";
      //   vlscolor2.style.borderLeft = "6px solid cyan"
  
      // })
      // icon2.addEventListener('mouseout', function run() {
      //   icon2.style.left = "99vw";
      //   icon2.style.width = "6px";
      //   myicon.style.display = "none";
      //   projicon.style.display = "none";
      //   vlscolor2.style.borderLeft = "6px solid green"
      // })
  
  
  
  
      // var icon3 = document.getElementById('cont3');
      // var workicon = document.getElementById('work');
      // var skillicon = document.getElementById('skill');
      // var vlscolor3 = document.getElementById('vl3');
      // icon3.addEventListener('mouseover', function run() {
      //   icon3.style.left = "91.5vw";
      //   icon3.style.width = "110px";
      //   workicon.style.display = "revert";
      //   skillicon.style.display = "revert";
      //   vlscolor3.style.borderLeft = "6px solid cyan"
  
      // })
      // icon3.addEventListener('mouseout', function run() {
      //   icon3.style.left = "99vw";
      //   icon3.style.width = "6px";
      //   workicon.style.display = "none";
      //   skillicon.style.display = "none";
      //   vlscolor3.style.borderLeft = "6px solid green"
      // })
  
  
  
  
  
  
  
      // Animating scroll bar     
  
      window.onscroll = function () {
        let progress1 = document.getElementById('progressbar');
        let totalHeight = document.body.scrollHeight + window.innerHeight;
        let progressHeight = (window.pageYOffset / totalHeight) * 28.1;
        progress1.style.display = 'revert';
        progress1.style.height = progressHeight + "%";
        let flowBar1 = document.getElementById('htBar');
        let flowBar2 = document.getElementById('csBar');
        let flowBar3 = document.getElementById('jsBar');
        let flowBar4 = document.getElementById('nodeBar');
        let flowBar5 = document.getElementById('expressBar');
        let flowBar6 = document.getElementById('mongodbBar');
        // let progl1   = document.getElementsByClassName('progress-line1a');
        if (progressHeight > 77) {
  
          flowBar1.style.animationName = 'animateskillbar11';
          flowBar2.style.animationName = 'animateskillbar22';
          flowBar3.style.animationName = 'animateskillbar33';
          flowBar4.style.animationName = 'animateskillbar44';
          flowBar5.style.animationName = 'animateskillbar55';
          flowBar6.style.animationName = 'animateskillbar66';
          // progl1.classList.add('progress-line1a');
        }
        else {
          flowBar1.style.animationName = 'animateskillbar1';
          flowBar2.style.animationName = 'animateskillbar2';
          flowBar3.style.animationName = 'animateskillbar3';
          flowBar4.style.animationName = 'animateskillbar4';
          flowBar5.style.animationName = 'animateskillbar5';
          flowBar6.style.animationName = 'animateskillbar6';
          // progl1.classList.add('progress-line1');
        }
        // animateskbar.style.display = 'revert';
  
  
  
  
  
      }
  
  
  
  
      function showdetails1() {
        let showing1 = document.getElementById('detailscard1');
        // let card1 = document.getElementById("projbox1");
  
        showing1.style.display = 'revert';
        // card1.style.display = 'hidden';
      }
      function closeit1() {
        let showing1 = document.getElementById('detailscard1');
        showing1.style.display = 'none'
  
      }
  
  
  
      function showdetails2() {
        let showing2 = document.getElementById('detailscard2');
        // let card2 = document.getElementById("projbox2");
  
        showing2.style.display = 'revert';
        // card1.style.display = 'hidden';
      }
      function closeit2() {
        let showing2 = document.getElementById('detailscard2');
        showing2.style.display = 'none'
  
      }
  
  
  
      function showdetails3() {
        let showing3 = document.getElementById('detailscard3');
        // let card1 = document.getElementById("projbox1");
  
        showing3.style.display = 'revert';
        // card1.style.display = 'hidden';
      }
      function closeit3() {
        let showing3 = document.getElementById('detailscard3');
        showing3.style.display = 'none'
  
      }
  
  
  
      function showdetails4() {
        let showing4 = document.getElementById('detailscard4');
        // let card1 = document.getElementById("projbox1");
  
        showing4.style.display = 'revert';
        // card1.style.display = 'hidden';
      }
      function closeit4() {
        let showing4 = document.getElementById('detailscard4');
        showing4.style.display = 'none'
  
      }


    // (type='text/javascript')
    



    //   AOS.init({
    //     duration: 1500
  
    //   });
      
  
      // Activate and deactivate sidebar 
  
      // function Toggle() {
      //   let contdis1 = document.getElementById('cont1');
      //   if (view.style.display == "none") {
      //     view.style.display = "revert";
      //     document.getElementById('btn1').innerHTML = "Deactivate";
      //     // deac.style.color = "white";
  
      //   }
  
      //   else {
      //     view.style.display = "none";
      //     document.getElementById('btn1').innerHTML = "Activate";
  
      //   }
      // }
  