export const mockArtisans = [
  {
    id: 'art-1',
    name: 'María González',
    community: 'San Juan Chamula, Chiapas',
    story: 'Artesana textil con 20 años de experiencia, especializada en bordados tradicionales tzotziles.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
  },
  {
    id: 'art-2',
    name: 'Pedro Martínez',
    community: 'Tlaquepaque, Jalisco',
    story: 'Maestro alfarero de tercera generación, experto en técnicas prehispánicas de cerámica.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
  }
];

export const mockProducts = [
  {
    id: 'prod-1',
    title: 'Textil Bordado Tzotzil',
    description: 'Blusa tradicional elaborada a mano con bordados que representan la cosmovisión maya. Cada pieza es única y requiere 2 semanas de trabajo.',
    price: 1250,
    images: [
      'https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg',
      'https://images.pexels.com/photos/6069002/pexels-photo-6069002.jpeg'
    ],
    artisan: mockArtisans[0],
    category: 'Textiles',
    stock: 3,
    materials: ['Algodón', 'Hilos de colores naturales'],
    dimensions: { width: '60cm', height: '70cm' }
  },
  {
    id: 'prod-2',
    title: 'Cerámica Talavera Azul',
    description: 'Jarrón decorativo hecho con técnica de talavera poblana. Pintado a mano con motivos florales tradicionales.',
    price: 890,
    images: [
      'https://images.pexels.com/photos/3094218/pexels-photo-3094218.jpeg',
      'https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg'
    ],
    artisan: mockArtisans[1],
    category: 'Cerámica',
    stock: 5,
    materials: ['Barro', 'Esmaltes naturales'],
    dimensions: { height: '25cm', diameter: '15cm' }
  },
  {
    id: 'prod-3',
    title: 'Rebozo de Seda Natural',
    description: 'Rebozo tejido en telar de pedal con seda natural. Diseño tradicional de Santa María del Río.',
    price: 2100,
    images: [
      'https://images.pexels.com/photos/6069173/pexels-photo-6069173.jpeg',
      'https://images.pexels.com/photos/7191985/pexels-photo-7191985.jpeg'
    ],
    artisan: mockArtisans[0],
    category: 'Textiles',
    stock: 2,
    materials: ['Seda natural', 'Tintes vegetales'],
    dimensions: { width: '70cm', length: '200cm' }
  },
  {
    id: 'prod-4',
    title: 'Set de Vajilla Barro Negro',
    description: 'Juego de 6 platos de barro negro de Oaxaca. Técnica ancestral de cocción sin oxígeno.',
    price: 1450,
    images: [
      'https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg',
      'https://images.pexels.com/photos/5864282/pexels-photo-5864282.jpeg'
    ],
    artisan: mockArtisans[1],
    category: 'Cerámica',
    stock: 4,
    materials: ['Barro negro', 'Cuarzo para bruñido'],
    dimensions: { diameter: '20cm', height: '3cm' }
  },
  {
    id: 'prod-5',
    title: 'Tapete Zapoteco Lana',
    description: 'Tapete tejido en telar de pedal con lana virgen. Diseño geométrico zapoteco con tintes naturales.',
    price: 3200,
    images: [
      'https://images.pexels.com/photos/6069066/pexels-photo-6069066.jpeg',
      'https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg'
    ],
    artisan: mockArtisans[0],
    category: 'Textiles',
    stock: 1,
    materials: ['Lana virgen', 'Tintes de cochinilla y añil'],
    dimensions: { width: '90cm', length: '150cm' }
  },
  {
    id: 'prod-6',
    title: 'Maceta Decorativa Pintada',
    description: 'Maceta de barro decorada con motivos prehispánicos. Ideal para plantas suculentas.',
    price: 480,
    images: [
      'https://images.pexels.com/photos/4505166/pexels-photo-4505166.jpeg',
      'https://images.pexels.com/photos/7656745/pexels-photo-7656745.jpeg'
    ],
    artisan: mockArtisans[1],
    category: 'Cerámica',
    stock: 8,
    materials: ['Barro rojo', 'Pigmentos naturales'],
    dimensions: { height: '15cm', diameter: '12cm' }
  }
];
