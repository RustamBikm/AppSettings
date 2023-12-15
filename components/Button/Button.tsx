import styles from './Button.module.css';
import cn from 'classnames';
import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';


export const Button = ({children, arrow = 'none', appearance, className, ...props}:ButtonProps):JSX.Element => {
    return (
        <button 
            className={cn(styles.button, className, {
                [styles.primary]:appearance == 'primary',
                [styles.ghost]:appearance == 'ghost',
            })}
            {...props}
        >
            {children}
            {arrow != 'none' && 
                <span className={cn(styles.arrow, {
                    [styles.down]:arrow == 'down',
                    [styles.right]:arrow == 'right',
                })}>
                    
                </span>}
        </button>
    );
};