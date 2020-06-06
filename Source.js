// Задача:
//      Разработать UI, получить и обработать данные с сервера и передать данные в UI.
// $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available

var func = function () {
    fetch('https://api.kanye.rest', { mode: 'cors' })
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            // Если хотим установить новое значение виджета, то свойство text,
            // Если видимость, то visible и т.д.
            // Полный список свойств можно найти в Vuforia Studio или в доках.
            $scope.view.wdg['WidgetName']['text'] = json['quote'];
        })
        .catch(function (error) {
            console.log('Request failed', error)
        });
}


var timer = function () {
    func();
    $timeout(timer, 1000);
}

$timeout(timer, 1000);