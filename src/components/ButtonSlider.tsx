const ButtonSlider = (props: any) => {
    const {onClick, isArrow} = props
    //next
    return (
        <button onClick={onClick} className={`button__next-slider mr-slider-fir-sec ${isArrow ? 'nextArrowSlideProducts' : ""}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.29303 4.707L14.586 12L7.29303 19.293L8.70703 20.707L17.414 12L8.70703 3.293L7.29303 4.707Z" fill="#ADADAD"/>
            </svg>

        </button>
    )
}
export default ButtonSlider