import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import axios from "axios"

import './PostData.css'







export default function App() {



  let [array, setArray] = useState([])



  let [ setInputdata] = useState(
    {
      title: "",
      description: "",
      qty: "",
      price: "",
      date: "",

    })
  let [title, setTitle] = useState('');
  let [description, setDescription] = useState('');
  let [qty, setQty] = useState('');
  let [price, setPrice] = useState('');
  let [date, setDate] = useState('');

  const [imageupload, setImage] = useState("")
  let getFile = (e) => {
    setImage(e.target.files[0]);
  };


  const submitData = async (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("imageupload", imageupload);
    data.append("title", title);
    data.append("description", description);
    data.append("qty", qty);
    data.append("price", price);
    data.append("date", date);




    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const res = await axios.post(
      "http://localhost:6200/postmytable",
      data,
      config
    );

    console.log("responses of data", res);

  };


  function addinputdata() {

    setArray([...array, { imageupload, title, description, qty, price, date }])
    setInputdata({ imageupload: "", title: "", description: "", qty: "", price: "", date: "" })


  }

  console.log(array, "total array")


  function deletedata(i) {
    console.log(i, "this index row want to be deleted")
    let total = [...array]
    total.splice(i, 1)
    setArray(total)

  }


  return (

    <>
      <div>


        <div style={{ marginLeft: '120px', borderStyle: 'ridge', marginTop: '40px', backgroundColor: 'aliceblue', width: '80vw', borderTopLeftRadius: '40px', borderTopRightRadius: '40px', borderBottomLeftRadius: '40px', borderBottomRightRadius: '40px' }}>
          <div>

            <input type="file" name='imageupload' placeholder="selectimage" onChange={getFile} style={{ marginLeft: '145px' }} />



            <input type="text" value={title} name='title' autoComplete='off' placeholder="Title" onChange={(e) => {
              setTitle(e.target.value);
            }} />

            <input type="text" value={description} name='description' placeholder="Description" onChange={(e) => {
              setDescription(e.target.value);
            }} />

            <input type="number" value={qty} name='qty' placeholder=" qty" onChange={(e) => {
              setQty(e.target.value);
            }} />

            <input type="number" value={price} name='price' placeholder="price" onChange={(e) => {
              setPrice(e.target.value);
            }} />

            <input type="date" value={date} name='date' placeholder="Select Date" onChange={(event) => {
              setDate(event.target.value);
            }} />


            <button onClick={addinputdata}> + </button>



            <br />



            <table border="2" width="72%" style={{ marginLeft: '145px' }} >
              <body>
                <tr style={{ backgroundColor: 'white' }} >
                  <td >Image</td>

                  <td width="%">Title</td>
                  <td width="15%">Description</td>
                  <td width="15%">Qty</td>
                  <td width="15%">Price</td>
                  <td width="%">Date</td>
                  <td style={{ width: '21vw' }}>Delete</td>
                </tr>


                {


                  array && array.map(
                    (item, i) => {
                      return (
                        <tr key={i}>
                          <td>{item.image}</td>

                          <td>{item.title}</td>
                          <td>{item.description}</td>
                          <td>{item.qty}</td>
                          <td>{item.price}</td>
                          <td>{item.date}</td>

                          <td><button style={{ width: '40px', backgroundColor: 'rgb(220,53,69)' }} onClick={() => deletedata(i)}>-</button></td>


                        </tr>
                      )
                    }

                  )
                }
              </body>
            </table>
            <Button style={{ width: '6vw', marginLeft: '870px' }} type='submit' onClick={submitData} variant="primary">Save</Button>{' '}


          </div>


        </div>
        <div>
        </div>
      </div>
    </>

  )
}

