var stor = localStorage;

console.log(localStorage.key(0));

function createGrid(){
		$(document).ready(function() {
			var par = '<ul class="features">' + createCard() + createCard() + createCard() + createCard() + '</ul>';
			$('body').append(par);
		});
	}
	function createCard(){
			
			return "<li class='icon fa-paper-plane-o'><h3>Arcu accumsan</h3>\
<p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean\ ligula consequat consequat.</p></li>";
			
		
		
	}
