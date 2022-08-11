$("#choice").hide();
$("#choice1").hide();
function valueChanged()
    {
        if($('.coupon_question').is(":checked"))   {
            $("#choice").show();
        }
        else if($('.coupon_question1').is(":checked")){
            $("#choice1").show();
        }
        else{
            $("#choice").hide();
            $("#choice1").hide();
        }
    }
    function add(){
        var new_chq_no = parseInt($('#total_chq').val())+1;
        var new_input="<input type='text' id='new_"+new_chq_no+"'>";
        $('#new_chq').append(new_input);
        $('#total_chq').val(new_chq_no);
      }
      function remove(){
        var last_chq_no = $('#total_chq').val();
        if(last_chq_no>1){
          $('#new_'+last_chq_no).remove();
          $('#total_chq').val(last_chq_no-1);
        }
      }
      $(".coupon_question")
     
      function duplicate(){
      if($('.coupon_question').is(":checked"))   
      $(document).ready(function(){
        $("#newques").click(function(){
          var m=1;
         var see= $("<input/>").attr('id','new'+m);
         var see2= $("<input/>").attr('id','new12');
         var see3= $("<input/>").attr('id','new13');
         var see4= $("<input/>").attr('id','new14');
          
         var but1= $("<button/>").attr('id','butt11');
         but1.append("Add");
         but1.attr('onclick','add()');
         var but2= $("<button/>").attr('id','butt12');
         but2.append("Remove");
         but2.attr('onclick','remove');


          $("<div/>").attr('id','new1').appendTo("div1");
          $("#new1").append("<p>Write Your Question Here</p>");
          $("#new1").append(see);
          $("#new1").append("<br/>");
          $("#new1").append("<br/>");

          $("#new1").append(see2);
          $("#new1").append("<br/>");
          $("#new1").append("<br/>");
          $("#new1").append(see3);
          $("#new1").append("<br/>");
          $("#new1").append("<br/>");
          $("#new1").append(see4);
          $("#new1").append("<br/>");
          $("#new1").append(but1);
          $("#new1").append("<br/>");
          $("#new1").append("<br/>");
          $("#new1").append(but2);
          m++;
          
        });
      });
    
    else
    alert('Please chose first');
}
    
   


      $(".coupon_question")


// const ul1 = document.querySelector('.option1');
// const ul2 = document.querySelector('.option2');
// const ul3 = document.querySelector('.option3');
// const opt = document.querySelector('.opt1');
// const opt2 = document.querySelector('.opt2');

// const q1 = document.querySelector('.question1');
// const q2 = document.querySelector('.question2');
// const q3 = document.querySelector('.question3');
// const choice = document.querySelector('.choice');
// const choice2 = document.querySelector('.choice2');
// const ans = document.querySelector('.ans');

// const survey = document.querySelector('.survey');
// const submit = document.querySelector('.submit');
// const end = document.querySelector('.end');

// opt.addEventListener('click', function(){
//     choice.style.display = 'none';
//     q1.style.display = 'block';
//     if ( choice)
//     {
//         choice2.style.display = 'none';
//     }
// }
// );
// // First question
// ul1.addEventListener('click', function()  {
//     q1.style.display ="none";
//     q2.style.display = 'block';
   
// }
// );
// //second question
// ul2.addEventListener('click', function()  {
//     q2.style.display = 'none';
//     q3.style.display = 'block';
   
// }
// );

// // third question
// ul3.addEventListener('click', function() {
//     q3.style.display = 'none';
//     survey.style.display = 'none';
//     end.style.display = 'block';
   
// }
// );


// opt2.addEventListener('click', function(){
//     choice2.style.display = 'none';
//     ans.style.display = 'block';
//     if ( choice2)
//     {
//         choice.style.display = 'none';
//     }
    
// }
// );

// //create date picker
// const date = document.getElementById('start').value = new Date().toDateInputValue();



