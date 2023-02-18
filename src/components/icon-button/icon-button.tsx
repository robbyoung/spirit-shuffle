import './icon-button.scss';

interface IconButtonProps {
  icon: JSX.Element;
  tooltip: string;
  onClick: () => void;
}

function IconButton({ icon, tooltip, onClick }: IconButtonProps) {
  return (
    <button title={tooltip} className="icon-button" onClick={onClick}>
      {icon}
    </button>
  );
}

export default IconButton;
