import React from 'react';
import { render } from '@testing-library/react';
import ArticleList from './ArticleList';
import {getArticles} from './testHelper';

test('renders the list', () => {
  const articles = getArticles();

  const { getByText } = render(<ArticleList articles={articles} />);
  const articleText = getByText(/Example article title/i);
  expect(articleText).toBeInTheDocument();
});
