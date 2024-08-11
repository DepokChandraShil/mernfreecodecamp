import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../component/Spinner";
import Previous from "../component/Previous";

const ShowBook = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  
  
  useEffect(() => {
    const fecthData = async () => {
      setLoading(true);
      await axios.get(`http://localhost:5378/books/${id}`)
        .then((res) => {
        setBooks(res.data);
       console.log(books.title);
        setLoading(false);
      })
    };
    fecthData();
  }, []);
 
  return(
    <div className='p-4'>
      <Previous />
      <h1 className='text-3xl my-4'>Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{books._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Title</span>
            <span>{books.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Author</span>
            <span>{books.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
            <span>{books.publishYear}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
            <span>{new Date(books.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
            <span>{new Date(books.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
   
 
};

export default ShowBook;


{/*  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5378/books/${_id}`)
      .then((response) => 
        setBooks(response.data);
        console.log(books);
        setLoading(false);
      )
      .catch((e) => {
        console.log(e.message);
      });
}); 



 useEffect(() => {
    const fecthData = async () => {
      setLoading(true);
      await axios.get("http://localhost:5378/books").then((res) => {
        setBooks(res.data);
        console.log(books);
        
        setLoading(false);
      });
    };
    fecthData();
  }, []);

*/}
