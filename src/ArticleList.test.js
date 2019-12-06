import React from 'react';
import { render } from '@testing-library/react';
import GridList from '@material-ui/core/GridList';
import ArticleList from './ArticleList';
import {getArticles} from './testHelper';
import { shallow } from 'enzyme';
import mediaQuery from 'css-mediaquery';

function createMatchMedia(width) {
  return query => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

test('renders the list', () => {
  const articles = getArticles();

  const { getByText } = render(<ArticleList articles={articles} />);
  const articleText = getByText(/Example article title/i);
  expect(articleText).toBeInTheDocument();
});

describe('responsive', () => {
  it('uses 3 columns for lg', () => {
    const articles = getArticles();
    const articleList = shallow(<ArticleList articles={articles} />);
    const gridList = articleList.find(GridList);
    expect(gridList.props().cols).toEqual(3);
  });

  it('uses 2 columns for md', () => {
    window.matchMedia = createMatchMedia(1100);
    const articles = getArticles();
    const articleList = shallow(<ArticleList articles={articles} />)
    const gridList = articleList.find(GridList);
    expect(gridList.props().cols).toEqual(2);
  });

  it('uses 1 column for sm', () => {
    window.matchMedia = createMatchMedia(200);
    const articles = getArticles();
    const articleList = shallow(<ArticleList articles={articles} />)
    const gridList = articleList.find(GridList);
    expect(gridList.props().cols).toEqual(1);
  });
});
