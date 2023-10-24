
import React from "react";
// @ts-ignore
import egisRemoteOne from "../img/egisRemoteOne.png";
// @ts-ignore
import egisRemoteTwo from "../img/egisRemoteTwo.png";
import {useNavigate} from "react-router-dom";


const Hercules = ({lang, setLang}: any) => {
    const navigate = useNavigate()  // (`/catalog/${title}`)

    return (
        <section className='container hercules__section'>
            <div className='products__title  hercules__title'>
                <h4>Hercules Vascular Stent</h4>
                <button onClick={() => navigate(`/catalog/Hercules Vascular Stent`)} className='products__button'>
                    More
                    <svg width="14" height="14" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.11212 8.84739L12.5019 8.71274L9.01927 12.2868C8.76233 12.5505 8.7678 12.9725 9.03149 13.2294C9.29517 13.4864 9.7173 13.4809 9.97424 13.2172L14.58 8.49046C14.837 8.22678 14.8315 7.80465 14.5678 7.54788L9.84108 2.94207C9.70924 2.8136 9.53774 2.75065 9.36709 2.75286C9.19661 2.75507 9.0268 2.82245 8.89833 2.95429C8.64139 3.21797 8.64686 3.64011 8.91054 3.89688L12.4846 7.37952L2.09484 7.51417C1.72688 7.51893 1.4321 7.82128 1.43687 8.18942C1.44164 8.55755 1.74399 8.85216 2.11212 8.84739Z" fill="#141C6D"/>
                    </svg>

                </button>
            </div>
            <div className='slider__catal-wrapper hercules__slider'>

                    <div onClick={() => navigate(`/catalog/Hercules Vascular Stent`)} className='products__slide-item products__slide-i herc-slider-item'  >
                        <img width={300} height={225} src={egisRemoteTwo} alt="productPh"/>

                    </div>

                    <div onClick={() => navigate(`/catalog/Hercules Vascular Stent`)} className='products__slide-item products__slide-i h225'  >
                        <img width={300} height={225} src={egisRemoteOne} alt="productPh"/>

                    </div>








            </div>
        </section>
    )
}
export default Hercules