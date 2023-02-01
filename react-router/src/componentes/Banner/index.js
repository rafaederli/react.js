import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/erro_404.png";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt sapien eget massa dictum, vel dapibus eros fringilla. Etiam faucibus placerat lacus, ut pharetra risus bibendum ut. Proin ut sapien dolor.
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img
                    className={styles.minhafoto}
                    src={minhaFoto}
                />
            </div>
        </div>
    );
}