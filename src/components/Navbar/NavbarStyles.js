import styles from 'styled-components';

export const NavContainer = styles.nav`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-around;
    position: fixed;
    top: 0;
    z-index: 999;
    background-color: white;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);

`

export const NavTitleContainer = styles.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
`

export const LinksContainer = styles.div`
    display: flex;
    justify-content: center;
    align-items: center;

    a{
        display: inline-block;
        font-size: 18px;
        margin: 16px;
    }

    a::after{
        display: block;
        content: "";
        margin: auto;
        width: 0;
        height: 1px;
        background-color: var(--main-color);
        transition: width 0.5s;
    }

    a:hover::after{
        width: 100%;
    }
`

export const BagStyledContainer = styles.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    cursor: pointer;
    position: relative;
`



