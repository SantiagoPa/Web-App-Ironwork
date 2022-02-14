import './toggle.css';

export const Toggle = ({onChange, toggle}) => {
  return (
    <label className="inputWrapper">
        <input className="my__input" type="checkbox" checked={toggle} onChange={ onChange } />
        <span className="my__slider" />
    </label>  
  );
};
