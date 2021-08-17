import PropTypes from 'prop-types';
import { useState } from 'react';
import { matchSorter } from 'match-sorter';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

import Table from 'react-data-table-component';
import TableFilter from './TableFilter';

import { ReactComponent as EditIcon } from '../../assets/editIcon.svg';
import { ReactComponent as DeleteIcon } from '../../assets/deleteIcon.svg';

const DataTable = (props) => {
  const {
    title,
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
    enablePagination,
    enableSSR,
  } = props;

  const { search } = useLocation();
  const values = queryString.parse(search);

  const addEntryHandler = (e) => {
    e.preventDefault();
    onAddNew();
  };

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

  const [resetPaginationToggle, setResetPagination] = useState(false);
  let filteredItems = data;
  const columnNames = columns
    .filter((column) => column.filterable === true)
    .map((column) => column.selector);

  if (searchText || values.keyword) {
    const query = searchText.split(' ') ?? values.keyword;

    filteredItems = query.reduceRight(
      (items, text) =>
        matchSorter(items, text, {
          keys: columnNames,
        }),
      data
    );
  }

  return (
    <>
      {onAddNew && (
        <button type="button" onClick={addEntryHandler}>
          + Add
        </button>
      )}
      <TableFilter
        filterText={searchText}
        onFilter={setSearchText}
        resetPaginationToggle={resetPaginationToggle}
        resetPagination={setResetPagination}
      />
      <Table
        title={title}
        noHeader={!title}
        subHeader={false}
        highlightOnHover
        onDelete={onDelete}
        onEdit={onEdit}
        onAdd={onAddNew}
        pagination={enablePagination}
        paginationServer={enableSSR}
        paginationDefaultPage={enableSSR ? values.page : currentPage}
        paginationResetDefaultPage={resetPaginationToggle}
        onChangePage={(page) => setCurrentPage(page)}
        paginationPerPage={enableSSR ? values.limit : perPage}
        onChangeRowsPerPage={(currentRowsPerPage, activePage) => {
          setPerPage(currentRowsPerPage);
          setCurrentPage(activePage);
        }}
        progressPending={loading}
        data={filteredItems}
        columns={updatedColumns}
      />
    </>
  );
};

DataTable.defaultProps = {
  title: '',
  onDelete: null,
  onEdit: null,
  onAddNew: null,
  currentPage: 1,
  setCurrentPage: () => {},
  searchText: '',
  setSearchText: () => {},
  loading: false,
  data: [],
  columns: [],
  perPage: 15,
  setPerPage: () => {},
  enablePagination: true,
  enableSSR: false,
};

DataTable.propTypes = {
  title: PropTypes.string,
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
  enablePagination: PropTypes.bool,
  enableSSR: PropTypes.bool,
};

export default DataTable;
