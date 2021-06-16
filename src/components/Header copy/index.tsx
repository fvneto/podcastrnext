import format from 'date-fns/format';
import { ptBR } from 'date-fns/locale';
import ptBr from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss';

export function Header() {
    const currentDate = format(new Date(), 'EEEEEE, d, MMMM', {locale: ptBr})
    return (
        <header className={styles.headerContainer}>
        
            <img src="/logo.svg" alt="Podcastr"/>

            <p>Para se manter programando atualizado.</p>

            <span>{currentDate}</span>
        </header>
    );
}