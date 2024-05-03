import { icons } from '../lib/data';
import IconFlake from './IconFlake';

export default function IconFall() {
  return (
    <div className="iconfall-container">
      {icons.map((Icon, index) => (
        <IconFlake Icon={Icon} key={index} />
      ))}
    </div>
  );
}
