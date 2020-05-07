$(document).on('click', 'nav div span', function()
{
    var nombre = document.getElementById('menu');
    
	if (nombre.className === 'menu')
	{
		$('ul').removeClass();
		$('ul').addClass('active');
	} else {
		$('ul').removeClass();
		$('ul').addClass('menu');
	}
})