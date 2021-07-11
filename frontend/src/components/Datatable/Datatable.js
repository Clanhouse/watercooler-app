import { useState, useImperativeHandle, forwardRef } from 'react';
import Table from 'react-data-table-component';
import PropTypes from 'prop-types';

import { ReactComponent as EditIcon } from '../../assets/editIcon.svg';
import { ReactComponent as DeleteIcon } from '../../assets/deleteIcon.svg';

const DataTable = forwardRef((props, ref) => {
  const {
    title,
    onDelete,
    onEdit,
    onAdd,
    currentPage,
    setCurrentPage,
    loading,
    data,
    columns,
    perPage,
    setPerPage,
    enablePagination,
    enableServerSidePagination,
  } = props;

  const [activePage, setActivePage] = useState(currentPage);
  const [resultsPerPage, setResultsPerPage] = useState(perPage);

  useImperativeHandle(ref, () => ({
    changeActivePageHandler() {
      const page = setCurrentPage();
      setActivePage(page);
    },

    changeNumberOfRowsPerPageHandler() {
      const rowsToShow = setPerPage();
      setResultsPerPage(rowsToShow);
    },
  }));

  const allowedRowActions = [
    { name: 'onEdit', icon: <EditIcon fill="blue" /> },
    { name: 'onDelete', icon: <DeleteIcon fill="red" /> },
  ];

  const rowActions = allowedRowActions
    .filter((action) => props[action.name])
    .map((action) => {
      const btnAction = props[action.name];
      return {
        cell: () => (
          <button type="button" onClick={btnAction}>
            {action.icon}
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
      title={title}
      pagination={enablePagination}
      onDelete={onDelete}
      onEdit={onEdit}
      onAdd={onAdd}
      paginationDefaultPage={activePage}
      progressPending={loading}
      data={data}
      columns={updatedColumns}
      paginationPerPage={resultsPerPage}
      paginationServer={enableServerSidePagination}
    />
  );
});

DataTable.defaultProps = {
  title: '',
  onDelete: null,
  onEdit: null,
  onAdd: null,
  currentPage: 1,
  setCurrentPage: null,
  loading: false,
  data: [],
  columns: [],
  perPage: 15,
  setPerPage: null,
  enablePagination: true,
  enableServerSidePagination: false,
};

DataTable.propTypes = {
  title: PropTypes.string,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onAdd: PropTypes.func,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  loading: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.object),
  perPage: PropTypes.number,
  setPerPage: PropTypes.func,
  enablePagination: PropTypes.bool,
  enableServerSidePagination: PropTypes.bool,
};

export default DataTable;
