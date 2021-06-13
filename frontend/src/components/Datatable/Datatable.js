import Table from 'react-data-table-component';
import PropTypes from 'prop-types';

const DataTable = ({
  onDelete,
  onEdit,
  onAddNew,
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
}) => {
  const rowActions = [];

  if (onEdit) {
    rowActions.push({
      cell: () => (
        <button type="button" onClick={onEdit}>
          Edit
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    });
  }

  if (onDelete) {
    rowActions.push({
      cell: () => (
        <button type="button" onClick={onDelete}>
          Delete
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    });
  }

  const updatedColumns = [...columns, ...rowActions];

  return (
    <Table
      onDelete={onDelete}
      onEdit={onEdit}
      onAddNew={onAddNew}
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
  onAddNew: null,
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
  onAddNew: PropTypes.func,
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
