const MotherboardSvg = () => {
    return (
        <svg className="fill-indigo-400" width="20" height="20" viewBox="0 0 20 20">
            <rect y="2" width="1" height="9"></rect>
            <rect x="15" y="3" width="1" height="7"></rect>
            <rect x="7" y="15" width="9" height="1"></rect>
            <rect x="7" y="12" width="9" height="1"></rect>
            <path d="M3,0V20H20V0ZM19,19H4V1H19Z"></path>
            <path d="M12,4H7V9h5ZM11,8H8V5h3Z"></path>
        </svg>
    );
}

export default MotherboardSvg;