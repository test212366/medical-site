import {NavLink} from "react-router-dom";

const SubHeader = ({lang}: any) => {
    return (
        <section className='subheader'>
            <nav>
                <ul className='subheader__nav'>
                    <li>
                        <NavLink to='/'>
                            {lang === 'en' ? 'Home' : 'Início'}

                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contacts'>

                            {lang === 'en' ? 'Contacts' : 'Contactos'}

                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>
                            {lang === 'en' ? 'About Us' : 'Sobre Nós'}

                        </NavLink>
                    </li>

                </ul>
            </nav>
        </section>
    )
}
export default SubHeader