import React, {useState, useEffect} from 'react';
import Pagination from './Container1/Pagination';
import axios from 'axios';
import PostData from './Container/PostData/PostData';
import GetData from './Container/GetData/GetData';
const App = () => {

  const [posts,setPosts] = useState([]);

  const [loading,setLoading] = useState(false);

  const [currentPage,setCurrentPage] = useState(1);
  const[postsPerPage] = useState(10);


useEffect(() => {

  const fetchPosts = async () => {
    setLoading(true);
    const res = await axios.get('http://localhost:6200/getmytable');

    setPosts(res.data);
    setLoading(false);
}

fetchPosts();
},[]);
console.log( "assignment",posts);

///////////

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

//////change page

const paginate = pageDate => setCurrentPage(pageDate);

  return (

    <>
      <PostData/>
   <GetData posts ={currentPosts} loading = {loading}/>
   <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate ={paginate}/>

    </>
  )
}

export default App;