import React, { useState } from 'react';
import { X, Check, ArrowRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  image: string;
  specs: {
    length: string;
    width: string;
    height: string;
    weight: string;
    capacity: string;
    price: string;
  };
  features: string[];
}

const products: Product[] = [
  {
    id: '10ft',
    name: '10 Feet Container',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=400',
    specs: {
      length: '3,048 mm',
      width: '1,798 mm',
      height: '2,591 mm',
      weight: '850 kg',
      capacity: '15 CBM',
      price: 'Contact for quote'
    },
    features: ['Compact design', 'Easy transport', 'Weather resistant', 'Stackable']
  },
  {
    id: '20ft',
    name: '20 Feet Container',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400',
    specs: {
      length: '6,058 mm',
      width: '2,438 mm',
      height: '2,591 mm',
      weight: '1,800 kg',
      capacity: '33 CBM',
      price: 'Contact for quote'
    },
    features: ['ISO certified', 'Multi-modal transport', 'Reinforced corners', 'Standard size']
  },
  {
    id: '32ft',
    name: '32 Feet Container',
    image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400',
    specs: {
      length: '9,754 mm',
      width: '2,438 mm',
      height: '2,591 mm',
      weight: '3,500 kg',
      capacity: '60 CBM',
      price: 'Contact for quote'
    },
    features: ['Heavy-duty', 'Large capacity', 'Industrial grade', 'Extended length']
  }
];

interface ComparisonToolProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComparisonTool: React.FC<ComparisonToolProps> = ({ isOpen, onClose }) => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const toggleProduct = (id: string) => {
    if (selectedProducts.includes(id)) {
      setSelectedProducts(selectedProducts.filter(p => p !== id));
    } else if (selectedProducts.length < 3) {
      setSelectedProducts([...selectedProducts, id]);
    }
  };

  const selectedProductsData = products.filter(p => selectedProducts.includes(p.id));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Compare Containers</h2>
              <p className="text-sm text-slate-600 mt-1">Select up to 3 containers to compare</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Product Selection */}
          <div className="p-6 border-b border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Select Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {products.map((product) => (
                <button
                  key={product.id}
                  onClick={() => toggleProduct(product.id)}
                  disabled={!selectedProducts.includes(product.id) && selectedProducts.length >= 3}
                  className={`relative p-4 rounded-xl border-2 transition-all ${
                    selectedProducts.includes(product.id)
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-slate-200 hover:border-blue-300 bg-white'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h4 className="font-semibold text-slate-900">{product.name}</h4>
                  {selectedProducts.includes(product.id) && (
                    <div className="absolute top-2 right-2 bg-blue-600 text-white p-1 rounded-full">
                      <Check size={16} />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          {selectedProductsData.length > 0 && (
            <div className="p-6 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-4 px-4 font-semibold text-slate-900">Specification</th>
                    {selectedProductsData.map((product) => (
                      <th key={product.id} className="text-center py-4 px-4">
                        <div className="font-semibold text-slate-900">{product.name}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium text-slate-700">Length</td>
                    {selectedProductsData.map((product) => (
                      <td key={product.id} className="py-3 px-4 text-center text-slate-600">
                        {product.specs.length}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <td className="py-3 px-4 font-medium text-slate-700">Width</td>
                    {selectedProductsData.map((product) => (
                      <td key={product.id} className="py-3 px-4 text-center text-slate-600">
                        {product.specs.width}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium text-slate-700">Height</td>
                    {selectedProductsData.map((product) => (
                      <td key={product.id} className="py-3 px-4 text-center text-slate-600">
                        {product.specs.height}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <td className="py-3 px-4 font-medium text-slate-700">Weight</td>
                    {selectedProductsData.map((product) => (
                      <td key={product.id} className="py-3 px-4 text-center text-slate-600">
                        {product.specs.weight}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium text-slate-700">Capacity</td>
                    {selectedProductsData.map((product) => (
                      <td key={product.id} className="py-3 px-4 text-center text-slate-600">
                        {product.specs.capacity}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <td className="py-3 px-4 font-medium text-slate-700">Features</td>
                    {selectedProductsData.map((product) => (
                      <td key={product.id} className="py-3 px-4">
                        <ul className="space-y-1">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-slate-600 flex items-center justify-center">
                              <Check size={14} className="text-green-600 mr-1" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* Action Buttons */}
          <div className="p-6 border-t border-slate-200 flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }));
              }}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all flex items-center space-x-2"
            >
              <span>Get Quote</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTool;
