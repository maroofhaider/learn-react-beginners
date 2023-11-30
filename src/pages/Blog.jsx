import React, { useEffect, useState } from 'react'
import BlogList from '../components/BlogList';

function Blog() {
	
	const [name, setName] = useState('Official Blog');
	
	const handleClick = ({}) => {
		setName('Articles & News')
	}

	const handleDelPost = (id) => {
		const newBlogs = blogs.filter( blog => blog.id !== id);
		setBlogs(newBlogs);
	}

	const [blogs, setBlogs] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect (() => {
		fetch('http://localhost:8000/blogs')
			.then(res => {
				if(!res.ok) {
					// console.log('abc.err')
					throw Error('Error Error');
				}
				return res.json();
			})
			.then(data => {
				setBlogs(data);
				setIsLoading(false);
			})
			.catch(err => {
				setIsLoading(false);
				setError(err.message);
			})
	}, []);

	return (
		<section className='mh-blog'>
			<h1 className='tuts-heading'>{name}</h1>
			{isLoading && <div className='blog-msg'>Loading... state please wait!</div>}
			{error && <div className='blog-msg'>Something went wrong error here...</div>}
			{blogs && <BlogList blogs={blogs} handleClick={handleClick} handleDelPost={handleDelPost} />}
		</section>		
	)
}

export default Blog