import Banner from 'componentes/Banner';
import Cards from 'componentes/Cards';
import Titulo from 'componentes/Titulo';
import styles from './Favoritos.module.css';
import { useFavoritoContext } from 'contextos/Favoritos';

function Favoritos() {
    const { favorito } = useFavoritoContext();
    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Cards {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
}

export default Favoritos;
