const ButtonSlider = (props: any) => {
    const {onClick, isArrow} = props
    //next
    return (
        <button onClick={onClick} className={`button__next-slider  mr-slider-fir ${isArrow ? 'prevArrowSlideProducts' : ''}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5386 19.205L10.1213 12.0384L17.2879 4.62114L15.8498 3.23164L7.29375 12.087L16.1491 20.6431L17.5386 19.205Z" fill="#ADADAD"/>
            </svg>


        </button>
    )
}
export default ButtonSlider