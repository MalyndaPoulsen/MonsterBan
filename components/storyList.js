(function(){
    angular.module('MonsterBan')
    .component('storyList', {
        templateUrl: 'templates/storyList.html',
        controller: storyListController,
        controllerAs: 'sl',
        bindings: {
            list:'<'
        },
        require: {
            board: '^storyBoard'
        }
    });
    function storyListController(){
        var sl = this;
       sl.$onInit = function(){
           console.log('lists: ', sl.board.lists);
       };
        sl.delete = function(){
            sl.board.deleteList(sl.list);
        }
    }
}());