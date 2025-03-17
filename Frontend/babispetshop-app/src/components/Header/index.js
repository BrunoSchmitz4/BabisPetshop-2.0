import styles from './Header.module.css'

function Header() {
    return (
        <>
            <div class="container-xl" className={styles.headerContainer}>
                <div class="row align-itens-center justify-content-center" className={styles.headerBox}>
                    <div class="col-4">
                        <img class="" className={styles.headerImg} alt='Logo' />
                    </div>
                    <p class="row" className={styles.welcomeMsg}>Bem vindo(a), usuário!</p>
                    <nav class="row align-itens-center justify-content-around" className={styles.headerNavbar}>
                        <a href='' class="col-3" className={styles.headerAnchor}>Seu perfil</a>
                        <a href='' class="col-3" className={styles.headerAnchor}>Pedidos</a>
                        <a href='' class="col-3" className={styles.headerAnchor}>Serviços</a>
                        {/* <a href='' class="col-4" className={styles.headerAnchor}>Anchor</a> */}
                    </nav>                
                </div>
            </div>
        </>
    )
}

export default Header