interface ToolProps {
  tool: string;
  size: number;
}

export default function Tool({ tool, size }: ToolProps) {
  const randomX = Math.floor(Math.random() * 500) - 500;
  const randomY = Math.floor(Math.random() * 500);
  return (
    <div
      className="tool"
      style={{
        width: size,
        height: size,
        top: randomY,
        left: randomX,
      }}
    >
      {tool}
    </div>
  );
}
