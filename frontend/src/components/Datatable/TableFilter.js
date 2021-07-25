import PropTypes from 'prop-types';

const TableFilter = (props) => {
  const {
    filterText,
    onFilter,
    resetPaginationToggle,
    setResetPagination,
  } = props;

  const onClearHandler = (e) => {
    e.preventDefault();
    setResetPagination(!resetPaginationToggle);
    onFilter('');
  };

  return (
    <>
      <input
        id="search"
        type="text"
        placeholder="Filter By Name"
        aria-label="Search Input"
        value={filterText}
        onChange={(e) => onFilter(e.target.value)}
      />
      <button type="button" onClick={onClearHandler}>
        X
      </button>
    </>
  );
};

TableFilter.defaultProps = {
  filterText: '',
  onFilter: () => {},
  resetPaginationToggle: false,
  setResetPagination: () => {},
};

TableFilter.propTypes = {
  filterText: PropTypes.string,
  onFilter: PropTypes.func,
  resetPaginationToggle: PropTypes.bool,
  setResetPagination: PropTypes.func,
};

export default TableFilter;
