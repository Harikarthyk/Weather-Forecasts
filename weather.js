$(document).ready(function(){
	// alert("h") ;
	$('.inputValue').on('keyup',function(event){
		if( event.keyCode===13 ){
			var city = $('.inputValue').val();
			$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid={YOUR_API-ID}",function(data){
				console.log(data) ;
				var name = data.name+","+data.sys.country ;
				var degree = Math.round(data.main.temp); 
				var description = data.weather[0].description ;
				var icon = "http://openweathermap.org/img/w/"+data.weather[0].icon+".png" ;
				$('.city').text(name) ;
				$('.degree').text(degree+"'C") ;
				$('.icon').attr("src",icon) ;
				$('.description').text(description) ;
				$('.metric').show();
			});
			$(this).val('') ;
		}
	});
});
