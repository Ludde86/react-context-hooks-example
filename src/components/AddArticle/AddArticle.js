import React, { useState, useContext } from 'react';
import { ArticleContext } from '../../context/articleContext';

const AddArticle = () => {
	/* here we now consume the context */
	// const { saveArticle } = useContext(ArticleContext);

	// instead of pulling out saveArticle, now we get the dispatch function
	const { dispatch } = useContext(ArticleContext);
	const [ article, setArticle ] = useState();

	const handleArticleData = (e) => {
		setArticle({
			...article,
			[e.target.id]: e.target.value
		});
	};
	const addNewArticle = (e) => {
		e.preventDefault();
		dispatch({ type: 'ADD_ARTICLE', article }); // the new article
		// saveArticle(article); -> the action ADD_ARTICLE functionality is the same as saveArticle
	};

	return (
		<form onSubmit={addNewArticle} className="add-article">
			<input type="text" id="title" placeholder="Title" onChange={handleArticleData} />
			<input type="text" id="body" placeholder="Body" onChange={handleArticleData} />
			<button type="submit">Add article</button>
		</form>
	);
};

export default AddArticle;
