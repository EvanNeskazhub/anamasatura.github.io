$(document).ready(function() {

//запуск функции при прокрутке

$(".main").on("scroll", scrolling);

function scrolling(){

	//считывание текущей высоты контейнера
	var currentHeight = $(this).children(".row").height();
	//проверка достежения конца прокрутки
	if($(this).scrollTop() >= (currentHeight - $(this).height()-100)){
	/*отключение вызова функции прокрутки
	во избежание неоднократного вызова функции */
	$(this).unbind("scroll");
	//функция реализующая следующие два этапа
	loader();}};

});