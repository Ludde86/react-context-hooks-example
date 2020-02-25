import React, { useContext } from 'react';
import Article from '../components/Article/Article';
import { ArticleContext } from '../context/articleContext';

const Articles = () => {
	/* we can now get the data from the articleContext (the provider) */
	// const [articles, setArticles] = useState([
	//     { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
	//     { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
	//   ])

	// here we now consume the context
	const { articles } = useContext(ArticleContext);
	return <div>{articles.map((article) => <Article key={article.id} article={article} />)}</div>;
};

export default Articles;
