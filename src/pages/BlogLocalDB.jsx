import React, { useEffect, useState } from 'react'
import BlogList from '../components/BlogList';

function Blog() {
	
	const [name, setName] = useState('Official Blog');
	
	const handleClick = ({}) => {
		setName('Articles & News')
	}

	// const [delPost, setDelPost] =  useState(id)
	const handleDelPost = (id) => {
		const newBlogs = blogs.filter( blog => blog.id !== id);
		setBlogs(newBlogs);
	}
	
	//inpage map data function
	// const [blogs, setBlogs] = useState([
	// 	{
	// 		imgPath: './assets/images/blog-img/blog-post-3.avif',
	// 		title: 'Creating And Maintaining A Voice Of Customer Program', 
	// 		content: 'In Part 1 of the series, Temani Afif demonstrated how creating ribbon patterns in CSS has evolved with the availability of new CSS features. In this second installment of this brief two-part series, we look at two additional ribbon variations that introduce techniques for masking a repeated background gradient in CSS.', 
	// 		author: 'Temani Afif', 
	// 		id: '1' 
	// 	},
	// 	{
	// 		imgPath: './assets/images/blog-img/blog-post-2.jpg',
	// 		title: 'Creating And Maintaining A Voice Of Customer Program', 
	// 		content: 'In Part 1 of the series, Temani Afif demonstrated how creating ribbon patterns in CSS has evolved with the availability of new CSS features. In this second installment of this brief two-part series, we look at two additional ribbon variations that introduce techniques for masking a repeated background gradient in CSS.', 
	// 		author: 'Temani Afif', 
	// 		id: '2' 
	// 	},
	// 	{
	// 		imgPath: './assets/images/blog-img/blog-post-1.jpg',
	// 		title: 'Creating And Maintaining A Voice Of Customer Program', 
	// 		content: 'In Part 1 of the series, Temani Afif demonstrated how creating ribbon patterns in CSS has evolved with the availability of new CSS features. In this second installment of this brief two-part series, we look at two additional ribbon variations that introduce techniques for masking a repeated background gradient in CSS.', 
	// 		author: 'Temani Afif', 
	// 		id: '3' 
	// 	},
	// 	{
	// 		imgPath: './assets/images/blog-img/blog-post-4.avif',
	// 		title: 'Creating And Maintaining A Voice Of Customer Program', 
	// 		content: 'In Part 1 of the series, Temani Afif demonstrated how creating ribbon patterns in CSS has evolved with the availability of new CSS features. In this second installment of this brief two-part series, we look at two additional ribbon variations that introduce techniques for masking a repeated background gradient in CSS.', 
	// 		author: 'Temani Afif', 
	// 		id: '4' 
	// 	},
	// 	{
	// 		imgPath: './assets/images/blog-img/blog-post-2.jpg',
	// 		title: 'Creating And Maintaining A Voice Of Customer Program', 
	// 		content: 'In Part 1 of the series, Temani Afif demonstrated how creating ribbon patterns in CSS has evolved with the availability of new CSS features. In this second installment of this brief two-part series, we look at two additional ribbon variations that introduce techniques for masking a repeated background gradient in CSS.', 
	// 		author: 'Temani Afif', 
	// 		id: '5' 
	// 	},
	// 	{
	// 		imgPath: './assets/images/blog-img/blog-post-1.jpg',
	// 		title: 'Creating And Maintaining A Voice Of Customer Program', 
	// 		content: 'In Part 1 of the series, Temani Afif demonstrated how creating ribbon patterns in CSS has evolved with the availability of new CSS features. In this second installment of this brief two-part series, we look at two additional ribbon variations that introduce techniques for masking a repeated background gradient in CSS.', 
	// 		author: 'Temani Afif', 
	// 		id: '6' 
	// 	}
	// ])

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