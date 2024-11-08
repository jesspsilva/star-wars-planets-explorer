import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Pagination from './pagination';

describe('Pagination Component', () => {
  const mockOnPageChange = jest.fn();

  const renderPagination = (
    totalItems = 50,
    itemsPerPage = 10,
    currentPage = 1
  ) => {
    render(
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={mockOnPageChange}
      />
    );
  };

  beforeEach(() => {
    mockOnPageChange.mockClear();
  });

  it('renders the correct number of page buttons based on total items and items per page', () => {
    renderPagination();

    // Get buttons with digits
    const pageButtons = screen.getAllByRole('button', { name: /\d+/ });
    expect(pageButtons.length).toBe(5);
  });

  it('disables the Previous button on the first page', () => {
    renderPagination(50, 10, 1);

    const prevButton = screen.getByRole('button', { name: /prev/i });
    expect(prevButton).toBeDisabled();
  });

  it('disables the Next button on the last page', () => {
    renderPagination(50, 10, 5);

    const nextButton = screen.getByRole('button', { name: /next/i });
    expect(nextButton).toBeDisabled();
  });

  it('calls onPageChange with the correct page number when a page button is clicked', async () => {
    renderPagination();

    const pageButton = screen.getByRole('button', { name: '3' });
    await userEvent.click(pageButton);

    expect(mockOnPageChange).toHaveBeenCalledWith(3);
  });

  it('calls onPageChange with the correct page number when the Next button is clicked', async () => {
    renderPagination();

    const nextButton = screen.getByRole('button', { name: /next/i });
    await userEvent.click(nextButton);

    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it('calls onPageChange with the correct page number when the Previous button is clicked', async () => {
    renderPagination(50, 10, 2);

    const prevButton = screen.getByRole('button', { name: /prev/i });
    await userEvent.click(prevButton);

    expect(mockOnPageChange).toHaveBeenCalledWith(1);
  });

  it('displays only one page button when there is only one page', () => {
    renderPagination(5, 10, 1);

    // Get buttons with digits
    const pageButtons = screen.getAllByRole('button', { name: /\d+/ });
    expect(pageButtons.length).toBe(1);
    expect(pageButtons[0]).toHaveTextContent('1');
  });

  it('does not call onPageChange if the current page button is clicked', async () => {
    renderPagination();

    const currentPageButton = screen.getByRole('button', { name: '1' });
    await userEvent.click(currentPageButton);

    expect(mockOnPageChange).not.toHaveBeenCalled();
  });
});
