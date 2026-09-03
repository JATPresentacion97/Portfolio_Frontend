import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';
import { caseStudies, experiences } from './data/portfolio';

describe('portfolio', () => {
  it('renders the senior-engineering positioning and every career chapter', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('EnterpriseEngineer');
    expect(screen.getByText('Senior Solutions Architect · Senior Java Backend Engineer')).toBeInTheDocument();

    experiences.forEach(({ company }) => {
      expect(screen.getByRole('heading', { name: company })).toBeInTheDocument();
    });
  });

  it('renders five detailed case studies with safe external links', () => {
    const { container } = render(<App />);

    caseStudies.forEach(({ name }) => {
      expect(screen.getByRole('heading', { name: new RegExp(`^${name}`) })).toBeInTheDocument();
    });

    expect(screen.getAllByText('Challenge')).toHaveLength(caseStudies.length);
    container.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]').forEach((link) => {
      expect(link.rel).toContain('noopener');
      expect(link.rel).toContain('noreferrer');
    });
  });

  it('keeps essential navigation and downloads available', () => {
    render(<App />);

    const primaryNavigation = screen.getByRole('navigation', { name: 'Primary navigation' });
    expect(within(primaryNavigation).getByRole('link', { name: 'Experience' })).toHaveAttribute('href', '#experience');
    expect(within(primaryNavigation).getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact');
    expect(screen.getByRole('link', { name: 'Skip to main content' })).toHaveAttribute('href', '#main-content');
    screen.getAllByRole('link', { name: 'Download résumé' }).forEach((link) => {
      expect(link).toHaveAttribute('download');
      expect(link.getAttribute('href')).toMatch(/John_Albert_Presentacion_Resume\.pdf$/);
    });

    const gmailLink = screen.getByRole('link', { name: 'Compose in Gmail' });
    expect(gmailLink).toHaveAttribute('href', expect.stringContaining('to=johnalbertpresentacion@gmail.com'));
    expect(gmailLink).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link', { name: '+63 966 768 9427' })).toHaveAttribute('href', 'tel:+639667689427');

  });

  it('recovers from an invalid stored theme value', () => {
    window.localStorage.setItem('dark-mode', 'not-json');

    expect(() => render(<App />)).not.toThrow();
    const toggle = screen.getByRole('button', { name: 'Switch to light mode' });
    fireEvent.click(toggle);

    expect(window.localStorage.getItem('dark-mode')).toBe('false');
    expect(screen.getByRole('button', { name: 'Switch to dark mode' })).toBeInTheDocument();
  });
});
