import { icons } from '../lib/data';
import IconFlake from './IconFlake';

interface IconFallProps {
  pos: string;
}

export default function IconFall({ pos }: IconFallProps) {
  return (
    <div className="iconfall-container" style={{ top: pos }}>
      {icons.map((Icon, index) => (
        <IconFlake Icon={Icon} key={index} />
      ))}
    </div>
  );
}
