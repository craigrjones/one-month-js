/* 1.  Search   */








/* 2.  Query SoundCloud API */


var SoundCloudAPI = {};

SoundCloudAPI.initialize = function () {

 SC.initialize({
        client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
});

}

SoundCloudAPI.init();

SoundCloud.getTrack = function (inputValue) {

// find all sounds of buskers licensed under 'creative commons share alike'

SC.get('/tracks', {
  q: inputValue, 
}).then(function(tracks) {
  console.log(tracks);
});

}

SoundCloudAPI.getTrack("Rilo Kiley");

SoundCloudAPI.renderTracks = function () {

	var card = document.createElement ('div');
	card.classList.add("card");

	var searchResults = document.querySelector (".js-search-results");
	searchResults.appendChild(card);
}

SoundCloudAPI.renderTracks();









/* 3.  Show the cards */








/* 4.  Add to playlist and play */



