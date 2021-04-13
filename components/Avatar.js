function Avatar({url, className}) {
    return (
        <img 
            className={`h-7 bg-transparent rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
            loading="lazy"
            src={url}
            alt="Profile picture"
        />
    )
}

export default Avatar