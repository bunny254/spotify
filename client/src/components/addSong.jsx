import {React, useState} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import {Formik,Form, useFormik} from 'formik';
import { Input } from '@mui/material';
import Box from '@mui/material/Box';
 


const AddSong = () => {
    const [error, setError]=useState(null);
    const onSubmit= async (values)=>{
        setError(null);
        console.log(values);
    }
    const formik=useFormik({
        validateOnBlur: true,
        onSubmit
    })
  return (
    <div>
        <div>
            <h1>Add Music</h1>
        </div>
        <div>
            <Box>
            <Formik initialValues={{audio1:''}} onSubmit={(values)=>{console.log(values)}}>
                {(props)=>(
                    <Form>
                    <Input type='file' name='audio1' placeholder='select music file' onChange={(e)=>props.setFieldValue('audio1', e.target.files[0])} onBlur={formik.handleBlur}/>
                    <Button type='submit'>Submit</Button>
                    </Form>
                )}
                
            </Formik>
            </Box>
        </div>
    </div>
  )
}

export default AddSong;





/*
import * as yup from 'yup';
import {useFormik} from 'formik';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Input } from '@mui/material';



const AddSong = () => {

    const onSubmit=async (values)=>{
        console.log(values)
    }

    const formik=useFormik({
        initialValues: {audio1:''},
        validateOnBlur: true,
        onSubmit
      })

    const theme = createTheme();
  return (
    <div>
        <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        
        <Typography component="h1" variant="h5">
            Add Song
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit}>
          <Input
            type='file'
            name='audio1'
            placeholder='select music file'
            onChange={(event) => {
                setFieldValue("audio1", event.currentTarget.files[0])}}
          />

          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          
            </Box>
            </Box>
        </Container>
    </ThemeProvider>
        
    </div>
  )
}

export default AddSong; */