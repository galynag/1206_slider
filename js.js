$(document).ready(function() {
    var counter=0;
    var i=0;
    $('#box').on('wheel',function slider(e) {
        $('#box div').css('height', e.view.innerHeight + 'px');
        console.log(e.originalEvent.deltaY);
        //content down
        if (e.originalEvent.deltaY < 0) {
            if (i > 0 && i < $('#box div').length - 1)  {
                if (counter < 0) {
                    counter = counter + 10;
                    $('#box div').eq(i).css('top', counter + 'px');
                } else {
                    i--;
                    counter=-e.view.innerHeight + 10;
                    $('#box div').eq(i).css('top', counter + 'px');
                }
            }
            else if (i == $('#box div').length - 1)  {
                counter = -e.view.innerHeight + 10;
                $('#box div').eq(i-1).css('top', counter + 'px');
                i = $('#box div').length - 2;
            }
               else {
                if (counter < 0) {
                    counter = counter + 10;
                    $('#box div').eq(i).css('top', counter + 'px');
                } else {
                    return false;
                }
            }
            //content up
        } else {
                if (i < $('#box div').length - 1) {
                    if (counter > -e.view.innerHeight) {
                        counter = counter - 10;
                        $('#box div').eq(i).css('top', counter + 'px');
                    } else {
                        counter = 0;
                        i++;
                    }
                } else {
                    return false;
                }
            }
    });
});

// $(document).ready(function() {
//     var counter=0;
//     var i=0;
//     $('#box').on('wheel',function slider(e) {
//         console.log(e.originalEvent.deltaY);
//         if (e.originalEvent.deltaY < 0) {
//             $('#box div').css('height',e.view.innerHeight+'px');
//             if (counter < e.view.innerHeight) {
//                 counter =counter +10;
//                 $('#box div').eq(i).css('top',counter+'px');
//
//             } else {
//                 counter=0;
//                 if (i > 0)  {
//                     i--;
//                 } else {
//                     return false;}
//             }
//         }
//         else {
//             $('#box div').css('height', e.view.innerHeight + 'px');
//             if (counter > -e.view.innerHeight) {
//                 counter = counter - 10;
//                 $('#box div').eq(i).css('top', counter + 'px');
//
//             } else {
//                 counter = 0;
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

