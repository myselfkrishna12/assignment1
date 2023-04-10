

import React from 'react'

const GetData = ({ posts, loading }) => {

  console.log(posts, "ayuhs")
  if (loading) {
    return

  }
  return (


    <>

      <div>

      

        <div style={{ width: '80vw', borderStyle: 'groove', marginLeft: '125px', backgroundColor: 'aliceblue', marginTop: '60px', borderTopLeftRadius: '40px', borderTopRightRadius: '40px', borderBottomLeftRadius: '40px', borderBottomRightRadius: '40px' }} >


       

          <table border="2" width="72%" style={{ marginLeft: '140px', marginTop: '50px' }} >
            <body>
              <thead>
                <tr style={{ backgroundColor: 'white' }} >
                  <th style={{ padding: '10px', borderRadius: '20px' }}>Image</th>

                  <th style={{ borderRadius: '20px' }} width="70%">Title</th>

                </tr>
              </thead>

              <tbody>
                {posts.map((value, index) => {

                  return (<>
                    <tr key={index} >
                      <td><img style={{ borderRadius: "50", height: "50px" }} src={`http://localhost:6200/${value.image}` } alt={"image"}/></td>
                      <td><h4 style={{marginLeft:'5px',marginTop:'5px'}}>{value.title}</h4>


                   <h6>  <i style={{marginLeft:'7px'}}>  {value.description}; {value.price}; {value.qty}; {value.qty}; {value.date};</i></h6></td>
                     
                    </tr>
                    


                    
                    </>)



                    


                  
                })}
              </tbody>

            </body>
          </table>
        

        </div>




        <div>
        </div>

       
      </div>





    </>

  )

}

export default GetData