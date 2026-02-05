type Props = {
  src: string;
  alt?: string;
};

export default function PimageCard({ src, alt = "" }: Props) {
  return (
    <div className="rounded-lg overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="z-10 w-40 h-28 object-cover"
        />
    </div>
  );
}
