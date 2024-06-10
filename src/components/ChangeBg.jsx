import React, { useContext } from 'react';
import styles from '../style/changeBg.module.css';
import { ItemContext } from '../context/ItemContext';

const ChangeBg = () => {
    const { 
        white, setWhite, 
        black, setBlack, 
        red, setRed, 
        green, setGreen, 
        blue, setBlue 
    } = useContext(ItemContext);

    const handleSetWhite = () => {
        setWhite('white');
        setBlack('');
        setRed('');
        setGreen('');
        setBlue('');
    };

    const handleSetBlack = () => {
        setWhite('');
        setBlack('black');
        setRed('');
        setGreen('');
        setBlue('');
    };

    const handleSetRed = () => {
        setWhite('');
        setBlack('');
        setRed('red');
        setGreen('');
        setBlue('');
    };

    const handleSetGreen = () => {
        setWhite('');
        setBlack('');
        setRed('');
        setGreen('green');
        setBlue('');
    };

    const handleSetBlue = () => {
        setWhite('');
        setBlack('');
        setRed('');
        setGreen('');
        setBlue('blue');
    };

    return (
        <div>
            <ul style={{ display: "flex", justifyContent: "center" }}>

                <li
                    className={`${styles.listItem} ${styles.white}`}
                    onClick={handleSetWhite}
                ></li>
                <li
                    className={`${styles.listItem} ${styles.black}`}
                    onClick={handleSetBlack}
                ></li>
                <li
                    className={`${styles.listItem} ${styles.red}`}
                    onClick={handleSetRed}
                ></li>
                <li
                    className={`${styles.listItem} ${styles.green}`}
                    onClick={handleSetGreen}
                ></li>
                <li
                    className={`${styles.listItem} ${styles.blue}`}
                    onClick={handleSetBlue}
                ></li>
            </ul>
        </div>
    );
}

export default ChangeBg;
