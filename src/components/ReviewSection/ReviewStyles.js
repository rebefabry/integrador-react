import styles from 'styled-components';

export const ReviewSectionContainer = styles.section`
    width: 100%;
    height: 400px;
    overflow: hidden;
    margin: auto;
    border-bottom: 2px solid rgba(0, 0, 0, 0.5);
`

export const TextContainer = styles.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    margin-top: 10px;

    h2{
        font-size: 26px;
    }

    p{
        font-size: 22px;
    }
`

export const SliderContainer = styles.div`
    display: flex;
    height: 300px;
    width: 100%;
    align-items: center;
`

export const Slider = styles.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    align-items: center;

    img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 100%;
    }

    h3 {
        text-align: center;
        font-style: italic;
        color: var(--text);
    }
`