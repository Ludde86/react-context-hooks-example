import React, { createContext, useReducer } from 'react';
import { reducer } from './reducer';

// context helps us to handle state without passing down props on every component
export const ArticleContext = createContext();

// we define a function which will help us distribute the data through the Provider
const ArticleProvider = ({ children }) => {
	// const [ articles, setArticles ] = useState([

	// we've to pass our reducer function to it and as second argument the initial state of our application
	// useReducer gives us access to our articles and a dispatch function
	// useReducer accepts a reducer function with the initial state of our React app, and returns the current state, then dispatches a function
	const [ articles, dispatch ] = useReducer(reducer, [
		{ id: 1, title: 'post 1', body: 'Quisque cursus, metus vitae pharetra' },
		{ id: 2, title: 'post 2', body: 'Quisque cursus, metus vitae pharetra' }
	]);

	// * renamed function which add a new article to dispatch *
	// * renamed function which add a new article to dispatch *
	// const saveArticle = (article) => {
	// 	const newArticle = {
	// 		id: Math.random(),
	// 		title: article.title,
	// 		body: article.body
	// 	};
	// 	setArticles([ ...articles, newArticle ]);
	// };

	// return <ArticleContext.Provider value={{ articles, saveArticle }}>{children}</ArticleContext.Provider>;

	// give to our Provider two values: the list of articles and the method to add an article
	return <ArticleContext.Provider value={{ articles, dispatch }}>{children}</ArticleContext.Provider>;

	// we need to provide the context in order to consume it -> wrap our higher component with ArticleProvider in App.js
};

export default ArticleProvider;
