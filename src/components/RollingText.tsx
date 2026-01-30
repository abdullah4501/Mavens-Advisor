interface RollingTextProps {
  text: string;
  size?: number;
}

export default function RollingText({ text, size = 24 }: RollingTextProps) {
  const lineHeight = Math.round(size * 1.25);
  const mavensCount = 6; 

  return (
    <p
      className="rolling-text"
      style={
        {
          "--font-size": `${size}px`,
          "--line-height": `${lineHeight}px`,
        } as React.CSSProperties
      }
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={i < mavensCount ? "text-gold" : "text-black"}
          style={{ transitionDelay: `${i * 25}ms` }}
        >
          {char}
        </span>
      ))}
    </p>
  );
}

