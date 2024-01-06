interface IDivider {
  size?: number;
  height?: number;
  color?: string;
  margin?: {
    top?: number;
    bottom?: number;
  };
}

export const Divider = ({ size, height, color, margin }: IDivider) => {
  return (
    <hr
      style={{
        width: `${size || 100}%`,
        height: `${height || 0}px`,
        borderColor: `${color || undefined}`,
        marginTop: `${margin?.top || 8}px`,
        marginBottom: `${margin?.bottom || 8}px`,
      }}
    />
  );
};
