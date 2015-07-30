function cambiar(esto)
{
	alert("Error");

	vista=document.getElementById(esto).style.display;
	if (vista=='none')
		vista='block';
	else
		vista='none';



	document.getElementById(esto).style.display = vista;

}
nombre.focus();
