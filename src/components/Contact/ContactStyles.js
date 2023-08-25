import styles from 'styled-components';

export const ContactSection = styles.section`
    width: 100%;
`

export const ContactContainer = styles.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    margin-top: 18px;
`

export const ContactForm = styles.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 8px;
    width: 30%;
    height: 53vh;
    padding: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: 2px solid var(--contrast);
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);

    input{
        padding: 15px 35px 15px 15px;
        border: 1px solid var(--text);
    }
`

export const ContactText = styles.div`
    text-transform: uppercase;
    text-align: left;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    gap: 10px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.5);
`