import PropTypes from 'prop-types';
import { InputFilter, LabelFilter } from './Filter.styled';

const Filter = ({ value, handleChange }) => {
  return (
    <LabelFilter>
      Find contacts by name
      <InputFilter
        type="text"
        name="filter"
        value={value}
        onChange={handleChange}
      />
    </LabelFilter>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Filter;
