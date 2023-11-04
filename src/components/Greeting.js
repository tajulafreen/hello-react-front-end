import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from '../redux/features/greetingsSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting.message);
  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch, greeting]);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default Greeting;