import image1 from '../../Assets/home.jpeg'
import image2 from '../../Assets/apartment.jpeg'
import image3 from '../../Assets/Airbnb.jpeg'
import image4 from '../../Assets/office.webp'
import image5 from '../../Assets/post-construction.jpeg'
import { Link } from 'react-router-dom';
export const images = [
    {
        title: "Residential Deep Cleaning",
        paragraph: "Revitalize your home with our comprehensive residential deep cleaning service. Our expert team meticulously attends to every corner, ensuring a spotless environment that sparkles with freshness. From dusting high to scrubbing low, we leave no surface untouched, leaving your space immaculate and inviting.",
        button: <Link to="/residential-deep-cleaning">Learn More</Link>,
        img: image1
    },
    {
        title: "Residential Cleaning",
        paragraph: "Elevate your living space with our professional residential cleaning service. We'll swiftly tackle dust, dirt, and grime, leaving your home refreshed and gleaming. Our meticulous attention to detail ensures a clean and comfortable environment for you and your family to enjoy.",
        button: <Link to="/residential-cleaning">Learn more</Link>,
        img: image2
    },
    {
        title: "Move In / Move Out",
        paragraph: "Transition smoothly with our move-in/move-out cleaning service. Whether you're settling into a new home or bidding farewell to an old one, our dedicated team ensures a pristine space. From top to bottom, we leave no corner untouched, providing a fresh start or a seamless handover for your peace of mind..",
        button: <Link to="/move-in">Learn more</Link>,
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