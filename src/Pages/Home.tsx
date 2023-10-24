
import SliderHome from "../components/SliderHome";
import SliderProducts from "../components/SliderProducts";
//@ts-ignore
import EgisOne from "../img/productEgisOne.png";
//@ts-ignore
import EgisTwo from "../img/productEgisTwo.png";
//@ts-ignore
import EgisTree from "../img/productEgisTree.png";
//@ts-ignore
import EgisFour from "../img/productEgisFour.png";
//@ts-ignore
import EgisFive from "../img/productsEgisSix.jpg";
//@ts-ignore
import SealOne from "../img/productsSealOne.png";
//@ts-ignore
import SealTwo from "../img/productsSealTwo.png";
//@ts-ignore
import SealTree from "../img/productsSealTree.png";
//@ts-ignore
import SealFour from "../img/productsSealFour.png";
//@ts-ignore
import SealSeven from "../img/productsSealSeven.jpg";
import Footer from "../components/Footer";
import React, {useEffect} from "react";

import Hercules from "../components/Hercules";

const Home = ({lang, setLang}: any) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>


            <SliderHome lang={lang} />
            <SliderProducts title='EGIS'  products={[
                {img: EgisOne, title: lang === 'en' ? 'Esophageal Stents' : 'Endopróteses Esofágicas', path: '/catalog/EGIS/0'},

                {img: EgisTwo, title: lang === 'en' ? 'Biliary Stents' : 'Stents Biliares', path: '/catalog/EGIS/1'},
                {img: EgisTree, title: lang === 'en' ? 'Colorectal Stents' : 'Stents colorrectais', path: '/catalog/EGIS/3'},
                {img: EgisFour, title: lang === 'en' ? 'Production Of EGIS Stents' : 'Produção de Stents EGIS', path: '/catalog/EGIS/6'},
                {img: EgisFive, title: lang === 'en' ? 'Pyloric Stents' : 'Stents pilóricas', path: '/catalog/EGIS/2'},
            ]} />
            <SliderProducts title='SEAL' products={[
                {img: SealOne, title: lang === 'en' ? 'SEAL Thoracic Flex OP' : 'SELO Torácico Flex OP', path: '/catalog/SEAL/1'},
                {img: SealTwo, title: lang === 'en' ? 'SEAL Thoracic Flex Fenestrated' : 'Torácica Flex Fenestração', path: '/catalog/SEAL/2'},
                {img: SealTree, title: lang === 'en' ? 'SEAL Bare Type' : 'VEDAÇÃO Tipo nua', path: '/catalog/SEAL/3'},
                {img: SealFour, title: lang === 'en' ? 'SEAL Uni-iliac' : 'SEAL Uni-iliac', path: '/catalog/SEAL/5'},
                {img: SealSeven, title: lang === 'en' ? 'SEAL Abdominal (Branch)' : 'SELO Abdominal (Ramo)', path: '/catalog/SEAL/6'},

            ]} />
            <Hercules lang={lang} setLang={setLang}/>
            <Footer lang={lang} />
        </>
    )
}
export default Home