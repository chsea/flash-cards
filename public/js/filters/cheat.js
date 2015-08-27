app.filter('cheat', function(){
	return function(ansArr){
		return ansArr.filter(function(e){
			return e.correct;
		})
	}
})