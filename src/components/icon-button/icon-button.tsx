import './icon-button.scss';

interface IconButtonProps {
  icon: JSX.Element;
  onClick: () => void;
}

function IconButton({ icon, onClick }: IconButtonProps) {
  return (
    <button className="icon-button" onClick={onClick}>
      {icon}
    </button>
  );
}

export default IconButton;
