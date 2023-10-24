import Slider from "react-slick";

import ButtonSliderP from "./ButtonSliderP";
import ButtonSlider from "./ButtonSlider";
import {useNavigate} from "react-router-dom";
const SliderProducts = ({products, title}:any) => {
    const navigate = useNavigate()

    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <ButtonSliderP isArrow={true} />,
        nextArrow: <ButtonSlider isArrow={true}/>,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 3,


                }
            },
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 2,
                    centerMode: true

                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '20%',

                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1.5,
                    centerMode: false,
                    centerPadding: '0',

                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,


                }
            },
        ]


    }

    return (
        <section className='container'>

                <div className='products__title'>
                    <h4>{title}</h4>
                    <button onClick={() => navigate(`/catalog/${title}`)} className='products__button'>
                        All
                        <svg width="14" height="14" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.11212 8.84739L12.5019 8.71274L9.01927 12.2868C8.76233 12.5505 8.7678 12.9725 9.03149 13.2294C9.29517 13.4864 9.7173 13.4809 9.97424 13.2172L14.58 8.49046C14.837 8.22678 14.8315 7.80465 14.5678 7.54788L9.84108 2.94207C9.70924 2.8136 9.53774 2.75065 9.36709 2.75286C9.19661 2.75507 9.0268 2.82245 8.89833 2.95429C8.64139 3.21797 8.64686 3.64011 8.91054 3.89688L12.4846 7.37952L2.09484 7.51417C1.72688 7.51893 1.4321 7.82128 1.43687 8.18942C1.44164 8.55755 1.74399 8.85216 2.11212 8.84739Z" fill="#141C6D"/>
                        </svg>

                    </button>
                </div>



            <Slider {...settings} className='products__slider' >
                {products.map((product: any, i:number) =>
                    <div onClick={() => navigate(product.path)} className='products__slide-item products__slide-i' key={i}>
                        <img width={300} height={225} src={product.img} alt="productPh"/>
                        <p>{product.title}</p>
                    </div>
                )}
            </Slider>

        </section>
    )
}
export default SliderProducts