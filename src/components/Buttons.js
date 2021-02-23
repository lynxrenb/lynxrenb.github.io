import React from 'react';

import '../stylesheets/buttons.scss'

import GitHub from '../icons/GitHub';
import LinkedIn from '../icons/LinkedIn';
import Resume from '../icons/Resume';
import Email from '../icons/Email';
import Blog from '../icons/Blog';

const DATA = [
    {
        href: "https://github.com/lynxrenb",
        aria: "Visit my GitHub profile",
        icon: <GitHub />,
        label: "Github",
    },
    {
        href: "https://www.linkedin.com/in/lynxrenb",
        aria: "Visit my LinkedIn profile",
        icon: <LinkedIn />,
        label: "LinkedIn",
    },
    {
        href: "https://raw.githubusercontent.com/lynxrenb/files/master/Resume-Saurav-Jha.pdf",
        aria: "Download my resume",
        icon: <Resume />,
        label: "Resume",
    },
    {
        href: "mailto:lynxrenb@gmail.com",
        aria: "Send me an email",
        icon: <Email />,
        label: "Email",
    },
    {
        href: "https://lynxrenb.github.io/blog",
        aria: "Vist my blog",
        icon: <Blog />,
        label: "Blog",
    }
];


const Button = ({href, aria, icon, label}) => {
    return (
        <span className='button-container'>
            <a className='button' href={href} target='_self' aria-label={aria}
                rel='noopener noreferrer'>
                <div className='icon'>{icon}</div>
                <span className='icon_title'>{label}</span>
            </a>
        </span>
    );
};


export default function Buttons() {
    return (
        <div>
            {DATA.map((props, i) => (
                <Button {...props} key={i} />
            ))}
        </div>
    );
}
