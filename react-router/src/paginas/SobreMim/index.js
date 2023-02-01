import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/erro_404.png"

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre Mim"
        >
            <h3 className={styles.subtitulo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>

            <img
                src={fotoSobreMim}
                className={styles.fotoSobreMim}
            />

            
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet scelerisque nulla. Aliquam quis est sollicitudin, malesuada augue sit amet, faucibus elit. Vestibulum tristique lacus sed massa blandit, non dignissim enim aliquam. Integer justo orci, elementum sit amet molestie sit amet, ornare ut orci. Nullam vel sagittis elit. Sed vitae nulla massa. Fusce mattis eros ac tincidunt venenatis. Curabitur aliquam, mi sed rhoncus fringilla, mi lorem mattis odio, porta venenatis tellus purus ac metus. Maecenas sed orci nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi orci massa, euismod vitae ante vitae, tristique tempor diam.
            </p>
            <p className={styles.paragrafo}>
                In hac habitasse platea dictumst. Phasellus cursus mi nisi, quis consectetur ipsum faucibus vel. Curabitur eu feugiat ipsum, sed venenatis lorem. Etiam nunc elit, condimentum quis neque ut, eleifend commodo nunc. Suspendisse tincidunt faucibus ante, vitae euismod orci venenatis et. Donec velit ante, sodales ut ultricies at, auctor vitae massa. Cras vel leo nulla. Fusce accumsan porta purus, vitae suscipit urna viverra quis. Suspendisse eleifend elit magna, in tempor eros eleifend quis. Suspendisse vel lacinia leo. 
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet scelerisque nulla. Aliquam quis est sollicitudin, malesuada augue sit amet, faucibus elit. Vestibulum tristique lacus sed massa blandit, non dignissim enim aliquam. Integer justo orci, elementum sit amet molestie sit amet, ornare ut orci. Nullam vel sagittis elit. Sed vitae nulla massa. Fusce mattis eros ac tincidunt venenatis. Curabitur aliquam, mi sed rhoncus fringilla, mi lorem mattis odio, porta venenatis tellus purus ac metus. Maecenas sed orci nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi orci massa, euismod vitae ante vitae, tristique tempor diam.
            </p>
            <p className={styles.paragrafo}>
                In hac habitasse platea dictumst. Phasellus cursus mi nisi, quis consectetur ipsum faucibus vel. Curabitur eu feugiat ipsum, sed venenatis lorem. Etiam nunc elit, condimentum quis neque ut, eleifend commodo nunc. Suspendisse tincidunt faucibus ante, vitae euismod orci venenatis et. Donec velit ante, sodales ut ultricies at, auctor vitae massa. Cras vel leo nulla. Fusce accumsan porta purus, vitae suscipit urna viverra quis. Suspendisse eleifend elit magna, in tempor eros eleifend quis. Suspendisse vel lacinia leo. 
            </p>
        </PostModelo>
    );
}