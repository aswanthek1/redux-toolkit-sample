import React from 'react'
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductList, Headers } from "../components";
import { fetchUser } from "../redux/user";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchUser());
    }, []);
    const counterRef = useRef(2);
  
    const { userDetails } = useSelector((state) => state.user);
  
    return (
      <>
        <Headers />
        <ProductList />
        <button
          onClick={() => {
            dispatch(fetchUser(++counterRef.current));
          }}
        >
          Load more users
        </button>
        <pre>{JSON.stringify(userDetails, undefined, 4)}</pre>
      </>
    );
}

export default Home
