import image1 from '../../Assets/home.jpeg'
import image2 from '../../Assets/apartment.jpeg'
import image3 from '../../Assets/Airbnb.jpeg'
import image4 from '../../Assets/office.webp'
import image5 from '../../Assets/post-construction.jpeg'
import { Link } from 'react-router-dom';

export const images = [
    {
        title: "Home",
        paragraph: "Leave the cleaning to us while you create lasting memories. Our home cleaning services guarantee a fresh, spotless, and sparkling-clean living space.",
        button: <Link to="/Home">Learn More</Link>,
        img: image1
    },
    {
        title: "Apartment",
        paragraph: "Transform your apartment with our deep cleaning services! Move-in ready, we ensure a fresh, inviting space. Let us handle the cleaning, so you can enjoy your new home to the fullest.",
        button: <Link to="/Apartment">Learn more</Link>,
        img: image2
    },
    {
        title: "Airbnb",
        paragraph: "Elevate your Airbnb with our meticulous cleaning for seamless check-ins and a standout guest experience. Trust us to make your space welcoming effortlessly.",
        button: <Link to="/Airbnb">Learn more</Link>,
        img: image3
    },
    {
        title: "Office",
        paragraph: "Elevate your office with our professional cleaning services. We create a clean, organized workspace for a productive atmosphere. Focus on your business—let us handle the cleaning.",
        button: <Link to="/Office">Learn more</Link>,
        img: image4
    },
    {
        title: "Post-construction",
        paragraph: "Let our team make your space shine! Our deep cleaning services ensure your home or project is move-in or staging ready, radiating cleanliness and freshness.",
        button: <Link to="/Post-construction">Learn more</Link>,
        img: image5
    },
]