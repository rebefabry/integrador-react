import styles from "styled-components";

export const ProductSectionContainer = styles.section`
    width: 100%;
    height: auto;
`

export const ProductTextContainer = styles.div`
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