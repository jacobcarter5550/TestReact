import React, {useEffect, useRef} from 'react'
import './home.css'
import './background.css'

function Home() {
    const floatyPixel = useRef()
    const bubble = useRef()
    const floaty = useRef()
    useEffect(() => {
        
        let yMousePos = 0;
        let lastScrolledTop = 0;
        const moveBubble = (e) => {
            yMousePos = e.pageY;
            bubble.current.style.transform = `translate3d(0, ${yMousePos}px, 0) scale3d(1, 1, 1)`; 
            floaty.current.style.transform = `translate3d(0, -${yMousePos}px, 0) scale3d(1, 1, 1)`;
        };

        document.addEventListener('mousemove', moveBubble)
        document.addEventListener('scroll', e => {
            const newScrollTop = e.target.scrollingElement.scrollTop;
            if (newScrollTop !== lastScrolledTop) {
                yMousePos -= lastScrolledTop;
                lastScrolledTop = newScrollTop;
                yMousePos += lastScrolledTop;
            }
            bubble.current.style.transform = `translate3d(0, ${yMousePos}px, 0) scale3d(1, 1, 1)`; 
            floaty.current.style.transform = `translate3d(0, -${yMousePos}px, 0) scale3d(1, 1, 1)`;
            });
    })
    return (
        <div>
            {/*Body  */}
            <div className="body_container">
                <div className="down_arrow">
                    <img src="assets/down_arrowe.svg" alt=""/>
                </div>
                <div className="body_placeholder"></div>
                <div className="body_rectangle">
                    <div className="body_name_para">
                        <p>My name is <span id="para_white">Jacob Carter</span></p>
                    </div>
                </div>
                <div className="body_connect_para">
                    <p>I connect with people through visuals, whether it’s through stealing a moment from time, creating a beautiful platform, or reliving the perfect party, 
                    <br/>
                    <br/>
                    I believe the quickest way to evoke emotion and move the soul is by giving someone something to look at.</p>
                </div>
            </div>
            {/* Background   */}
            <div className="floaty_pixel" ref={floatyPixel} >
                <div className="bubble" ref={bubble}>
                    <div className="floaty" ref={floaty}>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Home
