'use client'
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const stockMarketTestimonials = [
    {
      quote:
        'Joining the stock market transformed my understanding of investing and helped me to truly discover my own investment strategy. The mentors are world-class!',
      name: 'John Smith',
      title: 'Stock Market Investor',
    },
    {
      quote:
        "The community and support in this market are unmatched. I've grown not just as an investor, but also as a strategist, thanks to their comprehensive approach.",
      name: 'Emma Davis',
      title: 'Stock Market Enthusiast',
    },
    {
      quote:
        "This market offered me the tools and confidence to take my trading to the next level. I'm endlessly grateful for the personalized coaching.",
      name: 'Michael Johnson',
      title: 'Stock Trader',
    },
    {
      quote:
        'As a newcomer, finding the right mentor can be challenging, but this market matched me with an advisor who truly understands my goals and challenges.',
      name: 'Emily Wilson',
      title: 'Novice Investor',
    },
    {
      quote:
        'The investment courses here opened my eyes to the intricacies of financial markets. Highly recommend for any aspiring investors!',
      name: 'Chris Roberts',
      title: 'Financial Market Student',
    },
  ];


  function StockTestimonialCards() {
    return (
      <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl">
            <InfiniteMovingCards
              items={stockMarketTestimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    );
  }


export default StockTestimonialCards