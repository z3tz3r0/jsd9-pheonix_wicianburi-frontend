import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons({ text = "" }) {
  return (
    <Button variant="contained">{text}</Button>
  );
}