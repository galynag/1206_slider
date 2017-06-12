// $(document).ready(function() {
//     var counter=0;
//     var i=0;
//     $('#box').on('wheel',function slider(e) {
//         $('#box div').css('height', e.view.innerHeight + 'px');
//         console.log(e.originalEvent.deltaY);
//         if (i > 0)  {
//
//         if (e.originalEvent.deltaY < 0) {
//
//             if (counter < e.view.innerHeight) {
//                 counter = counter + 10;
//                 $('#box div').eq(i).css('top', counter + 'px');
//                 i--;
//
//             } else {
//                 counter = 0;
//             }
//             if (counter > -e.view.innerHeight) {
//                 counter = counter - 10;
//                 $('#box div').eq(i).css('top', counter + 'px');
//
//             } else {
//                 counter = 0;
//             }
//         }
//
//                 else {
//                     return false;}
//             }
//
//
//         else {
//
//
//                 if (i < $('#box div').length - 2) {
//                     i++;
//                 } else {
//                     return false;
//                 }
//             }
//         }
//
//     });
//
// });

$(document).ready(function() {
    var counter=0;
    var i=0;
    $('#box').on('wheel',function slider(e) {
        console.log(e.originalEvent.deltaY);
        if (e.originalEvent.deltaY < 0) {
            $('#box div').css('height',e.view.innerHeight+'px');
            if (counter < e.view.innerHeight) {
                counter =counter +10;
                $('#box div').eq(i).css('top',counter+'px');

            } else {
                counter=0;
                if (i > 0)  {
                    i--;
                } else {
                    return false;}
            }
        }
        else {
            $('#box div').css('height', e.view.innerHeight + 'px');
            if (counter > -e.view.innerHeight) {
                counter = counter - 10;
                $('#box div').eq(i).css('top', counter + 'px');

            } else {
                counter = 0;
                if (i < $('#box div').length - 2) {
                    i++;
                } else {
                    return false;
                }
            }
        }

    });

});

