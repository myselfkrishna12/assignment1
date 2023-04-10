import React from 'react'
const Pagination =({ postsPerPage, totalPosts,paginate }) => {

    const pageDate = [];

    for(let i=1; i<=Math.ceil(totalPosts/postsPerPage); i++){
    pageDate.push(i);}
    

  return (
    <div>
    <nav style={{marginLeft:'1200px',marginTop:'-100px', display:'flex'}}>
    <ul className="pagination">
    {pageDate.map(date => (
    <li key={date} className = "page-item">

    <a onClick={() => paginate(date)} href ="!#" className="page-link">
        {date}
    </a>

    </li>
   )) }
   </ul>
    </nav>
    </div>
  )

}





;
export default Pagination;