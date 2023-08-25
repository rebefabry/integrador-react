import styles from 'styled-components';

export const FooterContainer = styles.footer`
    height: 55px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 16px;

    p{
        text-align: center;
        font-size: 18px;
    }
`

export const LogosContainer = styles.div`
    display: flex;
    gap: 20px;
    font-size: 22px;
    text-align: center;
    cursor: pointer;
`