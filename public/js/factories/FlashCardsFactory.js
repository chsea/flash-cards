app.factory('FlashCardsFactory', function ($http) {
    return {
        getFlashCards: function(cat){
            var qParams = cat ? {category: cat} : {};
            return $http.get('/cards', {params: qParams}).
                then(function(response){
                    return response.data;
                });
         }
     };
});