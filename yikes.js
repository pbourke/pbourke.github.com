var phonecatApp = angular.module('yikes', []);

phonecatApp.controller('YikesCtrl', function ($scope) {
    $scope.test = 0;
    $scope.onLine = function() {
        var kvs = $scope.line.split(",");
        headers = new Array();
        rows = new Array();
        for (i = 0; i < kvs.length; i++) {
            s = kvs[i].trim().split("=");
            headers.push(s[0]);
            rows.push(s[1]);
        }
        $scope.headers = headers;
        $scope.rows = rows;
    }
});

$(document).ready(function(){
jQuery.fn.removeAttributes = function() {
  return this.each(function() {
    var attributes = $.map(this.attributes, function(item) {
      return item.name;
    });
    var img = $(this);
    $.each(attributes, function(i, item) {
    img.removeAttr(item);
    });
  });
}

   $("#copy").click(function() {
    contents = $("#container").clone().find("*").andSelf().removeAttributes().html();
    contents = contents.replace(/<!--(.*?)-->/g, "");
        $("#source").val(contents);
   }); 
})
