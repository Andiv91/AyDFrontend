import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import Layout from '../components/Layout';

export default function ContactPage() {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
          <Paper elevation={0} sx={{ p: 4, bgcolor: 'transparent', borderRadius: 2 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ fontFamily: 'Poppins, sans-serif', color: '#fff' }}>
              Medios de contacto
            </Typography>
            <Typography paragraph sx={{ mt: 2, fontFamily: 'Poppins, sans-serif', color: '#fff' }}>
              Si necesitas ayuda con tus ejercicios no dudes en escribir a tus profesores, pero si necesitas ayuda con logística o problemas técnicos, escríbenos por estos medios:
            </Typography>
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 3, fontFamily: 'Poppins, sans-serif', color: '#fff' }}>
              Correo electrónico:
            </Typography>
            <Typography paragraph sx={{ mb: 2, fontFamily: 'Poppins, sans-serif', color: '#fff' }}>
              ayudapythpal@gmail.com
            </Typography>
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 3, fontFamily: 'Poppins, sans-serif', color: '#fff' }}>
              Número telefónico:
            </Typography>
            <Typography paragraph sx={{ fontFamily: 'Poppins, sans-serif', color: '#fff' }}>
              +57 3124228724
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Layout>
  );
} 