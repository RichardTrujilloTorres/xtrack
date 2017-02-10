angular.module('myApp', ['algoliasearch', 'algolia.autocomplete'])
  .controller('yourController', ['$scope', 'algolia', function($scope, algolia) {
    var client = algoliasearch("TIF4HGI5L9", "c72729aae4ac818abbbf5f8e4caa09bc");
    var index = client.initIndex('YourIndex');
    $scope.getDatasets = function() {
      return {
        source: algolia.sources.hits(index, { hitsPerPage: 5 }),
        //value to be displayed in input control after user's suggestion selection
        displayKey: 'name',
        //hash of templates used when rendering dataset
        templates: {
          //'suggestion' templating function used to render a single suggestion
          suggestion: function(suggestion) {
              return '<span>' +
                  suggestion._highlightResult.name.value + '</span><span>' +
                  suggestion._highlightResult.team.value + '</span>';
          }
        }
      };
    };
  }]);