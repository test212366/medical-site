const Footer = ({lang}: any) => {
    return (
        <footer>
            <p>{lang === 'en' ? 'All Rights Reserved © 2023' : "Todos os direitos reservados © 2023"}</p>
            <p className='footer__support'>{lang === 'en' ? 'Site Technical Support' : 'Apoio Técnico do Sítio'} </p>

        </footer>
    )
}
export default Footer