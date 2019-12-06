import React from 'react';
import { render } from '@testing-library/react';
import ArticleModal from './ArticleModal';
import {getArticles} from './testHelper';

test('renders the article', () => {
  const articles = getArticles();
  const article = articles[0];

  const { getByText } = render(<ArticleModal {...article}/>);
  const articleText = getByText(/Example article description/i);
  expect(articleText).toBeInTheDocument();
});
