/* --------------------------------------------------
    * video button
    * --------------------------------------------------*/
var videoButton = function($scope, $){
    $scope.find('.xp-video-button').each( function(){
            $(this).lightGallery({
            selector: '.btn-play',
        });
    });
}