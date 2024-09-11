import PropTypes from 'prop-types';
import iconos from './iconos';
import "./iconos.scss"

const Icono = ({ name, size }) => {
  const svg = iconos[name]; 

  const estilos = {
    width: size || '24px', 
    height: 'auto',
    display: 'block',
    background: "transparent"
  };

  return (
    <div className="icono" style={estilos}>
      <span dangerouslySetInnerHTML={{ __html: svg }} />
    </div>
  );
};

Icono.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default Icono;
