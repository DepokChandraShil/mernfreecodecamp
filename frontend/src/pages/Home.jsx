import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdAddCircle } from "react-icons/md";
import Spinner from "../component/Spinner";
import { Link } from "react-router-dom";
import BooksTable from "../component/BooksTable";
import BooksCard from "../component/BooksCard";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [table, setTable] = useState(false);

  useEffect(() => {
    const fecthData = async () => {
      setLoading(true);
      await axios.get("http://localhost:5378/books").then((res) => {
        setBooks(res.data);
        setLoading(false);
      });
    };
    fecthData();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto xl-px-24 px-4">
      <div className="flex flex-col justify-center items-center bg-orange-100 ">
        <h3 className="text-3xl mb-3 mt-5">Books List</h3>
        <Link to="/books/create">
          <MdAddCircle className="w-14 h-14 bg-orange-500 text-white mb-5" />
        </Link>
      </div>
      <div className="max-w-screen-2xl container mx-auto xl-px-24 px-4">
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <div className="flex justify-center items-center gap-5">
              <button
                onClick={() => setTable(true)}
                className="px-5 py-2 bg-sky-500 text-white border rounded"
              >
                Table
              </button>
              <button
                onClick={() => setTable(false)}
                className="px-5 py-2 bg-sky-500 text-white border rounded"
              >
                Card
              </button>
            </div>
            {table ? <BooksTable books={books} /> : <BooksCard books={books} />}
          </div>
        )}
      </div>
      <div className="m-auto bg-orange-100 text-center">
        <div >
            <h3 className="py-5">Registration Form</h3>
            <Link to="/form">
            <button className="px-5 py-1 bg-orange-400 text-white font-bold border-none rounded mb-5">go to form page</button>
            </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
