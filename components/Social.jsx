import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialLinks = [
    { icon: <FaGithub />, path: 'https://github.com/JordanDG' },
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/jordan-da-graca-a9b4a5129/' },
    { icon: <FaInstagram />, path: 'https://www.instagram.com/jordan_dagraca/' },
    { icon: <FaTwitter />, path: 'https://twitter.com/DaGracaJordan' },
];

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {SocialLinks.map((item, index)=> {
                return <Link key={index} href={item.path} target="_blank" className={iconStyles} aria-label="Social Media Link">
                    {item.icon}
                </Link>
            })}
        </div>
    )
}

export default Social;