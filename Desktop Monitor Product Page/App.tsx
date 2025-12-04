import { ShoppingCart } from 'lucide-react';
import { ProductCard } from './components/ProductCard';
import { HandIcon } from './components/HandIcon';

const products = [
  {
    id: 1,
    name: "Round Clicker",
    shape: "Round",
    image: "https://images.unsplash.com/photo-1554284191-096482f50049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGZpZGdldCUyMHRveXxlbnwxfHx8fDE3NjQ4MDMxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    originalPrice: "20D",
    discountedPrice: "15D"
  },
  {
    id: 2,
    name: "Rectangle Clicker",
    shape: "Rectangle",
    image: "https://images.unsplash.com/photo-1667868118768-289fe78bb84b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3AlMjBpdCUyMGZpZGdldHxlbnwxfHx8fDE3NjQ4MDMxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    originalPrice: "20D",
    discountedPrice: "15D"
  },
  {
    id: 3,
    name: "Triangle Clicker",
    shape: "Triangular",
    image: "https://images.unsplash.com/photo-1593501590743-ac451d2f6d35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlc3MlMjB0b3klMjBibGFja3xlbnwxfHx8fDE3NjQ4MDMxMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    originalPrice: "20D",
    discountedPrice: "15D"
  },
  {
    id: 4,
    name: "Keychain Clicker",
    shape: "Double-Bubble Keychain",
    image: "https://images.unsplash.com/photo-1733119454399-bfb2155de998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWRnZXQlMjBjbGlja2VyfGVufDF8fHx8MTc2NDgwMzExMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    originalPrice: "20D",
    discountedPrice: "15D"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black flex items-center justify-center p-8">
      {/* Desktop Monitor Frame */}
      <div className="relative">
        {/* Monitor Screen */}
        <div className="monitor-frame">
          <div className="monitor-screen">
            {/* Website Content */}
            <div className="w-full h-full bg-black overflow-y-auto scrollbar-toxic">
              
              {/* Header */}
              <header className="relative z-10 px-8 py-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                  <HandIcon />
                  <span className="text-2xl tracking-wider text-white">
                    StressLess
                  </span>
                </div>
                
                {/* Navigation */}
                <nav className="flex items-center gap-8">
                  <a href="#" className="text-gray-300 hover:text-[#39FF14] transition-colors">
                    Home
                  </a>
                  <a href="#" className="text-gray-300 hover:text-[#39FF14] transition-colors">
                    Shop
                  </a>
                  <a href="#" className="text-gray-300 hover:text-[#39FF14] transition-colors">
                    Contact
                  </a>
                  <button className="text-[#39FF14] hover:text-[#2ecc11] transition-colors">
                    <ShoppingCart size={20} />
                  </button>
                </nav>
              </header>
              
              {/* Main Content */}
              <main className="px-8 py-12">
                {/* Products Heading */}
                <h1 className="neon-text text-center mb-16">
                  PRODUCTS
                </h1>
                
                {/* Product Grid */}
                <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </main>
            </div>
          </div>
        </div>
        
        {/* Monitor Stand */}
        <div className="monitor-stand">
          <div className="monitor-stand-neck"></div>
          <div className="monitor-stand-base"></div>
        </div>
      </div>
    </div>
  );
}