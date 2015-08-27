
app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {

	$scope.categories = [
		'MongoDB',
    	'Express',
    	'Angular',
    	'Node',
    	'Reset'
	];

	$scope.activeCat = null;

	$scope.getCategoryCards = function(category){
		if(category === 'Reset') category = null;
		$scope.activeCat = category;
		FlashCardsFactory.getFlashCards(category).then(function(catCards){
			$scope.flashCards = catCards;
		})
	}

	FlashCardsFactory.getFlashCards().then(function(cards){
		$scope.flashCards = cards;
	});

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			if(answer.correct) ScoreFactory.correct++;
			else ScoreFactory.incorrect++;
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
		}
	}
});