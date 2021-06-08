import { Button, Container, makeStyles, Table, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Breadcrumbs, Typography, Grid } from '@material-ui/core';
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
  }
}));

const Clientes = () => {
  const classes = useStyles();
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://viacep.com.br/ws/63610000/json/')
    .then(function (response) {
      setData(response.data)
      setLoading(false)
    }).catch(function (error) {
      console.log(error);
    }).then(function () {
      // always executed
    }); 
  }, []);

  return (
    <div className={classes.root}>
      <Head>
        <title>Lista de clientes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu title="Clientes" isHome={false} />
      <Container maxWidth="md" className={classes.marginTop}>
        <Grid container spacing={2} className={classes.grid}>
          <Grid item xs={9}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/">
                Inicio
              </Link>
              <Typography color="textPrimary">Lista de clientes</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={3}>
            <Link href="/clientes/cadastrar">
              <Button variant="contained" size="medium" color="secondary" disableElevation>
                Cadastrar um cliente
              </Button>
            </Link>
          </Grid>
        </Grid>
        

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>Tipo</TableCell>
                <TableCell>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <>
                  <TableRow >
                    <TableCell><Skeleton animation="wave" width={100} height={30} /></TableCell>
                    <TableCell>
                      <Skeleton animation="wave" height={20} />
                      <Skeleton animation="wave" width={80} />
                    </TableCell>
                    <TableCell><Skeleton animation="wave" height={30} /></TableCell>
                    <TableCell style={{display: 'flex', flexDirection: 'row'}}>
                      <Skeleton animation="wave" width={60} height={40} />&nbsp;
                      <Skeleton animation="wave" width={60} height={40} />&nbsp;
                      <Skeleton animation="wave" width={60} height={40} />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><Skeleton animation="wave" width={120} height={30} /></TableCell>
                    <TableCell>
                      <Skeleton animation="wave" height={20} />
                      <Skeleton animation="wave" width={80} />
                    </TableCell>
                    <TableCell><Skeleton animation="wave" height={30} /></TableCell>
                    <TableCell style={{display: 'flex', flexDirection: 'row'}}>
                      <Skeleton animation="wave" width={60} height={40} />&nbsp;
                      <Skeleton animation="wave" width={60} height={40} />&nbsp;
                      <Skeleton animation="wave" width={60} height={40} />
                    </TableCell>
                  </TableRow>
                </>
              ) : (
                <>
                  {/* {data.map(cliente => ( */}
                    <TableRow key={data.cep}>
                      <TableCell>{data.localidade}</TableCell>
                      <TableCell>{data.uf}</TableCell>
                      <TableCell>{data.ibge}</TableCell>
                      <TableCell>
                        <Button variant="outlined" size="small" color="inherit" disableElevation>
                          <Link href="/clientes/vermais">
                          Ver mais
                          </Link>
                        </Button>&nbsp;
                        <Button variant="outlined" size="small" color="primary" disableElevation>
                          Editar
                        </Button>&nbsp;
                        <Button variant="outlined" size="small" color="secondary" disableElevation>
                          Excluir
                        </Button>
                      </TableCell>
                    </TableRow>
                  {/* // ))} */}
                </>
              )}
              
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );

}

export default Clientes
