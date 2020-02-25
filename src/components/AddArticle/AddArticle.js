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
		<form onSubmit={addNewArticle} className="container mt-3">
			<div className="form-group">
				<label htmlFor="title">Title</label>
				<input type="text" className="form-control" id="title" onChange={handleArticleData} />
			</div>
			<div className="form-group">
				<label htmlFor="body">Body</label>
				<input type="text" className="form-control" id="body" onChange={handleArticleData} />
			</div>

			<button type="submit" className="btn btn-primary">
				Add article
			</button>
		</form>
	);
};

export default AddArticle;
