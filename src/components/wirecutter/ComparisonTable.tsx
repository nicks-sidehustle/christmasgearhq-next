import Link from "next/link";

interface Product {
  name: string;
  image: string;
  price: string;
  specs: Record<string, string>;
  amazonLink: string;
  badge?: string;
}

interface ComparisonTableProps {
  title: string;
  products: Product[];
  features: string[];
}

export function ComparisonTable({ title, products, features }: ComparisonTableProps) {
  return (
    <div className="comparison-table bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left p-4 font-semibold text-gray-900 w-48">Feature</th>
              {products.map((product, index) => (
                <th key={index} className="p-4 text-center min-w-[200px]">
                  {product.badge && (
                    <span className="inline-block bg-red-600 text-white text-xs font-bold px-2 py-1 rounded mb-2">
                      {product.badge}
                    </span>
                  )}
                  <div className="font-bold text-gray-900 mb-1">{product.name}</div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{product.price}</div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-32 h-32 object-contain mx-auto mb-3"
                  />
                  <a
                    href={product.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded text-sm transition-colors"
                  >
                    Buy on Amazon
                  </a>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="p-4 font-medium text-gray-900">{feature}</td>
                {products.map((product, pIndex) => (
                  <td key={pIndex} className="p-4 text-center text-gray-700">
                    {product.specs[feature] || '—'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}