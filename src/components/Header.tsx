// @ts-ignore
import logo from '../img/logo.png'
import React, {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

const Header = ({lang, setLang, setCurrentCatalog,openCatalog,setLangue, setOpenCatalog,openLang, setOpenLang  }: any):JSX.Element => {

      const [inputSearch, setInputSearch] = useState(''),
        [findProducts,setFindProducts] = useState([]),
        [openPhoneSearch, setOpenPhoneSearch] = useState(false)

    const params = useLocation(),
        navigation = useNavigate()


    const products = [

                {title: lang === 'en' ? 'Esophageal Stents' : "Endopróteses Esofágicas", path: '/catalog/EGIS/0'},
                {title: lang === 'en' ? 'Biliary Stants' : 'Stents Biliares', path: '/catalog/EGIS/1'},
                {title: lang === 'en' ? 'Pyloric Stents' : 'Stents pilóricas', path: '/catalog/EGIS/2' },
                {title: lang === 'en' ? 'Colorectal Stents' : 'Stents colorrectais', path: '/catalog/EGIS/3'},
                {title: lang === 'en' ? 'Tracheobronchial stents' : "Stents traqueobrônquicos", path: '/catalog/EGIS/4' },
                {title: lang === 'en' ? 'Endo-USI-guided stents' : 'Endo-USI-guiados stents', path: "/catalog/EGIS/5" },
                {title: lang === 'en' ? 'Production Of EGIS Stents' : "Produção de Stents EGIS", path: '/catalog/EGIS/6' },
                 {title: lang === 'en' ? 'Hercules Vascular Stent' : "Stent Vascular Hercules", path: '/catalog/Hercules Vascular Stent' },

                {title: lang === 'en' ? 'SEAL Thoracic Flex' : 'SELO Torácico Flex', path: '/catalog/SEAL/0' },
                {title: lang === 'en' ? 'SEAL Thoracic Flex OP' : 'SELO Torácico Flex OP', path: '/catalog/SEAL/1'},
                 {title: lang === 'en' ? 'SEAL Thoracic Flex Fenestrated' : 'VEDAÇÃO Fenestração Torácica Flex Fenestração', path: '/catalog/SEAL/2'},
                {title: lang === 'en' ? 'SEAL Bare Type' : 'VEDAÇÃO Tipo nua',path: '/catalog/SEAL/3'},
                 {title: lang === 'en' ? 'Tracheobronchial stents' : 'Stents traqueobrônquicos', path: '/catalog/SEAL/4'},
                 {title: lang === 'en' ? 'SEAL Uni-iliac' : 'SEAL Uni-iliac', path: '/catalog/SEAL/5'},
                 {title: lang === 'en' ? 'SEAL Abdominal (Branch)' : 'SELO Abdominal (Ramo)', path: '/catalog/SEAL/6'},


    ]


    const setInput = (e:any) => {

        if(openCatalog || openLang) {
            setOpenLang(false)
            setOpenCatalog(false)
        }
        setInputSearch(e.target.value)
        products.forEach((product, index) => {

            if(product.title.toLowerCase().substring(0, e.target.value.length) === e.target.value.trim().toLowerCase()) {

                // @ts-ignore
                setFindProducts(   [product])
            }
        })
        if(e.target.value === '') {
            setFindProducts([])
        }
    }



    // @ts-ignore
    return (
        <>


            <header>
                <section className={`results__under-header-find ${findProducts.length > 0 ? 'active' : ''}`}>

                    {/*@ts-ignore*/}
                    {findProducts.length > 0 && findProducts.map((product:any, index) => <p key={index} onClick={() => {


                        setFindProducts([])
                        setOpenPhoneSearch(false)
                        navigation(product.path)

                    }
                    }>{product.title}</p> )}
                </section>
                <div className={`header__logo ${openPhoneSearch ? 'hiddenLogo' : ''}`}>
                    <div className='header__bg-logo'>
                        <img className='header__logo-img' src={logo} alt="header__logo"/>
                    </div>
                </div>
                <div className={`header__input ${params.pathname === '/catalog' ? 'transform22px' : ''}`}>
                    <div className={`search__wrapper ${openPhoneSearch ? 'active' : ""}`}>
                        <svg onClick={() => setOpenPhoneSearch(true)} className={`search ${openPhoneSearch ? 'hiddensvg' : ""}`} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 1.5C5.81055 1.5 2 5.31055 2 10C2 14.6895 5.81055 18.5 10.5 18.5C12.3555 18.5 14.0703 17.9023 15.4688 16.8906L22.0469 23.4531L23.4531 22.0469L16.9531 15.5312C18.2305 14.043 19 12.1113 19 10C19 5.31055 15.1895 1.5 10.5 1.5ZM10.5 2.5C14.6484 2.5 18 5.85156 18 10C18 14.1484 14.6484 17.5 10.5 17.5C6.35156 17.5 3 14.1484 3 10C3 5.85156 6.35156 2.5 10.5 2.5Z" fill="#1D1D1D"/>
                        </svg>
                        <svg  onClick={() => {
                            setOpenPhoneSearch(false)
                            setFindProducts([])
                        } } fill='#1D1D1D' xmlns="http://www.w3.org/2000/svg" className={`close__search-phone ${openPhoneSearch ? 'openClose' : ""}`} height="20px" width='20px' viewBox="0 0 24 24" id="close"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>
                         <input onChange={(e:any) => setInput(e)} value={inputSearch} type="text" placeholder={`${lang === 'en' ? 'Search by medical products' : 'Pesquisa por produtos médicos'} `}/>
                    </div>


                    <input   onChange={(e:any) => setInput(e)} value={inputSearch}  type="text" className={`header__input-target  `} placeholder={`${lang === 'en' ? 'Search by medical products' : 'Pesquisa por produtos médicos'} `}/>
                   <div onClick={() => {
                       setFindProducts(   [])
                       setInputSearch('')
                       setOpenCatalog(!openCatalog)
                   }} className={`header__catalog-target   ${params.pathname.substring(0,8) === '/catalog' ? 'hiddenDesc' : ""}`}>
                        <div className='header__input-catal'>
                            <svg className={`${openCatalog ? 'openR' : 'close'} transition`} id="Layer_1"   version="1.1" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"  ><style type="text/css">
                            </style><path   d="M284.3,245.1l110.9-110.9c7.8-7.8,7.8-20.5,0-28.3s-20.5-7.8-28.3,0L256,216.8L145.1,105.9  c-7.8-7.8-20.5-7.8-28.3,0s-7.8,20.5,0,28.3l110.9,110.9L116.9,355.9c-7.8,7.8-7.8,20.5,0,28.3c3.9,3.9,9,5.9,14.1,5.9  c5.1,0,10.2-2,14.1-5.9L256,273.3l110.9,110.9c3.9,3.9,9,5.9,14.1,5.9s10.2-2,14.1-5.9c7.8-7.8,7.8-20.5,0-28.3L284.3,245.1z"/></svg>
                            <svg className={`${openCatalog ? 'close' : ""} transition`} width="24" height="16" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25 2.25H1C0.734784 2.25 0.48043 2.13147 0.292893 1.92049C0.105357 1.70952 0 1.42337 0 1.125C0 0.826631 0.105357 0.540484 0.292893 0.329505C0.48043 0.118527 0.734784 0 1 0H25C25.2652 0 25.5196 0.118527 25.7071 0.329505C25.8946 0.540484 26 0.826631 26 1.125C26 1.42337 25.8946 1.70952 25.7071 1.92049C25.5196 2.13147 25.2652 2.25 25 2.25Z" fill="black"/>
                                <path d="M25 10.125H1C0.734784 10.125 0.48043 10.0065 0.292893 9.7955C0.105357 9.58452 0 9.29837 0 9C0 8.70163 0.105357 8.41548 0.292893 8.20451C0.48043 7.99353 0.734784 7.875 1 7.875H25C25.2652 7.875 25.5196 7.99353 25.7071 8.20451C25.8946 8.41548 26 8.70163 26 9C26 9.29837 25.8946 9.58452 25.7071 9.7955C25.5196 10.0065 25.2652 10.125 25 10.125Z" fill="black"/>
                                <path d="M25 18H1C0.734784 18 0.48043 17.8815 0.292893 17.6705C0.105357 17.4595 0 17.1734 0 16.875C0 16.5766 0.105357 16.2905 0.292893 16.0795C0.48043 15.8685 0.734784 15.75 1 15.75H25C25.2652 15.75 25.5196 15.8685 25.7071 16.0795C25.8946 16.2905 26 16.5766 26 16.875C26 17.1734 25.8946 17.4595 25.7071 17.6705C25.5196 17.8815 25.2652 18 25 18Z" fill="black"/>
                            </svg>
                        </div>

                        {lang === 'en' ? 'CATALOG' : 'CATÁLOGO'}
                    </div>

                </div>
                  <div onClick={() => setOpenCatalog(!openCatalog)} className={`header__catalog-target phoneButton ${openPhoneSearch ? 'hiddenCatalog' : ''} ${params.pathname.substr(0,8) === '/catalog' ? 'hidden' : ""}`}>
                    <div className='header__input-catal  '>
                        <svg className={`${openCatalog ? 'openR' : 'close'} transition`} id="Layer_1"   version="1.1" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"  ><style type="text/css">
                        </style><path   d="M284.3,245.1l110.9-110.9c7.8-7.8,7.8-20.5,0-28.3s-20.5-7.8-28.3,0L256,216.8L145.1,105.9  c-7.8-7.8-20.5-7.8-28.3,0s-7.8,20.5,0,28.3l110.9,110.9L116.9,355.9c-7.8,7.8-7.8,20.5,0,28.3c3.9,3.9,9,5.9,14.1,5.9  c5.1,0,10.2-2,14.1-5.9L256,273.3l110.9,110.9c3.9,3.9,9,5.9,14.1,5.9s10.2-2,14.1-5.9c7.8-7.8,7.8-20.5,0-28.3L284.3,245.1z"/></svg>
                        <svg className={`${openCatalog ? 'close' : ""} transition`} width="24" height="16" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 2.25H1C0.734784 2.25 0.48043 2.13147 0.292893 1.92049C0.105357 1.70952 0 1.42337 0 1.125C0 0.826631 0.105357 0.540484 0.292893 0.329505C0.48043 0.118527 0.734784 0 1 0H25C25.2652 0 25.5196 0.118527 25.7071 0.329505C25.8946 0.540484 26 0.826631 26 1.125C26 1.42337 25.8946 1.70952 25.7071 1.92049C25.5196 2.13147 25.2652 2.25 25 2.25Z" fill="black"/>
                            <path d="M25 10.125H1C0.734784 10.125 0.48043 10.0065 0.292893 9.7955C0.105357 9.58452 0 9.29837 0 9C0 8.70163 0.105357 8.41548 0.292893 8.20451C0.48043 7.99353 0.734784 7.875 1 7.875H25C25.2652 7.875 25.5196 7.99353 25.7071 8.20451C25.8946 8.41548 26 8.70163 26 9C26 9.29837 25.8946 9.58452 25.7071 9.7955C25.5196 10.0065 25.2652 10.125 25 10.125Z" fill="black"/>
                            <path d="M25 18H1C0.734784 18 0.48043 17.8815 0.292893 17.6705C0.105357 17.4595 0 17.1734 0 16.875C0 16.5766 0.105357 16.2905 0.292893 16.0795C0.48043 15.8685 0.734784 15.75 1 15.75H25C25.2652 15.75 25.5196 15.8685 25.7071 16.0795C25.8946 16.2905 26 16.5766 26 16.875C26 17.1734 25.8946 17.4595 25.7071 17.6705C25.5196 17.8815 25.2652 18 25 18Z" fill="black"/>
                        </svg>
                    </div>

                    {lang === 'en' ? 'CATALOG' : 'CATÁLOGO'}
                </div>
                <div className='header__catalogEn'>
                    <div className={`header__catalogEn-open ${openLang ? 'active' : ''}`}>

                        <p className='header__pt' onClick={setLangue}>
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
            </header>


         </>

    )
}

export default Header