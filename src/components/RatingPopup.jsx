import star_fill from '../assets/star_fill.svg'
import star_no_fill from '../assets/star_no_fill.svg'
import handleClickRatingPopup from '../event_handlers/handleClickRatingPopup'
import { useEffect, useRef } from 'react'

function RatingPopup({ props }) {
    const ratingContainer = useRef(null)
    const starContainer = useRef(null)
    useEffect(() => {
        if (!ratingContainer.hasListeners) {
            console.log(starContainer.current.children)
        }
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

    return (
        <div id='ratingPopupContainer' ref={ratingContainer}>
            <div>{props?.Title || 'Title'}</div>
            <div
                id='starRatingContainer'
                ref={starContainer}
                onMouseLeave={() =>{
                        console.log('Hovered outside of the stars container!')
                        fillStars(0, true);
                }
                    
                    
                }
                onMouseOver={handleMouseOver}
            >
                <img src={star_no_fill} alt="" data-index={1} onMouseEnter={handleStarMouseOver} />
                <img src={star_no_fill} alt="" data-index={2} onMouseEnter={handleStarMouseOver} />
                <img src={star_no_fill} alt="" data-index={3} onMouseEnter={handleStarMouseOver} />
                <img src={star_no_fill} alt="" data-index={4} onMouseEnter={handleStarMouseOver} />
                <img src={star_no_fill} alt="" data-index={5} onMouseEnter={handleStarMouseOver} />
                <img src={star_no_fill} alt="" data-index={6} onMouseEnter={handleStarMouseOver} />
                <img src={star_no_fill} alt="" data-index={7} onMouseEnter={handleStarMouseOver} />
                <img src={star_no_fill} alt="" data-index={8} onMouseEnter={handleStarMouseOver} />
                <img src={star_no_fill} alt="" data-index={9} onMouseEnter={handleStarMouseOver} />
                <img src={star_no_fill} alt="" data-index={10} onMouseEnter={handleStarMouseOver} />
                            </div>
            <button>Rate</button>
            <button>Remove rating</button>
        </div>
    )
}

export default RatingPopup
