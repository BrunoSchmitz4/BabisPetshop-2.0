import Card from 'components/Card'
import styles from './Home.module.css'

function Home() {
    return (
        <>
            <div class="container-xl" className={styles.homeContainer}>
                <div class="row justify-content-around align-items-center" className={styles.homeBox}>
                    <div class="col-4">
                        <p className={styles.serviceBtnText}>Tornando a vida do seu pet melhor!</p>
                        <button type="button" class="btn btn-outline-light" className={styles.serviceBtn}>Peça um serviço</button>
                    </div>
                    <div class="col-4">
                        <img class="img-thumbnail" className={styles.homeImgPets} src='' alt='Imagem pets unidos.' />
                    </div>
                </div>
            </div>
            {/* Listing services cards section */}
            <section class="container-xl" className={styles.serviceCardsSection}>
                <div class="col">
                    <Card></Card>
                </div>
            </section>

        </>
    )
}

export default Home