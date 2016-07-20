(function(){
    angular.module('MonsterBan')
    .component('storyBoard', {
        templateUrl: 'templates/storyBoard.html',
        controller: storyBoardController,
        controllerAs: 'sb',
     
       
    });
    storyBoardController.$inject = [];
    function storyBoardController(){
        var sb = this;
        sb.lists = [
            'To Do',
            'In Work',
            'Done'
        ];
        sb.deleteList = function(list){
            sb.lists = sb.lists.filter(function (item){
                return item !== list;
            });
        }
    }

}());