import PropTypes from 'prop-types';
import { StyledInput, StyledTextarea } from 'components/atoms/Input/styles';

const Input = ({ search, placeholder, isTextarea, ...props }) =>
  isTextarea ? (
    <StyledTextarea placeholder={placeholder} {...props} />
  ) : (
    <StyledInput placeholder={placeholder} icon={search} {...props} />
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
