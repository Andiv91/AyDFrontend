import React from 'react';
import { Typography, Box, Container, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function HomePage() {
  const theme = useTheme();
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold" sx={{ color: '#111', fontWeight: 'bold' }}>
          Bienvenido de vuelta!
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Bienvenido a PythPal, aquí aprenderás todo lo necesario.
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Paper elevation={0} sx={{ p: 3, mb: 4, bgcolor: theme.palette.background.paper, color: theme.palette.text.primary, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ color: '#111', fontWeight: 'bold' }}>
              Ejercicios Resueltos:
            </Typography>
          </Paper>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom fontWeight="medium" sx={{ color: '#111', fontWeight: 'bold' }}>
              Bienvenido a PythPal, tu espacio para aprender Python de manera práctica y profesional.
            </Typography>
            <Typography paragraph>
              En nuestra plataforma encontrarás ejercicios diseñados por expertos en programación que te guiarán desde los conceptos 
              más básicos hasta los más avanzados. Ya seas un principiante que quiere dar sus primeros pasos en la programación o un 
              desarrollador que busca profundizar sus conocimientos, tenemos el curso perfecto para ti.
            </Typography>
            <Typography paragraph sx={{ mt: 2 }}>
              Usa los botones de la izquierda para ver tus mensajes, los ejercicios que hayas intentado, los profesores y sus ejercicios, y 
              ajustar tu cuenta.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default HomePage; 