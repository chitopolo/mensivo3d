import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';

const App = () => {
  return (
    <Box sx={{ backgroundColor: '#121212', color: 'white', minHeight: '100vh' }}>
      {/* Header */}
      <Box sx={{ background: 'linear-gradient(90deg, #ff6f61, #de5d83)', textAlign: 'center', p: 3 }}>
        <Typography variant="h3" fontWeight="bold">Mensivo 3D</Typography>
        <Typography variant="h6">Transformamos tus ideas en realidad con impresión 3D de alta calidad</Typography>
      </Box>

      {/* Sobre Nosotros */}
      <Container sx={{ textAlign: 'center', py: 5 }}>
        <Typography variant="h4">Sobre Nosotros</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Ofrecemos servicios de impresión 3D personalizados para diferentes necesidades, desde prototipos hasta objetos decorativos.
        </Typography>
        <Button variant="contained" sx={{ mt: 3, backgroundColor: '#ff6f61' }} href="#trabajos">
          Ver Trabajos
        </Button>
      </Container>

      {/* Trabajos Realizados */}
      <Container id="trabajos" sx={{ textAlign: 'center', py: 5 }}>
        <Typography variant="h4">Trabajos Realizados</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', mt: 3 }}>
          <img src="https://source.unsplash.com/300x200/?3dprinter" alt="Trabajo 1" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(255, 255, 255, 0.2)' }} />
          <img src="https://source.unsplash.com/300x200/?3dprinting" alt="Trabajo 2" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(255, 255, 255, 0.2)' }} />
          <img src="https://source.unsplash.com/300x200/?technology" alt="Trabajo 3" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(255, 255, 255, 0.2)' }} />
        </Box>
      </Container>

      {/* Colaboraciones */}
      <Container sx={{ textAlign: 'center', py: 5 }}>
        <Typography variant="h4">Colaboraciones</Typography>
        <Box sx={{ mt: 3 }}>
          <iframe 
            width="300" 
            height="500" 
            src="https://www.tiktok.com/embed/your_video_url_here" 
            frameBorder="0" 
            allowFullScreen 
            style={{ borderRadius: '10px' }}
          ></iframe>
        </Box>
        <Button variant="contained" sx={{ mt: 3, backgroundColor: '#007bff' }} href="#">
          Ver Productos
        </Button>
      </Container>

      {/* Contacto */}
      <Container sx={{ textAlign: 'center', py: 5 }}>
        <Typography variant="h4">Contacto</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>Email: contacto@mensivo3d.com</Typography>
        <Typography variant="body1">Teléfono: +123 456 7890</Typography>
        <Button href="https://wa.me/59173499019" variant="contained" sx={{ mt: 3, backgroundColor: '#25D366' }}>
          WhatsApp
        </Button>
      </Container>

      {/* Footer */}
      <Box sx={{ background: 'linear-gradient(90deg, #ff6f61, #de5d83)', textAlign: 'center', p: 2 }}>
        <Typography>&copy; 2025 Mensivo 3D - Todos los derechos reservados</Typography>
      </Box>
    </Box>
  );
};

export default App;
