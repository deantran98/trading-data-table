type SVGIconProps = {
  className?: string;
};

export const SortingIcon: React.FC<SVGIconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#6B7280" className={className}>
    <path d="M480-360 280-560h400L480-360Z"/>
  </svg>
);