import React, { useState } from 'react';

export default function App() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] text-[#1b1b18] lg:justify-center dark:bg-[#0a0a0a] dark:text-[#EDEDEC]">
            <header className="w-full bg-[#FDFDFC] dark:bg-[#0a0a0a] py-4">
                <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <img 
                            src="/images/somtam-logo.png" 
                            alt="SomtamCoin Logo" 
                            className="h-8 w-8"
                        />
                        <span className="text-3xl font-semibold">SomtamCoin</span>
                    </div>
                    <a 
                        href="https://app.somtam.xyz" 
                        className="bg-[#1b1b18] text-white dark:bg-[#EDEDEC] dark:text-[#0a0a0a] px-4 py-2 rounded-lg font-medium text-base hover:bg-opacity-90 transition duration-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)]"
                    >
                        Visit dApp
                    </a>
                </div>
            </header>
            <div className="flex w-full flex-col items-center justify-center opacity-100 transition-opacity duration-750">
                <main className="flex w-full max-w-[335px] flex-col items-center lg:max-w-4xl px-6 lg:px-8">
                    <img 
                        src="/images/somtam.jpg" 
                        alt="Somtam Dish" 
                        className="w-full max-w-[600px] rounded-lg shadow-[0px_0px_1px_0px_rgba(0,0,0,0.03),0px_1px_2px_0px_rgba(0,0,0,0.06)] mb-6 mx-auto"
                    />
                    <section className="w-full mb-12">
                        <h2 className="text-3xl font-semibold mb-6 text-center">Core Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <h3 className="text-2xl font-semibold mb-4">Crypto Reserves</h3>
                                <p className="text-lg text-[#706f6c] dark:text-[#A1A09A]">
                                    Backed by a diversified basket of crypto assets for decentralized stability.
                                </p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-semibold mb-4">Algorithmic Hedging</h3>
                                <p className="text-lg text-[#706f6c] dark:text-[#A1A09A]">
                                    Dynamically adjusts to market conditions, ensuring a stable 1:1 USD peg.
                                </p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-semibold mb-4">DeFi Integration</h3>
                                <p className="text-lg text-[#706f6c] dark:text-[#A1A09A]">
                                    Optimized for seamless DeFi transactions with low fees and fast settlements.
                                </p>
                            </div>
                        </div>
                    </section>
                    <div className="flex-1 w-full rounded-lg bg-white p-6 text-lg leading-[24px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:p-20 dark:bg-[#161615] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                        <section className="mb-6">
                            <h2 className="text-3xl font-semibold mb-2">Introduction</h2>
                            <p className="text-xl text-[#706f6c] dark:text-[#A1A09A]">
                                SomtamCoin is a revolutionary USD-pegged stablecoin designed to bring stability to the crypto market through a unique reserve system. Unlike traditional stablecoins like USDT and USDC, which rely on fiat currency reserves, SomtamCoin is backed by a diverse basket of crypto assets. This innovative approach, combined with advanced algorithmic hedging—similar to USDe but tailored for crypto reserves—ensures a stable 1:1 peg to the US dollar, offering a fresh alternative in the decentralized finance ecosystem.
                            </p>
                        </section>
                        <section className="mb-6">
                            <h2 className="text-3xl font-semibold mb-2">Benefits of SomtamCoin</h2>
                            <p className="text-xl text-[#706f6c] dark:text-[#A1A09A]">
                                SomtamCoin offers several advantages over fiat-backed stablecoins. Its crypto asset reserves provide greater transparency and decentralization, reducing reliance on traditional banking systems. The algorithmic hedging mechanism dynamically adjusts to market conditions, enhancing stability without the need for fiat collateral. Additionally, SomtamCoin supports faster transactions and lower fees within the blockchain ecosystem, making it an ideal choice for traders, investors, and DeFi enthusiasts seeking a secure and efficient stablecoin.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-3xl font-semibold mb-2">FAQs</h2>
                            <div className="space-y-4">
                                {[1, 2, 3].map((index: number) => (
                                    <div key={index} className="border border-[#e3e3e0] dark:border-[#3E3E3A] rounded-lg">
                                        <button
                                            onClick={() => toggleFAQ(index)}
                                            className="w-full text-left p-4 font-medium text-[#1b1b18] text-xl dark:text-[#EDEDEC] focus:outline-none"
                                        >
                                            {index === 1 ? "How does SomtamCoin maintain its 1:1 USD peg?" : 
                                             index === 2 ? "What crypto assets back SomtamCoin?" : 
                                             "Can SomtamCoin be used for DeFi transactions?"}
                                            <span className="float-right text-3xl">
                                                {openIndex === index ? '−' : '+'}
                                            </span>
                                        </button>
                                        {openIndex === index && (
                                            <div className="p-4 text-[#706f6c] text-base dark:text-[#A1A09A]">
                                                {index === 1 ? "SomtamCoin maintains its 1:1 USD peg through a combination of crypto asset reserves and algorithmic hedging, which adjusts supply and demand dynamically to stabilize its value against market fluctuations." : 
                                                 index === 2 ? "SomtamCoin is backed by a diversified portfolio of major cryptocurrencies, including Bitcoin, Ethereum, and other stable assets, ensuring robust and decentralized support." : 
                                                 "Yes, SomtamCoin is optimized for DeFi transactions, offering low fees and fast settlement, making it a preferred choice for decentralized finance applications."}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
}