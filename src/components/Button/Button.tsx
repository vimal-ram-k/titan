import "../Button/Button.css";

export const Button = (props: { name: string; onCallback: () => void }) => {
  return (
    <button className={`btn-key ${props.name}`} onClick={props.onCallback}>
      {props.name}
    </button>
  );
};
