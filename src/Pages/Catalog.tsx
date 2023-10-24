
import React, {useEffect, useRef} from "react";
//@ts-ignore
import EgisOne from "../img/productEgisOne.png";
//@ts-ignore
import EgisTwo from "../img/productEgisTwo.png";
//@ts-ignore
import EgisTree from "../img/productEgisTree.png";
//@ts-ignore
import EgisFour from "../img/productEgisFour.png";
//@ts-ignore
import EgisFive from "../img/productsEgisFive.jpg";
//@ts-ignore
import EgisSix from "../img/productsEgisSix.jpg";
//@ts-ignore
import EgisSeven from "../img/productsEgisSeven.jpg";
//@ts-ignore

import SealOne from "../img/productsSealOne.png";
//@ts-ignore
import SealTwo from "../img/productsSealTwo.png";
//@ts-ignore
import SealTree from "../img/productsSealTree.png";
//@ts-ignore
import SealFour from "../img/productsSealFour.png";
//@ts-ignore
import SealFive from "../img/productsSealFive.jpg";
//@ts-ignore
import SealSix from "../img/productsSealSix.jpg";
//@ts-ignore
import SealSeven from "../img/productsSealSeven.jpg";

//@ts-ignore
import hOne from "../img/hagmedOne.jpg";
//@ts-ignore
import hTwo from "../img/hagmedTwo.jpg";
//@ts-ignore
import hTree from "../img/hagmedTree.jpg";
//@ts-ignore
import hFour from "../img/hagmedFour.jpg";
//@ts-ignore
import hFive from "../img/hagmedFive.jpg";
//@ts-ignore
import hSix from "../img/hagmedSix.jpg";
//@ts-ignore
import hSeven from "../img/hagmedSeven.jpg";
//@ts-ignore
import hEight from "../img/hagmedEight.jpg";

//@ts-ignore
import lOne from "../img/lOne.jpg";
//@ts-ignore
import lTwo from "../img/lTwo.jpg";
//@ts-ignore
import lTree from "../img/lTree.jpg";
//@ts-ignore
import lFour from "../img/lFour.jpg";
//@ts-ignore
import lFive from "../img/lFive.jpg";
//@ts-ignore
import lSix from "../img/lSix.jpg";

//@ts-ignore
import pOne from "../img/pishOne.jpg";
//@ts-ignore
import pTwo from "../img/pishTwo.jpg";

//@ts-ignore
import bil2 from "../img/bil2.jpg";
//@ts-ignore
import bil3 from "../img/bil3.jpg";
//@ts-ignore
import pilor1 from "../img/pilor1.jpg";
//@ts-ignore
import pilor2 from "../img/pilor2.jpg";
//@ts-ignore
import a3 from "../img/3a.jpg";
//@ts-ignore
import a2 from "../img/2a.jpg";

//@ts-ignore
import skdeOne from "../img/skdeOne.jpg";
//@ts-ignore
import tableOne from "../img/tableOne.png";
//@ts-ignore
import sealthoracicflexOne from "../img/seal-thoracic-flex-One.jpg";
//@ts-ignore
import sealthoracicflexTwo from "../img/seal-thoracic-flex-Two.jpg";
//@ts-ignore
import sealthoracicflexTree from "../img/seal-thoracic-flex-Tree.png";
//@ts-ignore
import sealthoracicflexFour from "../img/seal-thoracic-flex-Four.jpg";
//@ts-ignore
import sealthoracicflexFive from "../img/seal-thoracic-flex-Five.png";
//@ts-ignore
import sealthoracicflexSevenOne from "../img/seal-thoracic-flex-SevenOne.png";
//@ts-ignore
import sealthoracicflexSevenTwo from "../img/seal-thoracic-flex-SevenTwo.jpg";



//@ts-ignore
import graftOne from "../img/graftOne.jpg";

//@ts-ignore
import graftTree from "../img/graftTree.png";
//@ts-ignore
import graftFour from "../img/graftFour.png";

//@ts-ignore
import graftSix from "../img/graftSix.png";
//@ts-ignore
import graftSeven from "../img/graftSeven.jpg";

//@ts-ignore
import slTwo from "../img/slTwo.jpg";



//@ts-ignore
import egisRemoteOne from '../img/egisRemoteOne.png';
//@ts-ignore
import egisRemoteTwo from '../img/egisRemoteTwo.png'
import {useNavigate, useParams} from "react-router-dom";
import Slider from "react-slick";


