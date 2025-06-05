import star_fill from '../assets/star_fill.svg'
import star_no_fill from '../assets/star_no_fill.svg'
import handleClickRatingPopup from '../event_handlers/handleClickRatingPopup'
import { useEffect, useRef } from 'react'
import "../css/MoviePage.css";
import { useState } from 'react';
import RateMovie from '../api/aspnet/RateMovie';
function RatingPopup({ movie, rating, setRating }) {
    const ratingContainer = useRef(null)
    const starContainer = useRef(null)
    const [selectedRating, setSelectedRating] = useState(null);
    useEffect(() => {
        if (!ratingContainer.hasListeners) {
            console.log(starContainer.current.children)
        }
        fillStars(rating);
        ratingContainer.current.style.visibility = "hidden";
    }, [])

    const debounceTimer = useRef(null)
    function handleMouseOver() {
        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current)
        }
        debounceTimer.current = setTimeout(() => {
            console.log('You are hovering bro!')
        }, 100)
    }
    function handleStarMouseOver(event) {
        console.log(event);
          const index = Number(event.currentTarget.dataset.index);
          console.log(index);
          fillStars(index);
        
        
    }
    function handleStarClick(index){
        setSelectedRating(index);
        console.log(`Star ${index} clicked!`);
    }
    function handleStarContainerMouseOut(){
        let indexToSet = selectedRating || rating || 0; 
        console.log(`Mouse left the star container, setting stars to index: ${indexToSet}`);
        fillStars(indexToSet, false);
    }
   function fillStars(index, clear) {
       const stars = starContainer.current.children;
       
       
       console.log(stars);
       console.log("stars bro");

    // Convert to an array to use forEach
    Array.from(stars).forEach((element, i) => {
        if(clear){
            element.src = star_no_fill;
        }
        else if(i+1<=index){
            element.src = star_fill;
        }
        else{
            element.src = star_no_fill;
        }
    });
}
 async function handleRateButtonClick(){
    let selectedIndex = selectedRating || 0;
    
    if(selectedIndex && selectedIndex >0 && selectedIndex <= 10 && selectedIndex !== rating){
        console.log(`Rating submitted: ${selectedIndex}`);
        setRating(selectedIndex);

        ratingContainer.current.style.visibility = 'hidden';
        
        var response = await RateMovie(movie.imdbID, selectedIndex);
        console.log("Response from RateMovie: ", response);
        return;
    }
    else{
        console.log(`Invalid rating: ${selectedIndex}`);
        return;
}
}
function handleRemoveRatingClick(){
    console.log("Remove rating clicked!");
    setSelectedRating(null);
    setRating(null);
    fillStars(0, true);
    ratingContainer.current.style.visibility = 'hidden';
}
    console.log("rating: ", rating);
    console.log("selectedRating: ", selectedRating);
    return (
        <div id='ratingPopupContainer' ref={ratingContainer}>
            <div id='ratingPopupTitle'>{movie?.title || 'Title'}</div>
            <div
                id='starRatingContainer'
                ref={starContainer}
                onMouseLeave={() =>{
                        console.log('Hovered outside of the stars container!')
                        handleStarContainerMouseOut();
                }
                    
                    
                }
                onMouseOver={handleMouseOver}
            >
                <img src={star_no_fill} alt="" data-index={1} onMouseEnter={handleStarMouseOver} onClick={e => handleStarClick(e.currentTarget.dataset.index)} />
                <img src={star_no_fill} alt="" data-index={2} onMouseEnter={handleStarMouseOver} onClick={e => handleStarClick(e.currentTarget.dataset.index)} />
                <img src={star_no_fill} alt="" data-index={3} onMouseEnter={handleStarMouseOver} onClick={e => handleStarClick(e.currentTarget.dataset.index)} />
                <img src={star_no_fill} alt="" data-index={4} onMouseEnter={handleStarMouseOver} onClick={e => handleStarClick(e.currentTarget.dataset.index)} />
                <img src={star_no_fill} alt="" data-index={5} onMouseEnter={handleStarMouseOver} onClick={e => handleStarClick(e.currentTarget.dataset.index)} />
                <img src={star_no_fill} alt="" data-index={6} onMouseEnter={handleStarMouseOver} onClick={e => handleStarClick(e.currentTarget.dataset.index)} />
                <img src={star_no_fill} alt="" data-index={7} onMouseEnter={handleStarMouseOver} onClick={e => handleStarClick(e.currentTarget.dataset.index)} />
                <img src={star_no_fill} alt="" data-index={8} onMouseEnter={handleStarMouseOver} onClick={e => handleStarClick(e.currentTarget.dataset.index)} />
                <img src={star_no_fill} alt="" data-index={9} onMouseEnter={handleStarMouseOver} onClick={e => handleStarClick(e.currentTarget.dataset.index)} />
                <img src={star_no_fill} alt="" data-index={10} onMouseEnter={handleStarMouseOver} onClick={e => handleStarClick(e.currentTarget.dataset.index)} />

                            </div>
            <button onClick={handleRateButtonClick} id='ratePopupRateButton'>Rate</button>
            <button onClick={handleRemoveRatingClick} id='ratePopupRemoveButton'>Remove rating</button>
        </div>
    )
}

export default RatingPopup
