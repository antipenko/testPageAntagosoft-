$(document).foundation();

var $newComment = $('#comment'),
	$commentText = $('#text'),
	$commentBtn = $('#comment-btn')
	$commentList =$('#comment-list');

var	$userName = "Скрытый пользователь ";
	$commentName = "<span class='ts-comment__name'>"+$userName+"</span>";
	$currentDate = new Date();

var optionsDate = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};
$commentDate = "<time class='ts-comment__date' datetime='"+$currentDate.toLocaleString("ru", optionsDate)+"'>"+ $currentDate.toLocaleString("ru", optionsDate)+ "</time>";
$comentInfo = "<p class='ts-comment-info'>" + $commentName +" "+ $commentDate +"</p>";

var send = function() {
     var text = $commentText.val();
	$commentText.removeClass('error');
	if (text) {
		$commentValue = "<p class='ts-comment__text'>"+text+"</p>"
		$commentList.append($comentInfo).append($commentValue);
		$commentText.val('');
	} else $commentText.addClass('error');
}

$commentBtn.click(function(){
	send();
})

// send comment keyboard
var isCtrl = false;
$(document).keyup(function (e) {
 
	if(e.which == 17) isCtrl=false;
}).keydown(function (e) {
	if(e.which == 17) isCtrl=true;
	if(e.which == 13 && isCtrl == true) {
 		send();
	}
 
});


$('.button-reviews').click(function() {
	$('.button-reviews').toggleClass("button-reviews_active");
})

$newComment.click(function(){
	$commentText.focus();
})

