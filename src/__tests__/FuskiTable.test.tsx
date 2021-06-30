import './matchMedia.mock';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import FuskiTable from '../components/table/FuskiTable/FuskiTable';
import configTable from '../components/table/FuskiTable/mock';
import data from '../components/table/FuskiTable/data.json';
import customData from '../components/table/FuskiTable/customPaginationData.json';

const customTableCallbackMock = jest.fn();
const customTableElement = (
  <FuskiTable
    columns={configTable.columns}
    rowKey={configTable.rowKey}
    data={customData}
    customPagination={{
      callback: customTableCallbackMock,
      pageSize: 10,
      totalItems: customData.length,
    }}
  />
);

describe('FuskiTable', () => {
  // There is no need to test if the ant design table displays the elements correctly,
  // since it is already tested on the ant-design library.
  test('Renders correctly', () => {
    const table = render(<FuskiTable data={data} columns={configTable.columns} rowKey={configTable.rowKey} />);
    expect(table).toBeTruthy();
  });

  test('Renders with custom pagination', () => {
    const table = render(customTableElement);
    const paginators = table.queryAllByTestId('pagination');
    expect(paginators).toHaveLength(2);
  });

  test('Change page when click on next and previous buttons', () => {
    const table = render(customTableElement);
    const paginatorsInputs = table.queryAllByRole('textbox') as HTMLInputElement[];
    const topPaginatorInput = paginatorsInputs[0];
    const bottomPaginatorInput = paginatorsInputs[1];

    //expect both paginators to begin in the first page
    expect(topPaginatorInput.value).toBe('1');
    expect(bottomPaginatorInput.value).toBe('1');

    const paginatorsWrappers = table.queryAllByRole('list');
    const topPaginatorPreviousButton = paginatorsWrappers[0].firstChild!;
    const topPaginatorNextButton = paginatorsWrappers[0].lastChild!
    const bottomPaginatorPreviousButton = paginatorsWrappers[1].firstChild!;
    const bottomPaginatorNextButton = paginatorsWrappers[1].lastChild!;

    // click next button on top paginator
    // expect both pages to change
    fireEvent.click(topPaginatorNextButton);
    expect(topPaginatorInput.value).toBe('2');
    expect(bottomPaginatorInput.value).toBe('2');
    
    // click previous button on top paginator
    fireEvent.click(topPaginatorPreviousButton);
    expect(topPaginatorInput.value).toBe('1');
    expect(bottomPaginatorInput.value).toBe('1');
    
    // click next button on bottom paginator
    fireEvent.click(bottomPaginatorNextButton);
    expect(topPaginatorInput.value).toBe('2');
    expect(bottomPaginatorInput.value).toBe('2');

    // click previous button on bottom paginator
    fireEvent.click(bottomPaginatorPreviousButton);
    expect(topPaginatorInput.value).toBe('1');
    expect(bottomPaginatorInput.value).toBe('1');
  });
});
