
import React, {useEffect} from "react";
//@ts-ignore
import heart from '../img/heart.png'
//@ts-ignore
import aboutOne from '../img/aboutOne.png'
//@ts-ignore
import aboutTwo from '../img/aboutTwo.png'
//@ts-ignore
import aboutTree from '../img/aboutTree.png'
//@ts-ignore
import aboutFour from '../img/aboutFour.png'
//@ts-ignore
import aboutFive from '../img/aboutFive.png'
//@ts-ignore
import aboutSix from '../img/aboutSix.png'
//@ts-ignore
import aboutSeven from '../img/aboutSeven.png'
//@ts-ignore
import aboutEight from '../img/aboutEight.png'
//@ts-ignore
import aboutNine from '../img/aboutNine.png'
//@ts-ignore
import aboutTen from '../img/aboutTen.png'
//@ts-ignore
import aboutEleven from '../img/aboutEleven.png'
//@ts-ignore
import aboutTw from '../img/aboutTw.png'
//@ts-ignore
import aboutTTen from '../img/aboutTTen.png'

import Footer from "../components/Footer";




const AboutUs = ({lang, setLang}: any) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='about__wrap'>

            <div className="about__description-first ">

                <div className='container about__main'>

                    <div className='about__left-side'>
                        <img src={aboutOne} className='about__first' alt="aboutOne"/>
                        <img className='about__left-side-two' src={aboutTwo} alt="aboutOne"/>
                        <img className='about__left-side-two' src={aboutTree} alt="aboutOne"/>
                        <img className='about__left-side-two' src={aboutFour} alt="aboutOne"/>
                        <img className='about__left-side-two' src={aboutFive} alt="aboutOne"/>
                        <img className='about__left-side-two' src={aboutSix} alt="aboutOne"/>
                        <img className='about__left-side-two' src={aboutSeven} alt="aboutOne"/>
                        <img className='about__left-side-two' src={aboutEight} alt="aboutOne"/>

                        <img className='about__left-side-two' src={aboutNine} alt="aboutOne"/>
                        <img className='about__left-side-two' src={aboutTen} alt="aboutOne"/>
                        <img className='about__left-side-two' src={aboutEleven} alt="aboutOne"/>
                        <img className='about__left-side-two' src={aboutTw} alt="aboutOne"/>
                        <img className='about__left-side-two' src={aboutTTen} alt="aboutOne"/>

                    </div>
                    <div className="about__right-side">
                        <h4> <img src={heart} alt="medicalPhoto"/> MEDBIOTECH</h4>
                        <p className='about__right-p'>{lang === 'en' ? 'MEDBIOTECH is an actively developing company selling medical products and equipment.' : 'A MEDBIOTECH é uma empresa que desenvolve activamente a venda de produtos e equipamentos médicos.'}  </p>
                        <p className='about__right-p'>{lang === 'en' ? 'We are always happy to communicate with our partners and are ready for cooperation.' : 'Estamos sempre felizes por comunicar com os nossos parceiros e estamos prontos para a cooperação.'} </p>
                    </div>
                </div>


           </div>
            <section className='container about__description-main'>


                <p className='about__description-title-main'>
                    {lang === 'en' ? 'Our company has established itself as a reliable and responsible supplier of consumables for medical institutions in Brazil. The availability of warehouses, cooperation with leading transport companies allow us to guarantee reliable and timely delivery of products anywhere in Brazil.'
                        : 'A nossa empresa estabeleceu-se como um fornecedor fiável e responsável de consumíveis para instituições médicas no Brasil. A disponibilidade de armazéns, a cooperação com as principais empresas de transporte permite-nos garantir a entrega fiável e atempada de produtos em qualquer lugar do Brasil.'}

                </p>
                <p className='about__description-title-main-second'> {lang === 'en' ? 'Our managers will tell you in detail about our products and answer all your questions. If you have any suggestions or wishes - contact us and we will find convenient forms of cooperation.'
                    : "Os nossos gestores irão informá-lo em pormenor sobre os nossos produtos e responder a todas as suas perguntas. Se tiver alguma sugestão ou desejo - contacte-nos e encontraremos formas convenientes de cooperação."} </p>


            </section>

                <div className="about__footer">
                    <Footer lang={lang} />
                </div>



        </div>
    )
}
export default AboutUs