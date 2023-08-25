import styles from "styled-components";

export const ProductContainer = styles.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid rgba(0, 0, 0, 0.5);
`

export const ProductsCard = styles.div`
    background-color: white;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    text-align: center;

    img{
        width: 280px;
        height: 280px;
        cursor: pointer;
    }

    h4{
        font-size: 20px;
        padding-top: 16px;
        font-weight: 700;
    }

    p{
        padding: 16px;
        font-size: 18px;
        font-weight: 300;
    }
`