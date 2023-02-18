import './icon-button.scss';

interface IconButtonProps {
  icon: JSX.Element;
}

function SpiritDeck({ icon }: IconButtonProps) {
  return <button>{icon}</button>;
}

export default SpiritDeck;
