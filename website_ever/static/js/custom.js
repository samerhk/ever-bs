// $(document).ready(function () {
//
//
//     $('#products').click(function () {
//         console.log("clicked");
//         // location.href = "www.youtube.com.com";
//     });
//     console.log("hello")
// });

 $(document).ready(function () {
    var sum = 0;
    $('#ul01').each(function() {
      sum += parseInt($(this).attr("height"), 10);
    });
    $('#ul01').css({ 'height': 100 +'px' });
  });