const Catalog = ({lang, setLang, setCurrentCatalog, currentCatalog}: any) => {
    // @ts-ignore
    const catalogs = [
        {name: 'EGIS'},
            {name: 'Hercules Vascular Stent'},
        {name: 'SEAL'},

    ],
        products = [
            {name: 'EGIS', products: [
                    {title: lang === 'en' ? 'Esophageal Stents' : "Endopróteses Esofágicas", img: EgisOne, img2: pOne, img3:pTwo, titleDescription: 'Self-expanding oesophageal stent: a full-thickness nitinol oesophageal stent:', descripton: ['Fully covered', 'Fully covered with antireflux valve', 'Completely uncovered', 'Fully coated with e-PTFE membrane (polytetrafluoroethylene does not perforate, prevents tumor infiltration and does not tear when the stent is implanted or removed)', 'Fully coated with e-PTFE diaphragm with antireflux valve', 'PULL delivery system - opening of the stent from the distal end', 'Availability of distal and proximal lasso for stent repositioning and removal'], testimony: ['Palliative treatment of malignant esophageal strictures', 'Benign tumors resistant to conventional treatment', 'Occlusion of esophageal-respiratory fistulas'], benefits: ['Silicone stent coating on the whole stent - fully covered stent, prevention of tumor infiltration; possibility of occlusion of esophageal-respiratory fistulas', 'High radial force - effective dilatation of strictures and resistance to compression', 'A special nitinol polishing process in stent production provides better stent flexibility and durability', 'Atraumatic stent ends - reducing the risk of hyperplasia and damage to the esophageal wall', 'Possibility of stent repositioning and removal', 'Excellent flexibility - stent and delivery system passability over complex esophageal anatomical areas', 'X-ray contrast gold markers - precise visualization and positioning of the stent'], AdditionalInformation: ['Total stent length: 90, 110, 130, 150, 170 mm', 'Diameter of the main part of the stent: 18, 20 mm', 'Coated stent delivery system diameter with antireflux valve - 18Fr', 'Uncoated stent delivery system diameter - 15Fr', 'Length of the delivery system - 70 cm', 'Compatible with 0.035`` (0.89 mm) conductor'],  video:  <iframe className='video__catal-item'  height="400" src="https://www.youtube.com/embed/KKWPSZ94ShM"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    title="S&amp;G Biotech-EGIS Esophageal Stent" frameBorder="0"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    allowFullScreen></iframe>, catalog: 'https://www.sngbio.co.kr/wp-content/uploads/2021/06/EGIS.pdf'},
                    {title: lang === 'en' ? 'Biliary Stents' : 'Stents Biliares', img: EgisTwo, img2:bil2, img3:bil3, titleDescription: 'Self-expanding nitinol biliary stent', descripton: ['Double-weave covered (silicone membrane is located between the stent weaves)', 'Double weave uncovered', 'The biliary stent delivery system has modifications for endoscopic insertion and percutaneous retrieval under fluoroscopic control.'], testimony: ['Palliative treatment of malignant bile duct strictures'], benefits: ['In a double-coated stent, the silicone membrane is located between the stent weaves, thereby preventing stent migration', 'A special nitinol polishing process in stent production provides better stent flexibility and durability', 'Unique, kink-resistant delivery system - easy stent release', 'High resistance force', 'Good stent dilatation capacity', 'X-ray contrast gold marks in the center and on both ends of the biliary stent'], AdditionalInformation: ['Total stent length: 30, 40, 50, 60, 70, 80, 90, 100, 120 mm', 'Stent diameter: 8, 10, 12 mm', 'Diameter of delivery system: 8Fr', 'Length of delivery system: 50, 180 cm.', 'Compatible with 0.035`` (0.89 mm) conductor'], video:
                            <iframe  className='video__catal-item'  height="400" src="https://www.youtube.com/embed/QbktizxQMZc"
                                    title="S&amp;G Biotech-EGIS Biliary Stent" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>, catalog: 'https://www.sngbio.co.kr/wp-content/uploads/2021/06/EGIS.pdf'},
                    {title: lang === 'en' ? 'Pyloric Stents' : 'Stents pilóricas', img: EgisSix, img2:pilor1, img3: pilor2, catalog: "https://www.sngbio.co.kr/wp-content/uploads/2021/06/EGIS.pdf", titleDescription: 'Self-expanding nitinol pyloroduodenal stent', descripton: ['Double-weave covered (silicone membrane is located between the stent weaves)', 'Double weave uncovered'],testimony: ['Palliative treatment of malignant pyloroduodenal strictures'], Contraindications: ['Small intestinal ischemia', 'Intestinal perforation', 'Intra-abdominal abscess', 'Severe ascites', 'Severe coagulopathy'],benefits: ['In the double-coated stent, the silicone membrane is located between the stent weaves, thereby preventing stent migration', 'A special nitinol polishing process in stent production provides better stent flexibility and strength', 'Excellent flexibility - easy passage of the stent through complex anatomical curves', 'X-ray contrast gold markers on the body of the stent and on both ends - excellent visualization of the stent', 'Diameter of the delivery system: 10Fr enables installation through the working channel of a 3.8 mm doodoscope'], AdditionalInformation: ['Total stent length: 40, 60, 80, 100, 120 mm', 'Stent diameter: 18, 20, 22, 24 mm', 'Diameter of delivery system: 10Fr', 'Length of delivery system: 120, 180 cm', 'Compatible with 0.035`` (0.89 mm) conductor'], video:
                            <iframe className='video__catal-item' height="400" src="https://www.youtube.com/embed/2_3Or4TmtB0"
                                    title="S&amp;G Biotech-EGIS Pyloric Stent" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>  },
                    {title: lang === 'en' ? 'Colorectal Stents' : 'Stents colorrectais', img: EgisTree, img2: '', img3: '', titleDescription: 'Self-expanding colorectal nitinol stent', descripton: ['Double-weave covered (silicone membrane is located between the stent weaves)', 'Double weave uncovered'], testimony: ['Palliative treatment of malignant rectal strictures', 'Palliative treatment of malignant strictures of the sigmoid and distal descending colon', 'Colorectal and/or colovesical fistulas (covered colorectal stents)'], Contraindications: ['Intestinal perforation', 'Severe ascites', 'Intra-abdominal abscess', 'Severe coagulopathy', 'Intestinal ischemia'], benefits: ['In a double-coated stent, the silicone membrane is located between the stent weaves, thereby preventing stent migration', 'A special nitinol polishing process in stent production provides better stent flexibility and strength', 'Excellent flexibility - easy passage of the stent through complex anatomical curves', 'High radial force - excellent stricture dilatation and resistance to compression', 'X-ray contrast gold markers on the stent body and both ends of the stent - excellent visualization of the stent'], AdditionalInformation: ['Total stent length: 40, 60, 80, 100, 120 mm', 'Stent diameter: 20, 22, 24, 26, 28, 30 mm', 'Diameter of delivery system: 10 Fr / 12 Fr', 'Length of delivery system: 80, 150, 220 cm', 'Compatible with 0.035`` (0.89 mm) conductor'], catalog: 'https://www.sngbio.co.kr/wp-content/uploads/2021/06/EGIS.pdf', video:
                            <iframe className='video__catal-item' height="400" src="https://www.youtube.com/embed/ryr9s40IEs4"
                                    title="S&amp;G Biotech EGIS Colorectal stent" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>},
                    {title: lang === 'en' ? 'Tracheobronchial stents' : "Stents traqueobrônquicos", img: EgisFive, titleDescription: 'Self-expanding nitinol stent:', descripton: ['Fully covered straight', 'Fully covered with one socket (socket positioned distally)', 'Completely uncovered straight'], catalog: 'https://www.sngbio.co.kr/wp-content/uploads/2021/06/EGIS.pdf', BronchialStent: ['Fully covered straight', 'Fully covered with one socket (socket is proximal)', 'Fully covered with two sockets', 'Completely uncovered straight'], testimony: ['Palliative treatment of tracheo/bronchial strictures and/or tracheo-esophageal fistulas caused by malignant neoplasms', 'Stenotic lesion of trachea or bronchi as a result of inoperable lung cancer', 'Tracheo-bronchial fistula due to lung or esophageal cancer'], benefits: ['The delivery device has a channel to allow the patient to breathe during stent placement', 'High radial force - excellent stricture dilatation and resistance to compression'], AdditionalInformation: ['Total length of stent 40,50, 60, 70, 80, 90 mm', 'Stent diameter: 16, 18, 20 mm', 'Diameter of delivery system: 21 Fr', 'Length of delivery system: 60 cm', 'Bronchial:', 'Total length of stent 30, 40, 50, 60 mm', 'Stent diameter: 10, 12, 14 mm', 'Diameter of delivery system: 15 Fr', 'Length of delivery system: 70 cm'], video:
                            <iframe className='video__catal-item' height="400" src="https://www.youtube.com/embed/l7LPEqr2qaw"
                                    title="S&amp;G Biotech-EGIS Airway Stent" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>, img2: a3, img3: a2 },
                    {title: lang === 'en' ? 'Endo-USI-guided stents' : 'Endo-USI-guiados stents', img: EgisSeven, img2:skdeOne,  customTitleOne: 'Types of stents', customTitleTable:
                            <table className="info_index">
                                <tbody>
                                <tr>
                                    <th>Stent type</th>
                                    {/*@ts-ignore*/}
                                    <th colSpan={2} width='20%'>Stent diameter, mm</th>
                                    {/*@ts-ignore*/}
                                    <th width='20%'>Stent body length, mm</th>
                                    {/*@ts-ignore*/}
                                    <th width='20%'>Total length of stent, mm</th>
                                </tr>
                                <tr>
                                    <th className="left">For drainage of RV cysts</th>
                                    <td className="center">14</td>
                                    <td className="center">16</td>
                                    <td className="center" rowSpan={3}>10, 20, 30, 40</td>
                                    <td className="center" rowSpan={3}>18, 28, 38, 48</td>
                                </tr>
                                <tr>
                                    <td>Funnel diameter, mm</td>
                                    <td className="center" colSpan={2}>26</td>
                                </tr>
                                <tr>
                                    <td>Diameter of the delivery device</td>
                                    <td className="center" colSpan={2}>10&nbsp;Fr&nbsp;/ 3,33&nbsp;mm</td>
                                </tr>
                                <tr>
                                    <td colSpan={5}>&nbsp;</td>
                                </tr>
                                <tr>
                                    <th className="left">To form cholecysto-duodeno anastomoses</th>
                                    <td className="center" colSpan={2}>10</td>
                                    <td className="center" rowSpan={3}>40, 50, 60, 70, 80, 90, 100</td>
                                    <td className="center" rowSpan={3}>48, 58, 68, 78, 88, 98, 108</td>
                                </tr>
                                <tr>
                                    <td>Funnel diameter, mm</td>
                                    <td className="center" colSpan={2}>18</td>
                                </tr>
                                <tr>
                                    <td>Diameter of the delivery device</td>
                                    <td className="center" colSpan={2}>8&nbsp;Fr&nbsp;/ 2,67&nbsp;mm.</td>
                                </tr>
                                <tr>
                                    <td colSpan={5}>&nbsp;</td>
                                </tr>
                                <tr>
                                    <th className="left">To form hepato-gastro anastomoses</th>
                                    <td className="center" colSpan={2}>10</td>
                                    <td className="center" rowSpan={3}>60, 80, 100</td>
                                    <td className="center" rowSpan={3}>68, 88, 108</td>
                                </tr>
                                <tr>
                                    <td>Funnel diameter, mm</td>
                                    <td className="center" colSpan={2}>18</td>
                                </tr>
                                <tr>
                                    <td>Diameter of the delivery device</td>
                                    <td className="center" colSpan={2}>8&nbsp;Fr&nbsp;/ 2,67&nbsp;mm</td>
                                </tr>
                                </tbody>
                            </table>, titleDescription: 'Self-expanding full-coverage nitinol stent with two sockets', testimony: ['Original design', 'Excellent radial stability', 'A Unique Anti-Migration Mechanism'], AdditionalInformation: ['Length of the main part of the stent: 10, 20, 30, 40 mm', 'Total stent length: 18, 28, 38, 48 mm', 'Stent diameter - 10 mm', 'Diameter of the delivery system - 8 Fr', 'Length of the delivery system - 180 cm', 'Compatible with 0.035`` (0.89 mm) conductor'],  catalog: 'https://www.sngbio.co.kr/wp-content/uploads/2021/06/EGIS.pdf',   descripton: [] },
                    {title: lang === 'en' ? 'Production Of EGIS Stents' : "Produção de Stents EGIS", img: EgisFour, video:
                            <iframe  className='video__catal-item' height="400" src="https://www.youtube.com/embed/_WEnho3noDc"
                                    title="EGIS Stent Manufactering Process" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>,  catalog: 'https://www.sngbio.co.kr/wp-content/uploads/2021/06/EGIS.pdf', titleDescription: '', descripton: [],

                    },


                ]},
            {name: 'SEAL', products: [
                    {title: lang === 'en' ? 'SEAL Thoracic Flex' : 'SELO Torácico Flex', customTitleTable:
                            <table className="info_index">
                            <tbody>
                                <tr>
                                    {/*@ts-ignore*/}
                                    <th width="20%">Type</th>
                                    {/*@ts-ignore*/}
                                    <th width="20%">Proximal diameter, mm</th>
                                    {/*@ts-ignore*/}
                                    <th width="20%">Distal diameter, mm</th>
                                    {/*@ts-ignore*/}
                                    <th width="20%">Length, cm</th>
                                    {/*@ts-ignore*/}
                                    <th width="20%">Delivery system, Fr.</th>
                                </tr>
                                <tr>
                                    <td>With open proximal part</td>
                                    <td rowSpan={2} colSpan={2}>18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46,
                                        48
                                    </td>
                                    <td rowSpan={2}>6, 8, 11, 13, 15, 18, 20</td>
                                    <td rowSpan={2}>18 ~ 22 mm 15 Fr<br/>24 ~ 38 mm 18 Fr<br/>40 ~ 48 mm 21 Fr</td>
                                </tr>
                                <tr>
                                    <td>Fully covered</td>
                                </tr>
                            </tbody>
                        </table>,   img: SealFive, video: '', catalog: 'https://www.sngbio.co.kr/wp-content/uploads/2021/06/SEAL.pdf', descripton: [], customTitleOne: 'SEAL Thoracic Flex stent graft system', customTitleOneImg:sealthoracicflexOne,  customTitleTwo: 'Features and Benefits',customDescriptionTwo: 'The low-profile and flexible delivery system greatly facilitates access to the lesion. Compared to other products, this stent graft system has a smaller diameter. During surgery, this can help prevent complications such as blood vessel rupture', customTitleTwoImg: sealthoracicflexTwo, customTitleTree: 'Stent graft staging system', customDescriptionTree: 'The SEAL stent-graft operates on the principle of "three return movements system", which significantly simplifies the procedure in comparison with analogues', customTitleTreeImg: sealthoracicflexTree,  customTitleFour: 'Self-expanding stent graft', customDescriptionFour: 'The SEAL stent-graft is a self-expanding nitinol wire stent with a large radial force. Its insertion does not require the use of additional devices (conductive catheter, balloon catheter)',customTitleFourImg: sealthoracicflexFour, customTitleFive: 'Inward bend to prevent new damage', customDescriptionFive: 'The ends of the proximal part of the stent, which can exert pressure on the walls of blood vessels, are curved inward, which reduces the likelihood of damage to the aortic walls', customTitleFiveImg: sealthoracicflexFive,    customTitleSeven: 'Links', customDescriptionSeven: 'Jang-Young Kim, MD, Woo-Ik Jang, MD, Young-Soo Kim, MD, Kyung-Taek Park, MD, Ji-Yoon Liu: Single-stage ascending aortic replacement procedure and percutaneous vascular treatment for ascending and descending aortic aneurysms. - Korean Journal of Thoracic and Cardiovascular Surgery 2009; 42: 524-527', customTitleSevenImg: sealthoracicflexSevenOne, sealthoracicflexSevenTwo:sealthoracicflexSevenTwo },
                    {title: lang === 'en' ? 'SEAL Thoracic Flex OP' : 'SELO Torácico Flex OP', img: SealOne, titleDescription: 'SEAL Thoracic Flex OP stent graft system', customTitleOne: 'Ordering Information', customTitleTable:
                            <table className="info_index">
                                <tbody>
                                <tr>
                                    {/*@ts-ignore*/}
                                    <th width="16%">Type</th>
                                    {/*@ts-ignore*/}
                                    <th width="16%">Proximal diameter, mm</th>
                                    {/*@ts-ignore*/}
                                    <th width="16%">Length, cm</th>
                                    {/*@ts-ignore*/}
                                    <th width="16%">Graft length, mm</th>
                                    {/*@ts-ignore*/}
                                    <th width="20%">Delivery system, Fr.</th>
                                </tr>
                                <tr>
                                    <td>Frozen elephant trunk OP</td>
                                    <td>22, 24, 26, 28, 30, 32, 34, 36, 38, 40</td>
                                    <td>11, 13, 15, 17, 20</td>
                                    <td>30</td>
                                    <td> 22 ~ 40 mm 21 Fr </td>
                                </tr>
                                </tbody>
                            </table> ,  descripton: ['Stent material - nitinol, double weave', 'Coating - ultra-thin multifilament polyester', 'Easy to use delivery system', 'Self-expanding stent graft', 'Surgical stent-graft for frozen elephant trunk technique', 'Hybrid stent-graft for aortic anastomosis'], catalog: 'https://www.sngbio.co.kr/wp-content/uploads/2021/06/SEAL.pdf' },
                    {title: lang === 'en' ? 'SEAL Thoracic Flex Fenestrated' : 'VEDAÇÃO Fenestração Torácica Flex Fenestração', customTitleTable:
                            <table className="info_index">
                                <tbody>
                                <tr>
                                    {/*@ts-ignore*/}
                                    <th width="16%">Typeп</th>
                                    {/*@ts-ignore*/}
                                    <th width="16%">Proximal diameter, mm</th>
                                    {/*@ts-ignore*/}
                                    <th width="16%">Distal diameter, mm</th>
                                    {/*@ts-ignore*/}
                                    <th width="16%">Fenestration diameter, mm</th>
                                    {/*@ts-ignore*/}
                                    <th width="16%">Length, mm</th>
                                    {/*@ts-ignore*/}
                                    <th width="20%">Delivery system, Fr.</th>
                                </tr>
                                <tr>
                                    <td>SEAL Thoracic Flex Fenestrated</td>
                                    <td colSpan={2}>20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48</td>
                                    <td>8, 10</td>
                                    <td>80, 110, 130, 150, 180, 200</td>
                                    <td>18 ~ 22 mm 15 Fr<br/>24 ~ 40 mm 18 Fr<br/>42 ~ 48 mm 21 Fr</td>
                                </tr>
                                </tbody>
                            </table>, img: SealTwo, titleDescription: 'SEAL Thoracic Flex Fenestrated Stent-Graft System', customTitleOne: 'Ordering Information' , descripton: ['Stent material - nitinol, double weave', 'Coating - ultra-thin multifilament polyester', 'Easy to use delivery system', 'Self-expanding stent graft', 'Low profile delivery system', 'Fenestration 8 mm or 10 mm', 'Available for ordering tapered fenestrated stent grafts, diameter changes 8, 6, 4 mm'], catalog: 'https://www.sngbio.co.kr/wp-content/uploads/2021/06/SEAL.pdf'},
                    {title: lang === 'en' ? 'SEAL Bare Type' : 'VEDAÇÃO Tipo nua', catalog: 'https://www.sngbio.co.kr/wp-content/uploads/2021/06/SEAL.pdf', img: SealTree, titleDescription: 'SEAL Bare Type Stent-Graft System', descripton: ['Stent material - nitinol, double weave', 'Easy to use delivery system', 'Self-expanding stent', 'Low profile delivery system'], customTitleOne: 'Ordering Information', customTitleTable:
                            <table className="info_index">
                                <tbody>
                                <tr>
                                    {/*@ts-ignore*/}
                                    <th width="20%">Type</th>
                                    {/*@ts-ignore*/}
                                    <th width="20%">Proximal diameter, mm</th>
                                    {/*@ts-ignore*/}
                                    <th width="20%">Distal diameter, mm</th>
                                    {/*@ts-ignore*/}
                                    <th width="20%">Length, mm</th>
                                    {/*@ts-ignore*/}
                                    <th width="20%">Delivery system, Fr.</th>
                                </tr>
                                <tr>
                                    <td>SEAL Bare Type</td>
                                    <td colSpan={2}>37, 34, 32, 30, 28</td>
                                    <td>140, 120, 100</td>
                                    <td>18 ~ 22 mm 15 Fr<br/>24 ~ 40 mm 18 Fr<br/>42 ~ 48 mm 21 Fr</td>
                                </tr>
                                </tbody>
                            </table>},
                    {title: lang === 'en' ? 'Tracheobronchial stents' : 'Stents traqueobrônquicos', customTitleTable: <>
                            <table className="info_index">
                                <tbody>
                                <tr>
                                    {/*@ts-ignore*/}
                                    <th width="25%">Type</th>
                                    {/*@ts-ignore*/}
                                    <th width="25%">Proximal diameter, mm</th>
                                    {/*@ts-ignore*/}
                                    <th width="25%">Length, mm</th>
                                    {/*@ts-ignore*/}
                                    <th width="25%">Delivery system, Fr.</th>
                                </tr>
                                <tr>
                                    <td>Y type</td>
                                    <td>22, 24, 26, 28, 30, 32, 34, 36</td>
                                    <td>50</td>
                                    <td>22 мм 15 Fr<br/>24 ~ 30 мм 18 Fr<br/>32 ~ 36 мм 21 Fr</td>
                                </tr>
                                </tbody>
                            </table>
                            <table className="info_index">
                                <tbody>
                                <tr>
                                    {/*@ts-ignore*/}
                                    <th width="20%">Type</th>
                                    {/*@ts-ignore*/}
                                    <th width="20%">Proximal diameter, mm</th>
                                    {/*@ts-ignore*/}
                                    <th width="20%">Distal diameter, mm</th>
                                    {/*@ts-ignore*/}
                                    <th width="20%">Length, mm</th>
                                    {/*@ts-ignore*/}
                                    <th width="20%">Delivery system, Fr.</th>
                                </tr>
                                <tr>
                                    <td>SEAL Extension</td>
                                    <td>12</td>
                                    <td>12, 14, 16, 18, 20, 22, 24, 26, 28</td>
                                    <td>60, 80, 100, 120</td>
                                    <td>15 Fr</td>
                                </tr>
                                </tbody>
                            </table>
                            <table className="info_index">
                                <tbody>
                                <tr>
                                    {/*@ts-ignore*/}
                                    <th width="33.33%">Aortic diameter, mm</th>
                                    {/*@ts-ignore*/}
                                    <th width="33.33%">Stent graft diameter, mm</th>
                                    {/*@ts-ignore*/}
                                    <th width="33.33%">Oversizing</th>
                                </tr>
                                <tr>
                                    <td>16~20</td>
                                    <td>20, 22, 24</td>
                                    <td>120% oversizing</td>
                                </tr>
                                <tr>
                                    <td>21~25</td>
                                    <td>26, 28, 30</td>
                                    <td>120% oversizing</td>
                                </tr>
                                <tr>
                                    <td>26~30</td>
                                    <td>32, 34, 36</td>
                                    <td>120% oversizing</td>
                                </tr>
                                <tr>
                                    <td>31~36</td>
                                    <td>38, 40, 44</td>
                                    <td>120% oversizing</td>
                                </tr>
                                <tr>
                                    <td>37~40</td>
                                    <td>46, 48</td>
                                    <td>120% oversizing</td>
                                </tr>
                                </tbody>
                            </table>
                        </>,
                     catalog: 'https://www.sngbio.co.kr/wp-content/uploads/2021/06/SEAL.pdf', img: SealSix, descripton: [], customTitleOne: 'Ordering Information', customTitleOneImg: graftOne, customTitleTwo: '15 FR compared to 24 FR', customDescriptionTwo: 'The low-profile and flexible delivery system greatly facilitates access to the lesion. Compared to other products, this stent graft system has a smaller diameter. During surgery, this can help prevent complications such as ruptured blood vessels',  customTitleTree: 'Stent graft staging system', customDescriptionTree: 'The SEAL stent-graft operates on the principle of "three return movements system", which significantly simplifies the procedure in comparison with analogues', customTitleTreeImg: graftTree, customTitleFour: 'Self-expanding stent graft', customDescriptionFour: 'The SEAL stent-graft is a self-expanding nitinol wire stent with a large radial force. Its insertion does not require the use of additional devices (conductive catheter, balloon catheter)', customTitleFourImg: graftFour,   customTitleSeven: 'Links', customDescriptionSeven: 'Toh Young Lee, MD; Sung-Kwon Kang, MD; Donghoon Choi, MD; Gwan-Hoon Lee, MD; Munehiro Maeda, MD; Byung-seok Noh, MD; Jae-Hwan Won, MD; Jang-Won Kim, MD; Eun-Sang Kim, BSc; Ho-Young Song, MD: Application of a percutaneously inserted modular stent graft for the treatment of abdominal aortic aneurysm. - J ENDOVASC THER ("Journal of Endovascular Therapy") 2003; 10: 752-759.', customTitleSevenImg: graftSix, sealthoracicflexSevenTwo: graftSeven },
                    {title: lang === 'en' ? 'SEAL Uni-iliac' : 'SEAL Uni-iliac',
                        catalog: 'https://www.sngbio.co.kr/wp-content/uploads/2021/06/SEAL.pdf',img: SealFour, titleDescription: 'SEAL Uni-iliac stent graft system', descripton: ['Stent material - nitinol, double weave', 'Coating - ultra-thin multifilament polyester', 'Easy to use delivery system', 'Self-expanding stent graft', 'Low profile delivery system', 'Suprarenal fixation system', 'Suprarenal fixation system'], customTitleOne: 'Ordering Information', customTitleTable:
                            <table className="info_index">
                                <tbody>
                                <tr>
                                    {/*@ts-ignore*/}
                                    <th width="20%">Type</th>
                                    {/*@ts-ignore*/}
                                    <th width="20%">Proximal diameter, mm</th>
                                    {/*@ts-ignore*/}
                                    <th width="20%">Distal diameter, mm</th>
                                    {/*@ts-ignore*/}
                                    <th width="20%">Length, cm</th>
                                    {/*@ts-ignore*/}
                                    <th width="20%">Delivery system, Fr.</th>
                                </tr>
                                <tr>
                                    <td>Uni-iliac type</td>
                                    <td>18, 20,22, 24, 26, 28, 30, 32, 34, 36</td>
                                    <td>12</td>
                                    <td>6, 8, 10</td>
                                    <td>18 ~ 22 мм 15 Fr<br/>24 ~ 36 мм 18 Fr</td>
                                </tr>
                                </tbody>
                            </table>},
                    {title: lang === 'en' ? 'SEAL Abdominal (Branch)' : 'SELO Abdominal (Ramo)',
                        catalog: 'https://www.sngbio.co.kr/wp-content/uploads/2021/06/SEAL.pdf',img2: slTwo, img: SealSeven, titleDescription: 'SEAL Abdominal (Branch) stent graft system', descripton: ['Possibility of stenting of the internal iliac artery', 'A gold marker at the branch of the internal iliac artery branch is used for ease of positioning', 'Recommended for iliac aneurysm lumen, diameter greater than 20 mm, length 45 mm', 'Stent material - nitinol, double weave', 'Easy to use delivery system with a low profile'], customTitleOne: 'Ordering Information', customTitleTable:
                            <table className="info_index">
                                <tbody>
                                <tr>
                                    {/*@ts-ignore*/}
                                    <th width="20%">Proximal diameter, mm</th>
                                    {/*@ts-ignore*/}
                                    <th width="20%">Jaw length, mm</th>
                                    {/*@ts-ignore*/}
                                    <th width="20%">Branch diameter, mm</th>
                                    {/*@ts-ignore*/}
                                    <th width="20%">Length, cm</th>
                                    {/*@ts-ignore*/}
                                    <th width="20%">Delivery system, Fr.</th>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>40</td>
                                    <td>8</td>
                                    <td>8, 9, 10, 11</td>
                                    <td>15</td>
                                </tr>
                                </tbody>
                            </table> }
                ]},
            {name: 'Hercules Vascular Stent', products: [ {title: lang === 'en' ? 'Hercules Vascular Stent' : 'Stent Vascular Hercules', img: egisRemoteOne, img2:egisRemoteTwo, titleDescription: 'Strengths', descripton: ['Twist structure for sufficient radial force. Excellent flexibility & conformability. Radio-opaque makers with good visibility under radioscopy', 'Hercules Vascular stent is designed to expand the stenosis, occurred in blood vessels',
                        'The stent is a cylindrical medical device, woven with Nitinol. It has excellent radial force to push out the occluded lesion while maintaining long patency', 'With remarkable conformability, it can perfectly adjust the inner wall of the vessel'],
                    customTitleTable: <table className="info_index">
                        <tbody>

                        <tr>
                            {/*@ts-ignore*/}
                            <th width="16%" rowSpan={2}>OTW</th>
                            <th colSpan={2}>Size</th>
                            <th colSpan={2}>Introducer</th>
                        </tr>
                        <tr>

                            {/*@ts-ignore*/}
                            <th width="16%">Diameter (mm)</th>
                            {/*@ts-ignore*/}
                            <th width="16%">Length (mm)</th>
                            {/*@ts-ignore*/}
                            <th width="16%">Length (Fr) </th>
                            {/*@ts-ignore*/}
                            <th width="16%">Usable Length (mm)</th>

                        </tr>
                        <tr>
                            <td>VS-JG-**-**</td>
                            <td >6 ~ 24</td>
                            <td>40, 50, 60, 70, 80, 90,
                                100, 120</td>
                            <td>8Fr(8 ~ 16mm),
                                12Fr(18 ~ 22mm)</td>
                            <td>900mm</td>

                        </tr>
                        </tbody>
                    </table>, customTitleOne: 'Ordering Information'
                }]}
        ]



    let navigate = useNavigate(),
        params = useParams()

    const slider = useRef(null)


    const setCurrentCat = (title:string, id?: string) => {
        setCurrentCatalog(title)
        if(id) return navigate(`/catalog/${title}/${id}`)

        navigate(`/catalog/${title}`)

    }

    useEffect(() => {
        if(params.catalog) {
            setCurrentCat(params.catalog, params.itemId)
        }

            window.scrollTo(0, 0)

    }, [])


    const seeProduct = (catalog: string, indexProduct: number) => {
        navigate(`/catalog/${catalog}/${indexProduct}`)
    }


    return (
        <>

            <section className='catalog__main'>
                <div className="catalog__left">
                    <h4>{lang === 'en' ? 'Catalog' : "Catálogo"} </h4>
                    <div className='catalog__navig'>
                        {catalogs.map((catalog, index: number) => <button key={index} onClick={() => setCurrentCat(catalog.name)} className={`${currentCatalog === catalog.name ? 'activeName' : ''}`}>{catalog.name}</button>)}
                    </div>
                </div>
                <div className="catalog__right">

                    {!params.itemId && currentCatalog !== 'Merit Medical' && currentCatalog !== 'Lepu Medical' &&     <div className='catalog_down'>
                        <a target='_blank' href={`${currentCatalog === 'EGIS' ? 'https://www.sngbio.co.kr/wp-content/uploads/2021/06/EGIS.pdf' : currentCatalog === 'SEAL' ? 'https://www.sngbio.co.kr/wp-content/uploads/2021/06/SEAL.pdf' : currentCatalog === 'Hercules Vascular Stent' ?  'https://www.sngbio.co.kr/wp-content/uploads/2021/05/SNGBIO_EbookM.pdf' :  ' '} `}>
                            <button className='download_catalog'><svg height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                                                      viewBox="0 0 303.188 303.188" >
                                <g>
                                    <polygon fill="#E8E8E8" points="219.821,0 32.842,0 32.842,303.188 270.346,303.188 270.346,50.525 	"/>
                                    <path fill="#FB3449" d="M230.013,149.935c-3.643-6.493-16.231-8.533-22.006-9.451c-4.552-0.724-9.199-0.94-13.803-0.936
                            c-3.615-0.024-7.177,0.154-10.693,0.354c-1.296,0.087-2.579,0.199-3.861,0.31c-1.314-1.36-2.584-2.765-3.813-4.202
                            c-7.82-9.257-14.134-19.755-19.279-30.664c1.366-5.271,2.459-10.772,3.119-16.485c1.205-10.427,1.619-22.31-2.288-32.251
                            c-1.349-3.431-4.946-7.608-9.096-5.528c-4.771,2.392-6.113,9.169-6.502,13.973c-0.313,3.883-0.094,7.776,0.558,11.594
                            c0.664,3.844,1.733,7.494,2.897,11.139c1.086,3.342,2.283,6.658,3.588,9.943c-0.828,2.586-1.707,5.127-2.63,7.603
                            c-2.152,5.643-4.479,11.004-6.717,16.161c-1.18,2.557-2.335,5.06-3.465,7.507c-3.576,7.855-7.458,15.566-11.815,23.02
                            c-10.163,3.585-19.283,7.741-26.857,12.625c-4.063,2.625-7.652,5.476-10.641,8.603c-2.822,2.952-5.69,6.783-5.941,11.024
                            c-0.141,2.394,0.807,4.717,2.768,6.137c2.697,2.015,6.271,1.881,9.4,1.225c10.25-2.15,18.121-10.961,24.824-18.387
                            c4.617-5.115,9.872-11.61,15.369-19.465c0.012-0.018,0.024-0.036,0.037-0.054c9.428-2.923,19.689-5.391,30.579-7.205
                            c4.975-0.825,10.082-1.5,15.291-1.974c3.663,3.431,7.621,6.555,11.939,9.164c3.363,2.069,6.94,3.816,10.684,5.119
                            c3.786,1.237,7.595,2.247,11.528,2.886c1.986,0.284,4.017,0.413,6.092,0.335c4.631-0.175,11.278-1.951,11.714-7.57
                            C231.127,152.765,230.756,151.257,230.013,149.935z M119.144,160.245c-2.169,3.36-4.261,6.382-6.232,9.041
                            c-4.827,6.568-10.34,14.369-18.322,17.286c-1.516,0.554-3.512,1.126-5.616,1.002c-1.874-0.11-3.722-0.937-3.637-3.065
                            c0.042-1.114,0.587-2.535,1.423-3.931c0.915-1.531,2.048-2.935,3.275-4.226c2.629-2.762,5.953-5.439,9.777-7.918
                            c5.865-3.805,12.867-7.23,20.672-10.286C120.035,158.858,119.587,159.564,119.144,160.245z M146.366,75.985
                            c-0.602-3.514-0.693-7.077-0.323-10.503c0.184-1.713,0.533-3.385,1.038-4.952c0.428-1.33,1.352-4.576,2.826-4.993
                            c2.43-0.688,3.177,4.529,3.452,6.005c1.566,8.396,0.186,17.733-1.693,25.969c-0.299,1.31-0.632,2.599-0.973,3.883
                            c-0.582-1.601-1.137-3.207-1.648-4.821C147.945,83.048,146.939,79.482,146.366,75.985z M163.049,142.265
                            c-9.13,1.48-17.815,3.419-25.979,5.708c0.983-0.275,5.475-8.788,6.477-10.555c4.721-8.315,8.583-17.042,11.358-26.197
                            c4.9,9.691,10.847,18.962,18.153,27.214c0.673,0.749,1.357,1.489,2.053,2.22C171.017,141.096,166.988,141.633,163.049,142.265z
                             M224.793,153.959c-0.334,1.805-4.189,2.837-5.988,3.121c-5.316,0.836-10.94,0.167-16.028-1.542
                            c-3.491-1.172-6.858-2.768-10.057-4.688c-3.18-1.921-6.155-4.181-8.936-6.673c3.429-0.206,6.9-0.341,10.388-0.275
                            c3.488,0.035,7.003,0.211,10.475,0.664c6.511,0.726,13.807,2.961,18.932,7.186C224.588,152.585,224.91,153.321,224.793,153.959z"/>
                                    <polygon fill="#FB3449" points="227.64,25.263 32.842,25.263 32.842,0 219.821,0 	"/>
                                    <g>
                                        <path fill="#A4A9AD" d="M126.841,241.152c0,5.361-1.58,9.501-4.742,12.421c-3.162,2.921-7.652,4.381-13.472,4.381h-3.643
                                v15.917H92.022v-47.979h16.606c6.06,0,10.611,1.324,13.652,3.971C125.321,232.51,126.841,236.273,126.841,241.152z
                                 M104.985,247.387h2.363c1.947,0,3.495-0.546,4.644-1.641c1.149-1.094,1.723-2.604,1.723-4.529c0-3.238-1.794-4.857-5.382-4.857
                                h-3.348C104.985,236.36,104.985,247.387,104.985,247.387z"/>
                                        <path fill="#A4A9AD" d="M175.215,248.864c0,8.007-2.205,14.177-6.613,18.509s-10.606,6.498-18.591,6.498h-15.523v-47.979
                                h16.606c7.701,0,13.646,1.969,17.836,5.907C173.119,235.737,175.215,241.426,175.215,248.864z M161.76,249.324
                                c0-4.398-0.87-7.657-2.609-9.78c-1.739-2.122-4.381-3.183-7.926-3.183h-3.773v26.877h2.888c3.939,0,6.826-1.143,8.664-3.43
                                C160.841,257.523,161.76,254.028,161.76,249.324z"/>
                                        <path fill="#A4A9AD" d="M196.579,273.871h-12.766v-47.979h28.355v10.403h-15.589v9.156h14.374v10.403h-14.374
                                L196.579,273.871L196.579,273.871z"/>
                                    </g>
                                    <polygon fill="#D1D3D3" points="219.821,50.525 270.346,50.525 219.821,0 	"/>
                                </g>
                            </svg> {lang === 'en' ? 'Download Catalog' : 'Descarregar Catálogo'} </button>
                        </a>

                        </div>
                      }

                    <div className='catalog__items'>
                        {products.map((product, i) => {

                            // @ts-ignore
                            if(params.itemId && product.name === currentCatalog ) return <div key={i} className='catalog__item-description'>
                                <svg onClick={() => navigate(`/catalog/${currentCatalog}`)} className="backinCatalog" width="20" height="20" viewBox="0 0 24 24"
                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.29297 4.70703L14.586 12L7.29297 19.293L8.70697 20.707L17.414 12L8.70697 3.29303L7.29297 4.70703Z"
                                        fill="#000"></path>
                                </svg>
                                <h4 className='catalog__item-title'>{product.products[+params.itemId].title}</h4>
                                <div className='slider__catal-wrapper'>
                                    <Slider nextArrow={
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.29303 4.707L14.586 12L7.29303 19.293L8.70703 20.707L17.414 12L8.70703 3.293L7.29303 4.707Z" fill="#ADADAD"/>
                                        </svg>

                                     } prevArrow={
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.5386 19.205L10.1213 12.0384L17.2879 4.62114L15.8498 3.23164L7.29375 12.087L16.1491 20.6431L17.5386 19.205Z" fill="#ADADAD"/>
                                        </svg> } slidesToShow={1} ref={slider}  className='slider__catal-item'>
                                        <div className='slider__catalog-item'>
                                            <img src={product.products[+params.itemId].img} width={200} alt="img-slider-item"/>

                                        </div>

                                        {/*@ts-ignore*/}
                                        {product.products[+params.itemId].img2 && <div className='slider__catalog-item'>
                                            {/*@ts-ignore*/}
                                            <img src={product.products[+params.itemId].img2} width={200} alt="img-slider-item"/>

                                        </div>}
                                        {/*@ts-ignore*/}
                                        {product.products[+params.itemId].img3 && <div className='slider__catalog-item'>
                                            {/*@ts-ignore*/}
                                            <img src={product.products[+params.itemId].img3} width={200} alt="img-slider-item"/>

                                        </div>}

                                    </Slider>


                                </div>


                                {/*@ts-ignore*/}
                                <p className='slider__catal-title-wrapper'>{[product.products[+params.itemId].titleDescription]}</p>
                                <ul>
                                    {/*@ts-ignore*/}
                                    {product.products[+params.itemId].descripton.map((title:string, indexnumber) => <li key={indexnumber}>{title}</li> )}

                                </ul>


                                {/*@ts-ignore*/}
                                {product.products[+params.itemId].customTitleOne && <>
                                    {/*@ts-ignore*/}
                                    <h5>{product.products[+params.itemId].customTitleOne}</h5>
                                    {/*@ts-ignore*/}
                                    {product.products[+params.itemId].customTitleTable && <>{product.products[+params.itemId].customTitleTable}</>}

                                    {/*@ts-ignore*/}
                                    {product.products[+params.itemId].customTitleOneImg && <img  className='typesImage-item' src={product.products[+params.itemId].customTitleOneImg} alt="titleImg"/> }
                                </>}
                                {/*@ts-ignore*/}
                                {product.products[+params.itemId].customTitleTwo && <>
                                    {/*@ts-ignore*/}
                                    <h5>{product.products[+params.itemId].customTitleTwo}</h5>
                                    {/*@ts-ignore*/}
                                    {product.products[+params.itemId].customTitleTwoImg &&  <img  className='typesImage-item' src={product.products[+params.itemId].customTitleTwoImg} alt="titleImg"/>
                                    }

                                    <ul>
                                        {/*@ts-ignore*/}
                                        <li>{product.products[+params.itemId].customDescriptionTwo}</li>
                                    </ul>


                                 </>}
                                {/*@ts-ignore*/}
                                {product.products[+params.itemId].customTitleTree && <>
                                    {/*@ts-ignore*/}
                                    <h5>{product.products[+params.itemId].customTitleTree}</h5>
                                    {/*@ts-ignore*/}
                                    <img  height={'300px'} className='typesImage-item' src={product.products[+params.itemId].customTitleTreeImg} alt="titleImg"/>

                                    <ul>
                                        {/*@ts-ignore*/}
                                        <li>{product.products[+params.itemId].customDescriptionTree}</li>
                                    </ul>


                                </>}
                                {/*@ts-ignore*/}
                                {product.products[+params.itemId].customTitleFour && <>
                                    {/*@ts-ignore*/}
                                    <h5>{product.products[+params.itemId].customTitleFour}</h5>
                                    {/*@ts-ignore*/}
                                    {product.products[+params.itemId].customTitleFourImg && <img  className='typesImage-item' src={product.products[+params.itemId].customTitleFourImg} alt="titleImg"/> }

                                    <ul>
                                        {/*@ts-ignore*/}
                                        <li>{product.products[+params.itemId].customDescriptionFour}</li>
                                    </ul>


                                </>}
                                {/*@ts-ignore*/}
                                {product.products[+params.itemId].customTitleFive && <>
                                    {/*@ts-ignore*/}
                                    <h5>{product.products[+params.itemId].customTitleFive}</h5>
                                    {/*@ts-ignore*/}
                                    {product.products[+params.itemId].customTitleFiveImg &&    <img  className='typesImage-item' src={product.products[+params.itemId].customTitleFiveImg} alt="titleImg"/>
                                    }

                                    <ul>
                                        {/*@ts-ignore*/}
                                        <li>{product.products[+params.itemId].customDescriptionFive}</li>
                                    </ul>


                                </>}
                                {/*@ts-ignore*/}
                                {product.products[+params.itemId].customTitleSix && <>
                                    {/*@ts-ignore*/}
                                    <h5>{product.products[+params.itemId].customTitleSix}</h5>
                                    {/*@ts-ignore*/}
                                    <img width='60%'  className='typesImage-item-nw' src={product.products[+params.itemId].customTitleSixImg} alt="titleImg"/>




                                </>}
                                {/*@ts-ignore*/}
                                {product.products[+params.itemId].customTitleSeven && <>
                                    {/*@ts-ignore*/}
                                    <h5>{product.products[+params.itemId].customTitleSeven}</h5>
                                    {/*@ts-ignore*/}
                                    <img  className='typesImage-item' src={product.products[+params.itemId].customTitleSevenImg} alt="titleImg"/>
                                    {/*@ts-ignore*/}
                                    <img  className='typesImage-item' src={product.products[+params.itemId].sealthoracicflexSevenTwo} alt="titleImg"/>

                                    <ul>
                                        {/*@ts-ignore*/}
                                        <li>{product.products[+params.itemId].customDescriptionSeven}</li>
                                    </ul>


                                </>}

                                {/*@ts-ignore*/}
                                {product.products[+params.itemId].BronchialStent ? <>
                                    <h5>Bronchial Stent</h5>
                                    <ul>
                                        {/*@ts-ignore*/}
                                        {product.products[+params.itemId].BronchialStent.map((title:string, indexnumber) => <li key={indexnumber}>{title}</li> )}

                                    </ul>
                                </>  : ''}
                                {/*@ts-ignore*/}
                                {product.products[+params.itemId].testimony && <>
                                    <h5>Testimony</h5>
                                    <ul>
                                        {/*@ts-ignore*/}
                                        {product.products[+params.itemId].testimony.map((title:string, indexnumber) => <li key={indexnumber}>{title}</li> )}

                                    </ul>
                                </> }

                                {/*@ts-ignore*/}
                                {product.products[+params.itemId].Contraindications ? <>
                                    <h5>Contraindications</h5>
                                    <ul>
                                        {/*@ts-ignore*/}
                                        {product.products[+params.itemId].Contraindications.map((title:string, indexnumber) => <li key={indexnumber}>{title}</li> )}

                                    </ul>
                                </>  : ''}
                                {/*@ts-ignore*/}
                                {product.products[+params.itemId].benefits && <>
                                    <h5>Benefits</h5>
                                    <ul>
                                        {/*@ts-ignore*/}
                                        {product.products[+params.itemId].benefits.map((title:string, indexnumber) => <li key={indexnumber}>{title}</li> )}

                                    </ul>

                                </>}
                                {/*@ts-ignore*/}

                                {product.products[+params.itemId].tableOne && <>
                                    <h5>Types of stents</h5>
                                    {/*@ts-ignore*/}
                                    <img   className='typesImage-item' src={product.products[+params.itemId].tableOne} alt="typeStends"/>
                                </>}
                                {/*@ts-ignore*/}
                                {product.products[+params.itemId].AdditionalInformation && <>
                                    <h5>Additional Information</h5>
                                    <ul>
                                        {/*@ts-ignore*/}
                                        {product.products[+params.itemId].AdditionalInformation.map((title:string, indexnumber) => <li key={indexnumber}>{title}</li> )}

                                    </ul>

                                </>}
                                {/*@ts-ignore*/}
                                {product.products[+params.itemId].video && <h5>Video</h5>}
                                {/*@ts-ignore*/}
                                {product.products[+params.itemId].video}


                                {currentCatalog !== 'Lepu Medical' && <>
                                    <h5>Catalog</h5>
                                    {/*@ts-ignore*/}
                                    <a href={product.products[+params.itemId].catalog} target='_blank'>
                                        <button className='download_catalog catalog_item'><svg height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                                                                               viewBox="0 0 303.188 303.188" >
                                            <g>
                                                <polygon fill="#E8E8E8" points="219.821,0 32.842,0 32.842,303.188 270.346,303.188 270.346,50.525 	"/>
                                                <path fill="#FB3449" d="M230.013,149.935c-3.643-6.493-16.231-8.533-22.006-9.451c-4.552-0.724-9.199-0.94-13.803-0.936
                            c-3.615-0.024-7.177,0.154-10.693,0.354c-1.296,0.087-2.579,0.199-3.861,0.31c-1.314-1.36-2.584-2.765-3.813-4.202
                            c-7.82-9.257-14.134-19.755-19.279-30.664c1.366-5.271,2.459-10.772,3.119-16.485c1.205-10.427,1.619-22.31-2.288-32.251
                            c-1.349-3.431-4.946-7.608-9.096-5.528c-4.771,2.392-6.113,9.169-6.502,13.973c-0.313,3.883-0.094,7.776,0.558,11.594
                            c0.664,3.844,1.733,7.494,2.897,11.139c1.086,3.342,2.283,6.658,3.588,9.943c-0.828,2.586-1.707,5.127-2.63,7.603
                            c-2.152,5.643-4.479,11.004-6.717,16.161c-1.18,2.557-2.335,5.06-3.465,7.507c-3.576,7.855-7.458,15.566-11.815,23.02
                            c-10.163,3.585-19.283,7.741-26.857,12.625c-4.063,2.625-7.652,5.476-10.641,8.603c-2.822,2.952-5.69,6.783-5.941,11.024
                            c-0.141,2.394,0.807,4.717,2.768,6.137c2.697,2.015,6.271,1.881,9.4,1.225c10.25-2.15,18.121-10.961,24.824-18.387
                            c4.617-5.115,9.872-11.61,15.369-19.465c0.012-0.018,0.024-0.036,0.037-0.054c9.428-2.923,19.689-5.391,30.579-7.205
                            c4.975-0.825,10.082-1.5,15.291-1.974c3.663,3.431,7.621,6.555,11.939,9.164c3.363,2.069,6.94,3.816,10.684,5.119
                            c3.786,1.237,7.595,2.247,11.528,2.886c1.986,0.284,4.017,0.413,6.092,0.335c4.631-0.175,11.278-1.951,11.714-7.57
                            C231.127,152.765,230.756,151.257,230.013,149.935z M119.144,160.245c-2.169,3.36-4.261,6.382-6.232,9.041
                            c-4.827,6.568-10.34,14.369-18.322,17.286c-1.516,0.554-3.512,1.126-5.616,1.002c-1.874-0.11-3.722-0.937-3.637-3.065
                            c0.042-1.114,0.587-2.535,1.423-3.931c0.915-1.531,2.048-2.935,3.275-4.226c2.629-2.762,5.953-5.439,9.777-7.918
                            c5.865-3.805,12.867-7.23,20.672-10.286C120.035,158.858,119.587,159.564,119.144,160.245z M146.366,75.985
                            c-0.602-3.514-0.693-7.077-0.323-10.503c0.184-1.713,0.533-3.385,1.038-4.952c0.428-1.33,1.352-4.576,2.826-4.993
                            c2.43-0.688,3.177,4.529,3.452,6.005c1.566,8.396,0.186,17.733-1.693,25.969c-0.299,1.31-0.632,2.599-0.973,3.883
                            c-0.582-1.601-1.137-3.207-1.648-4.821C147.945,83.048,146.939,79.482,146.366,75.985z M163.049,142.265
                            c-9.13,1.48-17.815,3.419-25.979,5.708c0.983-0.275,5.475-8.788,6.477-10.555c4.721-8.315,8.583-17.042,11.358-26.197
                            c4.9,9.691,10.847,18.962,18.153,27.214c0.673,0.749,1.357,1.489,2.053,2.22C171.017,141.096,166.988,141.633,163.049,142.265z
                             M224.793,153.959c-0.334,1.805-4.189,2.837-5.988,3.121c-5.316,0.836-10.94,0.167-16.028-1.542
                            c-3.491-1.172-6.858-2.768-10.057-4.688c-3.18-1.921-6.155-4.181-8.936-6.673c3.429-0.206,6.9-0.341,10.388-0.275
                            c3.488,0.035,7.003,0.211,10.475,0.664c6.511,0.726,13.807,2.961,18.932,7.186C224.588,152.585,224.91,153.321,224.793,153.959z"/>
                                                <polygon fill="#FB3449" points="227.64,25.263 32.842,25.263 32.842,0 219.821,0 	"/>
                                                <g>
                                                    <path fill="#A4A9AD" d="M126.841,241.152c0,5.361-1.58,9.501-4.742,12.421c-3.162,2.921-7.652,4.381-13.472,4.381h-3.643
                                v15.917H92.022v-47.979h16.606c6.06,0,10.611,1.324,13.652,3.971C125.321,232.51,126.841,236.273,126.841,241.152z
                                 M104.985,247.387h2.363c1.947,0,3.495-0.546,4.644-1.641c1.149-1.094,1.723-2.604,1.723-4.529c0-3.238-1.794-4.857-5.382-4.857
                                h-3.348C104.985,236.36,104.985,247.387,104.985,247.387z"/>
                                                    <path fill="#A4A9AD" d="M175.215,248.864c0,8.007-2.205,14.177-6.613,18.509s-10.606,6.498-18.591,6.498h-15.523v-47.979
                                h16.606c7.701,0,13.646,1.969,17.836,5.907C173.119,235.737,175.215,241.426,175.215,248.864z M161.76,249.324
                                c0-4.398-0.87-7.657-2.609-9.78c-1.739-2.122-4.381-3.183-7.926-3.183h-3.773v26.877h2.888c3.939,0,6.826-1.143,8.664-3.43
                                C160.841,257.523,161.76,254.028,161.76,249.324z"/>
                                                    <path fill="#A4A9AD" d="M196.579,273.871h-12.766v-47.979h28.355v10.403h-15.589v9.156h14.374v10.403h-14.374
                                L196.579,273.871L196.579,273.871z"/>
                                                </g>
                                                <polygon fill="#D1D3D3" points="219.821,50.525 270.346,50.525 219.821,0 	"/>
                                            </g>
                                        </svg> {lang === 'en' ? 'Download Catalog' : 'Descarregar Catálogo'} </button>
                                    </a>
                                </>    }



                                <p className='catalog__sizes'>The sizes listed in the catalog are the most popular. Other sizes can be made to order.</p>
                                <p className='catalog__sizes'>All information on this site is for information purposes only and is not a public offer.</p>
                             </div>
                             if(product.name === 'Hercules Vascular Stent' && product.name === currentCatalog) return <div key={i} className='catalog__item-description'>

                                <h4 className='catalog__item-title'>{product.products[0].title}</h4>
                                <div className='slider__catal-wrapper'>
                                    <Slider nextArrow={
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.29303 4.707L14.586 12L7.29303 19.293L8.70703 20.707L17.414 12L8.70703 3.293L7.29303 4.707Z" fill="#ADADAD"/>
                                        </svg>

                                    } prevArrow={
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.5386 19.205L10.1213 12.0384L17.2879 4.62114L15.8498 3.23164L7.29375 12.087L16.1491 20.6431L17.5386 19.205Z" fill="#ADADAD"/>
                                        </svg> } slidesToShow={1} ref={slider}  className='slider__catal-item'>
                                        <div className='slider__catalog-item'>
                                            {/*@ts-ignore*/}
                                            <img src={product.products[0].img} width={200} alt="img-slider-item"/>

                                        </div>

                                        {/*@ts-ignore*/}
                                        {product.products[0].img2 && <div className='slider__catalog-item'>
                                            {/*@ts-ignore*/}
                                            <img src={product.products[0].img2} width={200} alt="img-slider-item"/>

                                        </div>}
                                        {/*@ts-ignore*/}
                                        {product.products[0].img3 && <div className='slider__catalog-item'>
                                            {/*@ts-ignore*/}
                                            <img src={product.products[0].img3} width={200} alt="img-slider-item"/>

                                        </div>}

                                    </Slider>


                                </div>


                                {/*@ts-ignore*/}
                                <p className='slider__catal-title-wrapper'>{[product.products[0].titleDescription]}</p>
                                <ul>
                                    {/*@ts-ignore*/}
                                    {product.products[0].descripton.map((title:string, indexnumber) => <li key={indexnumber}>{title}</li> )}

                                </ul>


                                {/*@ts-ignore*/}
                                {product.products[0].customTitleOne && <>
                                    {/*@ts-ignore*/}
                                    <h5>{product.products[0].customTitleOne}</h5>
                                    {/*@ts-ignore*/}
                                    {product.products[0].customTitleTable && <>{product.products[0].customTitleTable}</>}

                                    {/*@ts-ignore*/}
                                    {product.products[0].customTitleOneImg && <img  className='typesImage-item' src={product.products[0].customTitleOneImg} alt="titleImg"/> }
                                </>}
                                {/*@ts-ignore*/}
                                {product.products[0].customTitleTwo && <>
                                    {/*@ts-ignore*/}
                                    <h5>{product.products[0].customTitleTwo}</h5>
                                    {/*@ts-ignore*/}
                                    {product.products[0].customTitleTwoImg &&  <img  className='typesImage-item' src={product.products[0].customTitleTwoImg} alt="titleImg"/>
                                    }

                                    <ul>
                                        {/*@ts-ignore*/}
                                        <li>{product.products[0].customDescriptionTwo}</li>
                                    </ul>


                                </>}
                                {/*@ts-ignore*/}
                                {product.products[0].customTitleTree && <>
                                    {/*@ts-ignore*/}
                                    <h5>{product.products[0].customTitleTree}</h5>
                                    {/*@ts-ignore*/}
                                    <img  height={'300px'} className='typesImage-item' src={product.products[0].customTitleTreeImg} alt="titleImg"/>

                                    <ul>
                                        {/*@ts-ignore*/}
                                        <li>{product.products[0].customDescriptionTree}</li>
                                    </ul>


                                </>}
                                {/*@ts-ignore*/}
                                {product.products[0].customTitleFour && <>
                                    {/*@ts-ignore*/}
                                    <h5>{product.products[0].customTitleFour}</h5>
                                    {/*@ts-ignore*/}
                                    {product.products[0].customTitleFourImg && <img  className='typesImage-item' src={product.products[0].customTitleFourImg} alt="titleImg"/> }

                                    <ul>
                                        {/*@ts-ignore*/}
                                        <li>{product.products[0].customDescriptionFour}</li>
                                    </ul>


                                </>}
                                {/*@ts-ignore*/}
                                {product.products[0].customTitleFive && <>
                                    {/*@ts-ignore*/}
                                    <h5>{product.products[0].customTitleFive}</h5>
                                    {/*@ts-ignore*/}
                                    {product.products[0].customTitleFiveImg &&    <img  className='typesImage-item' src={product.products[0].customTitleFiveImg} alt="titleImg"/>
                                    }

                                    <ul>
                                        {/*@ts-ignore*/}
                                        <li>{product.products[0].customDescriptionFive}</li>
                                    </ul>


                                </>}
                                {/*@ts-ignore*/}
                                {product.products[0].customTitleSix && <>
                                    {/*@ts-ignore*/}
                                    <h5>{product.products[0].customTitleSix}</h5>
                                    {/*@ts-ignore*/}
                                    <img width='60%'  className='typesImage-item-nw' src={product.products[0].customTitleSixImg} alt="titleImg"/>




                                </>}
                                {/*@ts-ignore*/}
                                {product.products[0].customTitleSeven && <>
                                    {/*@ts-ignore*/}
                                    <h5>{product.products[0].customTitleSeven}</h5>
                                    {/*@ts-ignore*/}
                                    <img  className='typesImage-item' src={product.products[0].customTitleSevenImg} alt="titleImg"/>
                                    {/*@ts-ignore*/}
                                    <img  className='typesImage-item' src={product.products[0].sealthoracicflexSevenTwo} alt="titleImg"/>

                                    <ul>
                                        {/*@ts-ignore*/}
                                        <li>{product.products[0].customDescriptionSeven}</li>
                                    </ul>


                                </>}

                                {/*@ts-ignore*/}
                                {product.products[0].BronchialStent ? <>
                                    <h5>Bronchial Stent</h5>
                                    <ul>
                                        {/*@ts-ignore*/}
                                        {product.products[0].BronchialStent.map((title:string, indexnumber) => <li key={indexnumber}>{title}</li> )}

                                    </ul>
                                </>  : ''}
                                {/*@ts-ignore*/}
                                {product.products[0].testimony && <>
                                    <h5>Testimony</h5>
                                    <ul>
                                        {/*@ts-ignore*/}
                                        {product.products[0].testimony.map((title:string, indexnumber) => <li key={indexnumber}>{title}</li> )}

                                    </ul>
                                </> }

                                {/*@ts-ignore*/}
                                {product.products[0].Contraindications ? <>
                                    <h5>Contraindications</h5>
                                    <ul>
                                        {/*@ts-ignore*/}
                                        {product.products[0].Contraindications.map((title:string, indexnumber) => <li key={indexnumber}>{title}</li> )}

                                    </ul>
                                </>  : ''}
                                {/*@ts-ignore*/}
                                {product.products[0].benefits && <>
                                    <h5>Benefits</h5>
                                    <ul>
                                        {/*@ts-ignore*/}
                                        {product.products[0].benefits.map((title:string, indexnumber) => <li key={indexnumber}>{title}</li> )}

                                    </ul>

                                </>}
                                {/*@ts-ignore*/}

                                {product.products[0].tableOne && <>
                                    <h5>Types of stents</h5>
                                    {/*@ts-ignore*/}
                                    <img   className='typesImage-item' src={product.products[0].tableOne} alt="typeStends"/>
                                </>}
                                {/*@ts-ignore*/}
                                {product.products[0].AdditionalInformation && <>
                                    <h5>Additional Information</h5>
                                    <ul>
                                        {/*@ts-ignore*/}
                                        {product.products[0].AdditionalInformation.map((title:string, indexnumber) => <li key={indexnumber}>{title}</li> )}

                                    </ul>

                                </>}
                                {/*@ts-ignore*/}
                                {product.products[0].video && <h5>Video</h5>}
                                {/*@ts-ignore*/}
                                {product.products[0].video}






                                <p className='catalog__sizes'>The sizes listed in the catalog are the most popular. Other sizes can be made to order.</p>
                                <p className='catalog__sizes'>All information on this site is for information purposes only and is not a public offer.</p>
                            </div>

                            if(!params.itemId && product.name === currentCatalog) {
                                return product.products.map((productSmall, index) => {

                                    return <div key={index} onClick={() => seeProduct(currentCatalog, index)} className='products__slide-item slide_catalog'>
                                        <img width={300} src={productSmall.img} alt="productPh"/>
                                        <p>{productSmall.title}</p>
                                    </div>
                                } )
                            }


                        }  )}



                    </div>
                </div>
            </section>
        </>
    )
}
export default Catalog