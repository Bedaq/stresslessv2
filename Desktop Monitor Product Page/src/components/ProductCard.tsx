import { ImageWithFallback } from './figma/ImageWithFallback';

interface Product {
  id: number;
  name: string;
  shape: string;
  image: string;
  originalPrice: string;
  discountedPrice: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card group">
      {/* Product Image Container */}
      <div className="relative aspect-square mb-4 rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-br from-[#39FF14]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {/* Green glow effect */}
        <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(57,255,20,0.15)] pointer-events-none"></div>
      </div>
      
      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="text-white tracking-wide">{product.name}</h3>
        <p className="text-gray-400 text-sm">{product.shape}</p>
        
        {/* Pricing */}
        <div className="flex items-center gap-3 pt-2">
          <span className="text-[#39FF14] neon-price">
            {product.discountedPrice}
          </span>
          <span className="text-gray-500 line-through text-sm">
            {product.originalPrice}
          </span>
        </div>
      </div>
    </div>
  );
}
