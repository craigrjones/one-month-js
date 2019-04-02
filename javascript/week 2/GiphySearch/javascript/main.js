  /*  1. Get the user input */
    document.querySelector(".js-go").addEventListener('click',function(){
        var input = document.querySelector("input").value;
        getTheData(input);
    });

    document.querySelector(".js-userinput").addEventListener('keyup',function(e){
        var input = document.querySelector("input").value;

        // If the Enter key is pressed...
        if(e.which === 13) {
            getTheData(input);
        }
    });

    /*  2. do the data stuff with the API */
    function getTheData(input) {

        var url = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=N9vFP4M57pDOdMPgPfOFU49mlQsdrn7p";

        //AJAX Request
        var GiphyAJAXCall = new XMLHttpRequest();
        GiphyAJAXCall.open( 'GET', url );
        GiphyAJAXCall.send();

        GiphyAJAXCall.addEventListener('load', function(e){
            var data = e.target.response;
            pushToDOM(data);
        });
    }

    /*  3. Show me the GIFs */
    function pushToDOM(data) {

        var container = document.querySelector(".js-container");
        var response = JSON.parse(data);

        container.innerHTML = "";

        var imageUrls = response.data;

        imageUrls.forEach(function(image){
            var src = image.images.fixed_height.url;
            container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
        });
    }