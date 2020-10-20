
'use strict';


//this function fetches three dog photos when called 
function watchForm() {
    $('.js-dog-form').submit(event => {
        event.preventDefault();
        //this is the user input
        let submissions = $('.breed-of-dogs').val();
        submissions= submissions.toLowerCase();
        //this make the image section visible        
        getTheDog(submissions)
    });
};

function getTheDog(submissions) {
    const url = `https://dog.ceo/api/breed/${submissions}/images/random`;
    fetch(url)
    
        .then(response => {
            if (response.ok)
            return response.json()
            throw Error()
        })
        .then(getDog => displayResults(getDog))
        .catch(error => alert('Sorry! Breed not found, please try again later.'));
};


function displayResults(getDog) {
    $(".dog-images").html("");

    $('.dog-images').append(`<input type="image" src="${getDog.message}" alt="picutre of a Dog" class="dogimages"/>`);
    
    $('.hidden-div').removeAttr('hidden')
};


function all() {
    console.log("The page has loaded")
    watchForm();
    
};

$(all);