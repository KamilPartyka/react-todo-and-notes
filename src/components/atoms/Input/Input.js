import PropTypes from 'prop-types';
import { StyledInput } from './styles';

const Input = ({ search, placeholder }) => <StyledInput placeholder={placeholder} icon={search} />;

Input.propTypes = {
  search: PropTypes.bool,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  search: false,
  placeholder: '',
};

export default Input;
