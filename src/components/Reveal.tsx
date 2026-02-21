import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  hiddenClass: string;
};

export default function Reveal({ children, hiddenClass }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible
          ? "opacity-100 translate-x-0 translate-y-0 scale-100"
          : hiddenClass
      }`}
    >
      {children}
    </div>
  );
}
