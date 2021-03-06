import React from 'react';
import { render, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import {getArticles} from './testHelper';

test('renders the app', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Top Stories Today/i);
  expect(linkElement).toBeInTheDocument();
});

test('sets the articles upon a successful API call', async () => {
  const articles = getArticles();
  const fakeResponse = {
    status: 'ok',
    articles
  };

  jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => Promise.resolve(fakeResponse),
    });
  });

  const {getByText} = render(<App />);
  await wait(() => {
    const articleDiv = getByText(/Example article title/);
    expect(articleDiv).toBeInTheDocument();
  });
});

test('sets an error upon a failed API call', async () => {
  const fakeResponse = {
    status: 'error'
  };

  jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => Promise.resolve(fakeResponse),
    });
  });

  const {getByText} = render(<App />);
  await wait(() => {
    const errorDiv = getByText(/Error/);
    expect(errorDiv).toBeInTheDocument();
  });
});
