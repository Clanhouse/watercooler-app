import Table from 'react-data-table-component';
import PropTypes from 'prop-types';

const DataTable = (props) => {
  const {
    onDelete,
    onEdit,
    onAdd,
    currentPage,
    setCurrentPage,
    searchText,
    setSearchText,
    loading,
    data,
    columns,
    perPage,
    setPerPage,
    enableServerSidePagination,
  } = props;

  const allowedRowActions = [
    { name: 'onEdit', color: 'blue', icon: 'icon' },
    { name: 'onDelete', color: 'red', icon: 'icon' },
  ];

  const rowActions = allowedRowActions
    .filter((action) => props[action.name])
    .map((action) => {
      const btnAction = props[action.name];
      return {
        cell: () => (
          <button type="button" onClick={btnAction}>
            {action.name.substring(2)}
          </button>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      };
    });

  const updatedColumns = [...columns, ...rowActions];

  return (
    <Table
      onDelete={onDelete}
      onEdit={onEdit}
      onAdd={onAdd}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      searchText={searchText}
      setSearchText={setSearchText}
      isLoading={loading}
      data={data}
      columns={updatedColumns}
      perPage={perPage}
      setPerPage={setPerPage}
      enableServerSidePagination={enableServerSidePagination}
    />
  );
};

DataTable.defaultProps = {
  onDelete: null,
  onEdit: null,
  onAdd: null,
  currentPage: 1,
  setCurrentPage: null,
  searchText: '',
  setSearchText: null,
  loading: true,
  data: [],
  columns: [],
  perPage: 10,
  setPerPage: null,
  enableServerSidePagination: false,
};

DataTable.propTypes = {
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onAdd: PropTypes.func,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  searchText: PropTypes.string,
  setSearchText: PropTypes.func,
  loading: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.object),
  perPage: PropTypes.number,
  setPerPage: PropTypes.func,
  enableServerSidePagination: PropTypes.bool,
};

export default DataTable;
