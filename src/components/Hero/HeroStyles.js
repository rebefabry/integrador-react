import styles from 'styled-components';

export const HeroContainer = styles.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--main-color);
    border-bottom: 2px solid rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 450px;
    overflow: hidden;
`

export const HeroImageContainer = styles.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 40px;

    img{
        max-width: 100%;
        height: auto;
    }
`
export const HeroTextContainer = styles.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 

    h1{
        font-size: 30px;
        color: white;
    }

    p{
        font-size: 18px;
        padding: 4px 8px;
        margin: 8px;
        color: white;
    }
`

export const HeroSecondImagesContainer = styles.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

    img{
        width: 60px;
        height: auto;
        margin: 10px;
    }
`