import React from 'react';
import { render } from '@testing-library/react';
import Article from './Article';
import {getArticles} from './testHelper';

test('renders the article', () => {
  const articles = getArticles();
  const {urlToImage, title, source} = articles[0];

  const { getByText } = render(<Article urlToImage={urlToImage} title={title} sourceName={source.name} />);
  const articleText = getByText(/Example article title/i);
  expect(articleText).toBeInTheDocument();
});
