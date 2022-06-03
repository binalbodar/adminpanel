import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function Medicine(props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expiry, setExpiry] = useState('');
  const [data, setData] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const getData = () => {
    let localData = JSON.parse(localStorage.getItem('medicine'));
    if (localData !== null) {
      setData(localData);
    }
  }
  const handleDelete=(params)=>{
      // console.log(params);
     let localData1=JSON.parse(localStorage.getItem("medicine"));
    //  console.log(localData1);
    let appData=localData1.filter((l, i) => l.id !== params.id);
    localStorage.setItem("medicine",JSON.stringify(appData));
    getData(); 

  }
  useEffect(
    () => {
      getData();
    },
    [])
  const handleSubmit = () => {
    console.log(name, price, quantity, expiry);

    let data = {
      id: Math.floor(Math.random() * 1000),
      name,
      price,
      quantity,
      expiry
    };

    let localData = JSON.parse(localStorage.getItem('medicine'));

    if (localData === null) {
      localStorage.setItem('medicine', JSON.stringify([data]));
    }
    else {
      localData.push(data)
      localStorage.setItem('medicine', JSON.stringify(localData));
    }
    handleClose();
    setName('');
    setPrice('');
    setQuantity('');
    setExpiry('');

    getData();
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'price', headerName: 'Price', width: 130 },
    { field: 'quantity', headerName: 'Quantity', width: 130 },
    { field: 'expiry', headerName: 'Expiry', width: 130 },
    {
      field: 'action',
      headerName: 'Action',
      width: 130,
      renderCell: (params) => {
        return (
          <IconButton aria-label="delete" onClick={()=>handleDelete(params)}>
            <DeleteIcon />
          </IconButton>
        )
      }

    }

  ];

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Medicine
      </Button>

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Medicine Data</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="Medicine Name"
            fullWidth
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="price"
            label="Medicine Price"
            fullWidth
            variant="standard"
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="quantity"
            label="Medicine Quantity"
            fullWidth
            variant="standard"
            onChange={(e) => setQuantity(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="expiry"
            label="Medicine Expiry"
            fullWidth
            variant="standard"
            onChange={(e) => setExpiry(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Medicine;