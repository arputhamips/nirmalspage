let image = document.querySelectorAll('.popup');   //give class popup to enable popup (to image element only)
let card = document.getElementById('toggle');      //Display Popup Card Selector
let topic = document.getElementById('info-topic'); //Display Title Selector
let desc = document.getElementById('info-desc');   //Display Description Selector
let grid = document.getElementById('listen');      //Grid container fot running event listener
let linkBtn = document.getElementById('yt-btn');
let a = document.getElementById('link');


//ADD INFO HERE: 
//['id'] as key for title
//['id'+'info'] as key for description
var temp = 
{"date":'DATE REVEAL',              "dateinfo":'put description here for k!23',                        "datelink":'https://youtu.be/gZjQROMAh_s?si=-XEoDMtWsTC6wrOJ',
"diwali":'DIWALI 2023',             "diwaliinfo":'One of the better posters of the year',
"casette":'CEG CASSETTES PODCAST',  "casetteinfo":'Made a promotional poster for the official podcast of the Forum'                                                                 }





//POPUP OPEN LOGIC
const popUp = e => {
    let title = e.target.id;                      //gets id of element as [key] for Display Title
    let info = e.target.id +'info';               //get id+info as [key] for Display Description
    let link = e.target.id +'link'

    if(temp[title] != undefined){                //checks if key:value pair exists, stops if entry doesnt exist:so that undefined popup doesn't show up         
        if (e.target.nodeName == 'IMG'){         //checks if clicked element is an image, else every click in gallery container opens popup
            card.style.display = 'block';
            if (temp[link] != undefined) {       //checks if link to post exists
                linkBtn.style.display = 'block'; //if exists turns on the button
                a.target = '_blank';             //sets link to open in new tab
                a.href = temp[link];             //
            } else {
                linkBtn.style.display = 'none';
            }
        }
            document.body.style.overflow = 'hidden';
            document.querySelector('.gallery').style.filter = 'brightness(.5)';
            topic.innerHTML = temp[title];       //Updates Title
            desc.innerHTML = temp[info];         //Updates Description

    }
}  

//POPUP OPEN LOGIC ENDS


//EVENTLISTENER FOR THE GRID[POPUP OPEN]
grid.addEventListener('click',popUp); 



//POPUP CLOSE LISTENER AND LOGIC
let closeBtn = document.getElementById('close-btn');
closeBtn.addEventListener('click',() => {
    card.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.querySelector('.gallery').style.filter = 'brightness(1)';
})