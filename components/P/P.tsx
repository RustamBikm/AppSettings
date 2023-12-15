import styles from './P.module.css';
import cn from 'classnames';
import { PProps } from './P.props';


export const P = ({children, size, className, ...props}:PProps):JSX.Element => {
    return (
        <p 
            className={cn(styles.p, className, {
                [styles.small]:size == 'small',
                [styles.medium]:size == 'medium',
                [styles.high]:size == 'high',
            })}
            {...props}
        >
            {children}
        </p>
    );
};