import styles from "styled-components";

export const CategoriesContainer = styles.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 8px;
`

export const CategoryButton = styles.button`
    border: none;
    border-radius: 10px;
    margin: 14px;
    padding: 15px 30px;
    text-transform: uppercase;
    font-size: 18px;
    cursor: pointer;
    display: inline-block;

    .button:hover{
        background-color: white;
        color: var(--contrast);
        border: 1px solid var(--light_brown);
    }
`