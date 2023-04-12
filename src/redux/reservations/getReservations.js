import { createAsyncThunk } from '@reduxjs/toolkit';
import { getToken } from '../auth/auth';

const getReservations = createAsyncThunk('getReservations', async () => {
  try {
    const response = await fetch('http://127.0.0.1:3000/bookings', {
      method: 'get',
      headers: {
        'content-type': 'application/json',
        'Cache-Control': 'no-cache',
        Authorization: getToken(),
      },
      cache: 'no-store',
    });

    const data = await response.json();
    if (data.message) {
      return { sucess: true, message: data.message };
    }

    return { sucess: true, data };
  } catch (err) {
    return { sucess: false, err };
  }
});

export default getReservations;
