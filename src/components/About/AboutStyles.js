import styles from 'styled-components';

export const AboutSectionContainer = styles.section`
    border-bottom: 2px solid rgba(0, 0, 0, 0.5);
    height: 400px;
`

export const TitleContainer = styles.div`
    margin: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    img{
        width: 50px;
        height: 50px;
    }
`

export const TextContainer = styles.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: justify;
    font-size: 22px;
    padding: 0 20px 0;
    gap: 12px;
`

export const TextItemContainer = styles.div`
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
`