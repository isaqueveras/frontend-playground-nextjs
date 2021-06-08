import { Button, Container, makeStyles, Table, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Breadcrumbs, Typography, Grid, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';

import Skeleton from '@material-ui/lab/Skeleton';

import axios from 'axios'
import Head from 'next/head';
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f1f1f4',
    flex: 1,
    minHeight: '100vh'
  },
  marginTop: {
    marginTop: theme.spacing(2)
  },
  grid: {
    marginBottom: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '100%',
  },
  paper: {
    padding: 20
  }
}));

const Clientes = () => {
  const classes = useStyles();
  // const [data, setData] = useState([])
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   axios.get('https://viacep.com.br/ws/63610000/json/')
  //   .then(function (response) {
  //     setData(response.data)
  //     setLoading(false)
  //   }).catch(function (error) {
  //     console.log(error);
  //   }).then(function () {
  //     // always executed
  //   }); 
  // }, []);

  return (
    <div className={classes.root}>
      <Head>
        <title>Dados do cliente</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu title="Clientes" isHome={false} />
      <Container maxWidth="md" className={classes.marginTop}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Inicio
          </Link>
          <Link color="inherit" href="/clientes">
            Lista de clientes
          </Link>
          <Typography color="textPrimary">Dados do cliente</Typography>
        </Breadcrumbs>

        <Paper className={classes.paper}>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Typography color="textPrimary">Nome</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography color="textSecondary">Isaque Veras</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Typography color="textPrimary">Nome</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography color="textSecondary">Isaque Veras</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Typography color="textPrimary">Nome</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography color="textSecondary">Isaque Veras</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Typography color="textPrimary">Nome</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography color="textSecondary">Isaque Veras</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Typography color="textPrimary">Nome</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography color="textSecondary">Isaque Veras</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Typography color="textPrimary">Nome</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography color="textSecondary">Isaque Veras</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Typography color="textPrimary">Nome</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography color="textSecondary">Isaque Veras</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Typography color="textPrimary">Nome</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography color="textSecondary">Isaque Veras</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Link href="/clientes">
                <Button size="small" color="secondary" variant="contained" disableElevation>Voltar</Button>
              </Link>
            </Grid>
          </Grid>
        </Paper>
      
      </Container>
    </div>
  );

}

export default Clientes
