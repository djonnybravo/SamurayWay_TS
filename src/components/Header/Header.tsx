import React from 'react';
import classes from './Header.module.css';

function Header() {
    return (
        <header className={classes.header}>
            <img
                src='https://avatars.mds.yandex.net/i?id=a030b92775b9967c5c4d05fb136fbfe6f414f98d-8454246-images-thumbs&n=13&exp=1'/>
        </header>
    )
}

export default Header