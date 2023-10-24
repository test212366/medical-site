import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Home from "../Pages/Home";
import React, {useState} from "react";
import Contacts from "../Pages/Contacts";
import AboutUs from "../Pages/AboutUs";
import Catalog from "../Pages/Catalog";
import SubHeader from "./SubHeader";
import Header from "./Header";


const Router = () => {
    const [lang, setLang] = useState('en'),
        [openCatalog, setOpenCatalog] = useState(false),
        [openLang, setOpenLang] = useState(false)

    const location = useLocation()


    const [currentCatalog, setCurrentCatalog] = useState('EGIS'),
        navigation = useNavigate()

    const catalogShow = (title:string) => {

        setOpenCatalog(false)

        if(setCurrentCatalog) {
            setCurrentCatalog(title)
        }
        navigation(`/catalog/${title}`)
    }

    const setLangue = () => {
        if(lang === 'en') setLang('pt')
        else setLang('en')
        setOpenLang(false)
    }

    return (
        <>
            {location.pathname !== '/pdf' &&  <div className='header__fixed'>
                <SubHeader lang={lang}/>
                <Header setLang={setLang} setOpenLang={setOpenLang} setLangue={setLangue} openLang={openLang} setOpenCatalog={setOpenCatalog} openCatalog={openCatalog} currentCatalog={currentCatalog} setCurrentCatalog={setCurrentCatalog} lang={lang}/>
            </div>}

            <>
                <section className={`header__catalog-all-categ ${openCatalog ? 'active' : ""}`}>

                    <button className='header__catal-item' onClick={() => catalogShow('EGIS')}>EGIS</button>
                    <button className='header__catal-item' onClick={() => catalogShow('Hercules Vascular Stent')}>Hercules Vascular Stent</button>

                    <button className='header__catal-item' onClick={() => catalogShow('SEAL')}>SEAL</button>
                      <div className='header__relative'>
                        <div className='header__catalogEn header__changeLangPhone'>
                            <div className={`header__catalogEn-open ${openLang ? 'active' : ''}`}>

                                <p className='header__pt' onClick={() => {
                                    setLangue()
                                    setOpenCatalog(false)
                                } }>
                                    {lang === 'en' ? 'PT' : 'EN'}
                                </p>
                            </div>
                            <div onClick={() => setOpenLang(!openLang)} className="header__catalog-change-lang">
                                {lang === 'en' ? 'EN' : 'PT'}

                                <svg className={`   ${openLang ? 'activeRotate' : ""} arrowChangeLang`} width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.29297 4.70703L14.586 12L7.29297 19.293L8.70697 20.707L17.414 12L8.70697 3.29303L7.29297 4.70703Z" fill="#000"/>
                                </svg>

                            </div>
                        </div>
                    </div>

                </section>

                {openLang  && <div className='overlay' onClick={() => {
                    setOpenLang(false)
                    setOpenCatalog(false)
                }
                }></div>}
            </>




            <Routes>
                        <Route path='/' element={<Home lang={lang} setLang={setLang} />} />
                        <Route path='/contacts' element={<Contacts lang={lang} setLang={setLang} />} />
                        <Route path='/about' element={<AboutUs lang={lang} setLang={setLang}/>} />
                        <Route path='/catalog' element={<Catalog currentCatalog={currentCatalog} setCurrentCatalog={setCurrentCatalog} lang={lang} setLang={setLang}/>} />
                        <Route path='/catalog/:catalog/:itemId' element={<Catalog currentCatalog={currentCatalog} setCurrentCatalog={setCurrentCatalog} lang={lang} setLang={setLang}/>} />

                        <Route path='/catalog/:catalog' element={<Catalog currentCatalog={currentCatalog} setCurrentCatalog={setCurrentCatalog} lang={lang} setLang={setLang}/>} />

                        <Route path='*' element={<Home />} />
                    </Routes>


        </>
    )
}
export default Router
