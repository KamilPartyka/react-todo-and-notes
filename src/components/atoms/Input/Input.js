import PropTypes from 'prop-types';
import { StyledInput, StyledTextarea } from 'components/atoms/Input/styles';

const Input = ({ search, placeholder, isTextarea }) =>
  isTextarea ? (
    <StyledTextarea placeholder={placeholder} />
  ) : (
    <StyledInput placeholder={placeholder} icon={search} />
  );

Input.propTypes = {
  search: PropTypes.bool,
  isTextarea: PropTypes.bool,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  search: false,
  isTextarea: false,
  placeholder: '',
};

export default Input;
