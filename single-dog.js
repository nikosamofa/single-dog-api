
'use strict';


//this function fetches three dog photos when called 
function watchForm() {
    $('.js-dog-form').submit(event => {
        event.preventDefault();
        //this is the user input
        let submissions = $('.breed-of-dogs').val();
        submissions = submissions.toLowerCase();
        //this make the image section visible        
        getTheDog(submissions)
    });
};

//This function calls the endpoint url and fetches the image from the API
function getTheDog(submissions) {
    fetch(`https://dog.ceo/api/breed/${submissions}/images/random`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error(response.statusText);
        })
        .then(getDog => displayResults(getDog))
        .catch(error => alert('Sorry! Breed not found, please try again later.'));
};


//This function displays the image to the DOM
function displayResults(getDog) {

    $('.dog-images-results').html(`<img src="${getDog.message}" alt="picutre of a Dog" class="dogimages">`);

    $('.hidden-div').removeAttr('hidden')
};


function all(){
    $(watchForm);
}

$(all)