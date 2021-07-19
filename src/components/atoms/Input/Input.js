import PropTypes from 'prop-types';
import { StyledInput } from './styles';

const Input = ({ search }) => <StyledInput icon={search} />;

Input.propTypes = {
  search: PropTypes.bool,
};

Input.defaultProps = {
  search: false,
};

export default Input;
