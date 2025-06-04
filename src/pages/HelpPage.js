import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import Layout from '../components/Layout';

export default function HelpPage() {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
          <Paper elevation={0} sx={{ p: 4, bgcolor: 'transparent', borderRadius: 2 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ fontFamily: 'Poppins, sans-serif', color: '#fff' }}>
              Preguntas Frecuentes
            </Typography>

            <Typography variant="h6" fontWeight="bold" sx={{ mt: 3, fontFamily: 'Poppins, sans-serif', color: '#fff' }}>
              ¿Qué pasa si me queda mal un ejercicio?
            </Typography>
            <Typography paragraph sx={{ fontFamily: 'Poppins, sans-serif', color: '#fff' }}>
              ¡No te preocupes! Esto es una plataforma para aprender, puedes fallar las veces que quieras, lo importante es que aprendas :)
            </Typography>

            <Typography variant="h6" fontWeight="bold" sx={{ mt: 3, fontFamily: 'Poppins, sans-serif', color: '#fff' }}>
              ¿Puedo hablar con un profesor de un ejercicio?
            </Typography>
            <Typography paragraph sx={{ fontFamily: 'Poppins, sans-serif', color: '#fff' }}>
              ¡Sí! Si no entiendes qué hay que hacer, en cada ejercicio hay un botón de "Mensaje" que le enviará un mensaje al profesor que creó el ejercicio, cuando él lo lea, te llegará a tu pestaña de mensajes.
            </Typography>

            <Typography variant="h6" fontWeight="bold" sx={{ mt: 3, fontFamily: 'Poppins, sans-serif', color: '#fff' }}>
              ¿A cuántos ejercicios puedo entrar?
            </Typography>
            <Typography paragraph sx={{ fontFamily: 'Poppins, sans-serif', color: '#fff' }}>
              A los que quieras, el único límite es tu tiempo libre.
            </Typography>

            <Typography variant="h6" fontWeight="bold" sx={{ mt: 3, fontFamily: 'Poppins, sans-serif', color: '#fff' }}>
              ¿Habrán otros idiomas a futuro?
            </Typography>
            <Typography paragraph sx={{ fontFamily: 'Poppins, sans-serif', color: '#fff' }}>
              Sí, en un futuro habrán muchos más, pero por ahora estamos enfocados en Python.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Layout>
  );
} 