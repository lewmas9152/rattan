// ── Products Data ──
const products = [
  { id:1, name:'Monaco Sofa Set', type:'5-piece with Ottoman', category:'lounge', badge:'Featured', price:'KSh 145,000', img: 'images/img3.jpeg' },
  { id:2, name:'Versailles Corner Sofa', type:'L-Shape Sectional', category:'lounge', badge:'New', price:'KSh 185,000', img: 'images/img4.jpeg' },
  { id:3, name:'Grand Circular Sofa', type:'12-Seat Ring Sectional', category:'lounge', badge:'Premium', price:'KSh 280,000', img: 'images/img5.jpeg' },
  { id:4, name:'Palm Beach Set', type:'Sofa + 2 Chairs + Table', category:'lounge', price:'KSh 120,000', img: 'images/img6.jpeg' },
  { id:5, name:'Riviera Dining Set', type:'6-Seater Rectangle', category:'dining', badge:'Popular', price:'KSh 95,000', img: 'images/img7.jpeg' },
  { id:6, name:'Santorini Round Table', type:'4-Seater Circular', category:'dining', price:'KSh 70,000', img: 'images/img8.jpeg' },
  { id:7, name:'Bali Balcony Set', type:'2-Seater + Table', category:'dining', price:'KSh 55,000', img: 'images/img9.jpeg' },
  { id:8, name:'Havana Round Set', type:'4-Seater Nesting', category:'dining', price:'KSh 65,000', img: 'images/img10.jpeg' },
  { id:9, name:'Empress Egg Chair', type:'Double Swing · Black', category:'swing', badge:'Best Seller', price:'KSh 42,000', img: 'images/img11.jpeg' },
  { id:10, name:'Luna Swing Chair', type:'Single · Grey Rattan', category:'swing', price:'KSh 28,000', img: 'images/img12.jpeg' },
  { id:11, name:'Orbit Ball Chair', type:'Round Globe Swing', category:'swing', price:'KSh 35,000', img: 'images/img13.jpeg' },
  { id:12, name:'Wave Lounger', type:'S-Curve · 2-Person', category:'lounger', badge:'Unique', price:'KSh 48,000', img: 'images/img14.jpeg' },
  { id:13, name:'Resort Sun Lounger', type:'Adjustable · Natural', category:'lounger', price:'KSh 32,000', img: 'images/img15.jpeg' },
  { id:14, name:'Café Bistro Set', type:'2 Chairs + Round Table', category:'bistro', price:'KSh 38,000', img: 'images/img16.jpeg' },
  { id:15, name:'Garden Chair', type:'Single Arm Chair', category:'bistro', price:'KSh 12,000', img: 'images/img17.jpeg' },
  { id:16, name:'Egg Nest Chair', type:'Small Single', category:'swing', price:'KSh 22,000', img: 'images/img18.jpeg' },
];

function generateSVG(label, bg) {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='${encodeURIComponent(bg)}'/%3E%3Ctext x='200' y='145' text-anchor='middle' fill='%23C9963A' font-size='15' font-family='Georgia,serif'%3E${encodeURIComponent(label)}%3C/text%3E%3Ctext x='200' y='168' text-anchor='middle' fill='%237a6a55' font-size='11'%3ERattan Furniture%3C/text%3E%3C/svg%3E`;
}

// ── Gallery Data ──
const galleryItems = [
  { cat:'lounge', h:'tall', label:'Monaco Sofa Set', img:'images/img3.jpeg' },
  { cat:'lounge', h:'std', label:'Versailles Corner Sofa', img:'images/img4.jpeg' },
  { cat:'lounge', h:'std', label:'Grand Circular Sofa', img:'images/img5.jpeg' },
  { cat:'lounge', h:'std', label:'Palm Beach Set', img:'images/img6.jpeg' },
  { cat:'dining', h:'std', label:'Riviera Dining Set', img:'images/img7.jpeg' },
  { cat:'dining', h:'std', label:'Santorini Round Table', img:'images/img8.jpeg' },
  { cat:'dining', h:'std', label:'Bali Balcony Set', img:'images/img9.jpeg' },
  { cat:'dining', h:'tall', label:'Havana Round Set', img:'images/img10.jpeg' },
  { cat:'swing', h:'std', label:'Empress Egg Chair', img:'images/img11.jpeg' },
  { cat:'swing', h:'std', label:'Luna Swing Chair', img:'images/img12.jpeg' },
  { cat:'swing', h:'std', label:'Orbit Ball Chair', img:'images/img13.jpeg' },
  { cat:'swing', h:'std', label:'Egg Nest Chair', img:'images/img18.jpeg' },
  { cat:'lounger', h:'std', label:'Wave Lounger', img:'images/img14.jpeg' },
  { cat:'lounger', h:'std', label:'Resort Sun Lounger', img:'images/img15.jpeg' },
  { cat:'bistro', h:'std', label:'Café Bistro Set', img:'images/img16.jpeg' },
  { cat:'bistro', h:'std', label:'Garden Chair', img:'images/img17.jpeg' },
];
