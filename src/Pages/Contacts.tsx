
import React, {useEffect} from "react";
import Footer from "../components/Footer";

const Contacts = ({lang, setLang}: any) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>


            <section className='contacts__main'>
                <div className="contacts__background"></div>
                <div className="container contacts__description">
                    <div className="contacts__wrapper">
                        <div className='contacts__wrapper-items'>
                            <div className='contacts__wrapper-item'>
                                <svg fill='#262e8d' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"   x="0px" y="0px"
                                     width="60px" height="60px" viewBox="0 0 477.156 477.156"
                                      >
<g>
	<path d="M475.009,380.316l-2.375-7.156c-5.625-16.719-24.062-34.156-41-38.75l-62.688-17.125c-17-4.625-41.25,1.594-53.688,14.031
		l-22.688,22.688c-82.453-22.28-147.109-86.938-169.359-169.375L145.9,161.94c12.438-12.438,18.656-36.656,14.031-53.656
		l-17.094-62.719c-4.625-16.969-22.094-35.406-38.781-40.969L96.9,2.19c-16.719-5.563-40.563,0.063-53,12.5L9.962,48.659
		C3.899,54.69,0.024,71.94,0.024,72.003c-1.187,107.75,41.063,211.562,117.281,287.781
		c76.031,76.031,179.454,118.219,286.891,117.313c0.562,0,18.312-3.813,24.375-9.845l33.938-33.938
		C474.946,420.878,480.571,397.035,475.009,380.316z"/>
</g>
                                    <g>
</g>
                                    <g>
</g>
                                    <g>
</g>
                                    <g>
</g>
                                    <g>
</g>
                                    <g>
</g>
                                    <g>
</g>
                                    <g>
</g>
                                    <g>
</g>
                                    <g>
</g>
                                    <g>
</g>
                                    <g>
</g>
                                    <g>
</g>
                                    <g>
</g>
                                    <g>
</g>
</svg>
                                <p className='contacts__title-wrapper'>
                                    {lang === 'en' ? 'Give us a call' : 'Telefone-nos'}

                                </p>
                                <p className='contacts__desc-wrapper'>{lang === 'en' ? "Any questions? We're here to help. " : 'Alguma pergunta? Estamos aqui para ajudar.'}</p>
                                <span> <a href="tel:+5521-98602-9518">+5521-98602-9518</a> </span>
                            </div>
                            <div className='contacts__wrapper-item'>
                                 <svg fill='#262e8d' enableBackground="new 0 0 64 64" version="1.1" viewBox="0 0 64 64"  width="60px" height="60px" xmlns="http://www.w3.org/2000/svg" ><g id="Glyph_copy_2"><path d="M63.125,9.977c-0.902-1.321-2.419-2.194-4.131-2.194H5.006c-1.676,0-3.158,0.842-4.067,2.117l31.16,25.982L63.125,9.977z"/><path d="M0.006,14.328v36.889c0,2.75,2.25,5,5,5h53.988c2.75,0,5-2.25,5-5V14.461L32.099,41.09L0.006,14.328z"/></g></svg>
                                <p className='contacts__title-wrapper'>{lang === 'en' ? 'Email us' : "Envie-nos um e-mail"}</p>

                                {lang === 'en' ?
                                    <p className='contacts__desc-wrapper'>Ideas? Suggestions? <br/>
                                        We are open to any questions!</p> : <p className='contacts__desc-wrapper'>Ideas? Suggestions? Estamos abertos a quaisquer perguntas!</p>}

                                <p>{lang === 'en' ? 'Write to ' : 'Escreva para '}<span> <a href="mailto:Medbiotech.br@gmail.com">Medbiotech.br@gmail.com</a>  </span></p>
                            </div>

                        </div>
                        <h4 className='contacts__title'>{lang === 'en' ? 'Find Us' : 'Encontre-nos'}</h4>


                        <iframe className='contacts__wrapper-map'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1293.0150616984126!2d-46.65709117063173!3d-23.5612998854847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59ceb102d799%3A0x2b9222a96a584eb4!2zQXYuIFBhdWxpc3RhLCAyMjAyIC0gQmVsYSBWaXN0YSwgU8OjbyBQYXVsbyAtIFNQLCAwMTMxMC05MzIsINCR0YDQsNC30LjQu9C40Y8!5e0!3m2!1sru!2sru!4v1679941163478!5m2!1sru!2sru"
                            width="600" height="450"  loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
            <Footer lang={lang} />
        </>
    )
}
export default Contacts