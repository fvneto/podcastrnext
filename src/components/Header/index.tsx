import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>
        
            <img src="/logo.svg" alt="Podcastr"/>

            <p>Para se manter programando atualizado.</p>

            <span>Quin, 8 Junho</span>
        </header>
    );
}