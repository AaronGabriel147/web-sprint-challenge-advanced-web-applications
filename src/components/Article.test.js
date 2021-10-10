import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';


// I do not get why all my tests fail. I rewatched the lectures and I see some strange things with 
// mocks that I do not fully understand. I am running out of time due to my kids. I did my best. 
// I will study testing more in the future.

// * [fails] Build a test that shows the `Article` component, given the correct props, 
//       can render without errors.

// * [fails] Build a test that shows that when a correctly formatted article is passed into the 
//       `Article` component, the correct headline, author, summary and body are displayed.

// * [ ] The `Article` component should display "Associated Press" when an author attribute is not avalible. Build a test that verifies that that is true.
// * [ ] Build a test that show that when the deleteButton is pressed on an Article, the handleDelete functional property is executed.
// > *Add the following tests within View.test.js.*
// * [ ] Build a test that shows the `View` component can render zero articles without errors. Make sure the mock service called made when View mounts.
// * [ ] Build a test that shows the `View` component can render three articles without errors. Make sure the mock service called made when View mounts.

// Do not know what this means.
test('renders component without errors', () => {
    // render(<Article article={article} />)
    // const article = screen.queryAllByTestId("article")
    // expect(article).toBeInTheDocument();
});

// Not sure what they are asking for. There is a typo or I am very confused "headline, author"???
test('renders headline, author from the article when passed in through props', () => {
//     render (<Article article={testArticle} />)
//     const headline = screen.queryAllByTestId("headline")
//     expect(headline).toBeInTheDocument();
});



test('renders "Associated Press" when no author is given', () => {
});

test('executes handleDelete when the delete button is pressed', () => {
});

// Task List:
// 1. Complete all above tests.Create test article data when needed.