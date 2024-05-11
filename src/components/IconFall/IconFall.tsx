import { icons } from '../../lib/data';
import IconFlake from '../IconFlake/IconFlake';
import styles from './IconFall.module.css';

interface IconFallProps {
  pos: string;
}

export default function IconFall({ pos }: IconFallProps) {
  return (
    <div className={styles.iconfallContainer} style={{ top: pos }}>
      {icons.map((Icon, index) => (
        <IconFlake Icon={Icon} key={index} />
      ))}
    </div>
  );
}
