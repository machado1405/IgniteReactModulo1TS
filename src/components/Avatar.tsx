import styles from './Avatar.module.css';

interface AvatarProps {
    // a interrogacao denota que a propriedade é opcional
    hasBorder?: boolean;
    img: string;
    alt?: string
}

export function Avatar({ hasBorder = true, img, alt }: AvatarProps) {
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatarWithoutBorder}
            src={img}
            alt={alt} 
        />
    );
}