type IconProps  = {
  path: string;
  alt_text: string;
  width?: number;
}

function Icon({ path, alt_text, width = 24 }: IconProps) {
  return (
    <img src={path} alt={alt_text} width={width} />
  )
}

export default Icon