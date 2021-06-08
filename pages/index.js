import { Button, Card, CardActions, CardContent, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import Head from 'next/head'
import Menu from '../components/Menu'
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f1f1f4',
    flex: 1,
    minHeight: '100vh'
  },
  container: {
    marginTop: theme.spacing(2)
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Head>
        <title>Front do playground</title>
        <meta name="description" content="Simples dashboard para usar a API do playground" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Menu title="Bem-vindo" isHome={true}/>

      <Container maxWidth="md" className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card variant="elevation">
              <CardContent>
                <Typography color="primary" gutterBottom component="h4">
                  Clientes
                </Typography>
                <Typography variant="body2" component="p">
                  Veja todos os clientes cadastrados no banco de dados.
                </Typography>
              </CardContent>
              <CardActions>
                <Link href="/clientes">
                  <Button size="small" color="primary" variant="text" disableElevation>Ver clientes</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card variant="elevation">
              <CardContent>
                <Typography color="primary" gutterBottom component="h4">
                  Endereços
                </Typography>
                <Typography variant="body2" component="p">
                  Veja todos os rndereços cadastrados no banco de dados.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" variant="text" disableElevation>Ver endereços</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card variant="elevation">
              <CardContent>
                <Typography color="primary" gutterBottom component="h4">
                  Pontos
                </Typography>
                <Typography variant="body2" component="p">
                  Veja todos os pontos cadastrados no banco de dados.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" variant="text" disableElevation>Ver pontos</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card variant="elevation">
              <CardContent>
                <Typography color="primary" gutterBottom component="h4">
                  Contratos
                </Typography>
                <Typography variant="body2" component="p">
                  Veja todos os contratos cadastrados no banco de dados.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" variant="text" disableElevation>Ver contratos</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
