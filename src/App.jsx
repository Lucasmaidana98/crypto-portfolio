import { useState } from 'react'

const cryptoData = [
  {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 43250.67,
    change: 2.34,
    volume: '28.5B',
    marketCap: '847.2B',
    holdings: 0.245,
    value: 10598.91
  },
  {
    id: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    price: 2678.45,
    change: -1.89,
    volume: '15.2B',
    marketCap: '322.1B',
    holdings: 5.67,
    value: 15186.82
  },
  {
    id: 3,
    name: 'Cardano',
    symbol: 'ADA',
    price: 0.487,
    change: 4.12,
    volume: '892M',
    marketCap: '17.3B',
    holdings: 12450,
    value: 6063.15
  },
  {
    id: 4,
    name: 'Solana',
    symbol: 'SOL',
    price: 98.73,
    change: 6.78,
    volume: '2.1B',
    marketCap: '43.8B',
    holdings: 45.2,
    value: 4462.60
  },
  {
    id: 5,
    name: 'Polygon',
    symbol: 'MATIC',
    price: 0.89,
    change: -3.45,
    volume: '456M',
    marketCap: '8.2B',
    holdings: 2890,
    value: 2572.10
  }
]

function App() {
  const [selectedCrypto, setSelectedCrypto] = useState(cryptoData[0])
  
  const totalPortfolioValue = cryptoData.reduce((sum, crypto) => sum + crypto.value, 0)
  const totalChange = cryptoData.reduce((sum, crypto) => sum + (crypto.value * crypto.change / 100), 0)
  const totalChangePercent = (totalChange / totalPortfolioValue) * 100

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-white">₿</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                CryptoPortfolio
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-400">Total Portfolio Value</p>
                <p className="text-2xl font-bold text-white">${totalPortfolioValue.toLocaleString()}</p>
                <p className={`text-sm ${totalChangePercent >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {totalChangePercent >= 0 ? '+' : ''}{totalChangePercent.toFixed(2)}% 
                  <span className="ml-1">(${totalChange.toLocaleString()})</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Portfolio Overview */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
              <h2 className="text-xl font-semibold mb-6 text-white">Your Holdings</h2>
              <div className="space-y-4">
                {cryptoData.map((crypto) => (
                  <div 
                    key={crypto.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 hover:bg-gray-700/50 ${
                      selectedCrypto.id === crypto.id 
                        ? 'border-blue-500 bg-blue-500/10' 
                        : 'border-gray-600 bg-gray-800/30'
                    }`}
                    onClick={() => setSelectedCrypto(crypto)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-white">{crypto.symbol[0]}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{crypto.name}</h3>
                          <p className="text-sm text-gray-400">{crypto.symbol}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-white">${crypto.price.toLocaleString()}</p>
                        <p className={`text-sm ${crypto.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {crypto.change >= 0 ? '+' : ''}{crypto.change}%
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-white">${crypto.value.toLocaleString()}</p>
                        <p className="text-sm text-gray-400">{crypto.holdings} {crypto.symbol}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Crypto Details */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="font-bold text-white">{selectedCrypto.symbol[0]}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{selectedCrypto.name}</h3>
                  <p className="text-gray-400">{selectedCrypto.symbol}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Price</span>
                  <span className="font-semibold text-white">${selectedCrypto.price.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">24h Change</span>
                  <span className={`font-semibold ${selectedCrypto.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {selectedCrypto.change >= 0 ? '+' : ''}{selectedCrypto.change}%
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Market Cap</span>
                  <span className="font-semibold text-white">${selectedCrypto.marketCap}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Volume</span>
                  <span className="font-semibold text-white">${selectedCrypto.volume}</span>
                </div>
                
                <div className="border-t border-gray-600 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Holdings</span>
                    <span className="font-semibold text-white">{selectedCrypto.holdings} {selectedCrypto.symbol}</span>
                  </div>
                  
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-400">Value</span>
                    <span className="font-semibold text-white">${selectedCrypto.value.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Assets</span>
                  <span className="font-semibold text-white">{cryptoData.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Best Performer</span>
                  <span className="font-semibold text-green-400">
                    {cryptoData.reduce((max, crypto) => crypto.change > max.change ? crypto : max).symbol}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Worst Performer</span>
                  <span className="font-semibold text-red-400">
                    {cryptoData.reduce((min, crypto) => crypto.change < min.change ? crypto : min).symbol}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
