import image1 from '../../Assets/home.jpeg'
import image2 from '../../Assets/apartment.jpeg'
import image3 from '../../Assets/Airbnb.jpeg'
import image4 from '../../Assets/office.webp'
import image5 from '../../Assets/post-construction.jpeg'
import { Link } from 'react-router-dom';

export const images = [
    {
        title: "Home",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas a harum officiis sapiente illo quod debitis officia totam blanditiis",
        button: <Link to="/Home">Learn More</Link>,
        img: image1
    },
    {
        title: "Apartment",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas a harum officiis sapiente illo quod debitis officia totam blanditiis",
        button: <Link to="/Apartment">Learn more</Link>,
        img: image2
    },
    {
        title: "Airbnb",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas a harum officiis sapiente illo quod debitis officia totam blanditiis",
        button: <Link to="/Airbnb">Learn more</Link>,
        img: image3
    },
    {
        title: "Office",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas a harum officiis sapiente illo quod debitis officia totam blanditiis",
        button: <Link to="/Office">Learn more</Link>,
        img: image4
    },
    {
        title: "Post-construction",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas a harum officiis sapiente illo quod debitis officia totam blanditiis",
        button: <Link to="/Post-construction">Learn more</Link>,
        img: image5
    },
]