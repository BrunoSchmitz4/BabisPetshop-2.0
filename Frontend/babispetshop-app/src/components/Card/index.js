import styles from './Card.module.css'

function Card() {
    return (
        <>
            <div class="card" className={styles.cardContainer}>
                <h5 class="card-title" className={styles.carTitle}>Card title</h5>
                <img src="" class="card-img-top" alt="..." />
                <div class="card-body">    
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}

export default Card