import React from 'react'
import Table from 'react-bootstrap/Table';

const Posts = ({ posts, loading }) => {

    console.log(posts, "ayuhs")
    if (loading) {
        return <h2>Loading...</h2>

    }
    return (

        <Table striped bordered hover>
        <thead>
          <tr>
            <th>image</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
        {  posts.map((item,index)=>{
            return(
                <tr>
            <td>{item.image}</td>
            <td>{item.title}</td>
          </tr>

            )
        })
            
        }
         
        </tbody>
      </Table>
    );

}

export default Posts