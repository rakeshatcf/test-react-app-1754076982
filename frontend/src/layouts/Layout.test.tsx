import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout Component', () => {
  const renderWithRouter = (children: React.ReactNode) => {
    return render(
      <BrowserRouter>
        <Layout>{children}</Layout>
      </BrowserRouter>
    );
  };

  test('renders header, main content and footer', () => {
    renderWithRouter(<div>Test Content</div>);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  test('renders navigation link', () => {
    renderWithRouter(<div>Test Content</div>);
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  });

  test('renders children content', () => {
    renderWithRouter(<div>Test Content</div>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});