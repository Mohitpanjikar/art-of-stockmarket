"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const stockMarketContent = [
    {
      title: 'Unlocking Investment Opportunities',
      description:
        'Explore a vast array of investment opportunities tailored to your financial goals and risk tolerance. From stocks and bonds to ETFs and mutual funds, discover the possibilities of building wealth through strategic investments.',
    },
    {
      title: 'Market Analysis & Insights',
      description:
        'Gain access to expert market analysis and insights to make informed investment decisions. Stay ahead of market trends and developments with comprehensive research and commentary from seasoned financial analysts.',
    },
    {
      title: 'Portfolio Diversification Strategies',
      description:
        'Diversify your investment portfolio with proven strategies designed to minimize risk and maximize returns. Learn how to spread your investments across different asset classes and sectors to achieve a well-balanced and resilient portfolio.',
    },
    {
      title: 'Real-Time Market Data',
      description:
        'Stay updated with real-time market data, including stock prices, indices, and economic indicators. Make timely decisions based on the latest information and capitalize on market opportunities as they arise.',
    },
    {
      title: 'Risk Management Techniques',
      description:
        'Learn effective risk management techniques to protect your investments from market volatility and unexpected events. Implement strategies such as stop-loss orders and hedging to mitigate downside risks and preserve capital.',
    },
    {
      title: 'Continuous Learning & Education',
      description:
        'Invest in your financial education with a wealth of resources and educational materials. Whether you’re a novice investor or seasoned trader, there’s always something new to learn to enhance your investment knowledge and skills.',
    },
  ];
  

  function WhyChooseUs() {
    return (
      <div>
          <StickyScroll content={stockMarketContent} />
      </div>
    )
  }
  
  export default WhyChooseUs