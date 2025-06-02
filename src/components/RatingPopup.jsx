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
    }
    function fillStars(starContainerRef, index){
        
    }
    return (
        <div id='ratingPopupContainer' ref={ratingContainer}>
            <div>{props?.Title || 'Title'}</div>
            <div
                id='starRatingContainer'
                ref={starContainer}
                onMouseLeave={() =>
                    console.log('Hovered outside of the stars container!')
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
