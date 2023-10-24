
// @ts-ignore
import SliderOne from '../img/SliderOne.png'
// @ts-ignore
import SliderTwo from '../img/contactTwo.png'
// @ts-ignore
import SliderTree from '../img/sliderTree.png'

import ButtonSlider from "./ButtonSlider";
import ButtonSliderP from "./ButtonSliderP";
import {useRef, useState} from "react";
import {EffectCreative, Autoplay } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'


import 'swiper/css';
import 'swiper/css/effect-creative';
const SliderHome = ({lang}: any) => {
    const slider = useRef<any>(null),
        [index, setIndex] = useState(0)



    const next = () => slider.current.swiper.slideNext(1000),
        prev = () => slider.current.swiper.slidePrev(1000)





    return (
        <article className='slider__home'>

            {/*@ts-ignore*/}
            <Swiper     ref={slider} onSlideChange={(e:any) => setIndex(e.realIndex)} speed={1000} className='slider__homeI' slidesPerView={1} effect={'creative'}
                    creativeEffect={{
                        prev: {
                            shadow: false,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ['100%', 0, 0],
                        },
                    }} modules={[EffectCreative, Autoplay]} loop={true}>
                <SwiperSlide>
                        <div className='slider__home-slide'>
                            <div className='slider__home-slide-item'>
                                <h1>MEDBIOTECH</h1>
                                <p className='slider__home-p-slider  '>{lang === 'en' ? 'Is an actively developing company selling medical products and equipment.' : 'É uma empresa que desenvolve activamente a venda de produtos e equipamentos médicos.'} </p>
                                <p className='slider__home-sec-p chill'>{lang === 'en' ? 'Our managers will tell you in detail about our products and answer all your questions. If you have any suggestions or wishes - contact us and we will find convenient forms of cooperation.' : 'Os nossos gestores irão informá-lo em pormenor sobre os nossos produtos e responder a todas as suas perguntas. Se tiver alguma sugestão ou desejo - contacte-nos e encontraremos formas convenientes de cooperação.'}</p>


                            </div>
                            <img className='slider__home-img' src={SliderOne} alt="sliderOne"/>
                        </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='slider__home-slide'>
                        <div className='slider__home-slide-item'>
                            <h1>{lang === 'en' ? 'Contact Us' : "Contacte-nos"}</h1>
                            <p className='slider__home-p-slider'>{lang === 'en' ? 'Do you have some ideas and suggestions?' : "Tem algumas ideias e sugestões?"}   </p>
                            <p className='slider__home-sec-p'> {lang === 'en' ? 'Contact us! Our team will try to respond to your suggestions as quickly as possible' : "Contacte-nos! A nossa equipa tentará responder às suas sugestões o mais rapidamente possível"}     </p>


                        </div>
                        <img className='slider__home-img' src={SliderTwo} alt="sliderOne"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider__home-slide'>
                        <div className='slider__home-slide-item'>
                            <h1>{lang === 'en' ? 'HIGH QUALITY' : "ALTA QUALIDADE"}</h1>
                            <p className='slider__home-p-slider'>
                                {lang === 'en' ? 'We supply only the best products. We guarantee quality.' : "Fornecemos apenas os melhores produtos. Garantimos a qualidade."}</p>


                        </div>
                        <img className='slider__home-img lastSliderTransform' src={SliderTree} alt="sliderOne"/>
                    </div>
                </SwiperSlide>

            </Swiper>





            <div className='slider__home-nav'>
                {/*@ts-ignore*/}
                <ButtonSliderP  onClick={prev} />
                <div className='slider__home-dots'>
                    <div className={`slider__dot ${index === 0 ? 'active' : ''}`} onClick={() => slider.current.swiper.slideTo(0)}></div>
                    <div className={`slider__dot ${index === 1 ? 'active' : ''}`} onClick={() => slider.current.swiper.slideTo(1)}></div>
                    <div className={`slider__dot ${index === 2 ? 'active' : ''}`} onClick={() => slider.current.swiper.slideTo(2)}></div>
                 </div>


                {/*@ts-ignore*/}
                <ButtonSlider onClick={next} />
            </div>

        </article>
    )
}
export default SliderHome