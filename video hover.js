var $guitarvid = $('.guitarvid');

$guitarvid.on('click', function() {     //click on video makes it play
  $guitarvid.get(0).play();
});

$guitarvid.on('mouseleave', function() {      //when mouse leaves video video is paused.
  $guitarvid.get(0).pause();
});


var $guitarvid2 = $('.guitarvid2');

$guitarvid2.on('click', function() {      // same as above
  $guitarvid2.get(0).play();
});

$guitarvid2.on('mouseleave', function() {
  $guitarvid2.get(0).pause();
});

/* i created two of these.... on for each video, so that they aren't linked. Otherwise clicking on one video can affect the other*/