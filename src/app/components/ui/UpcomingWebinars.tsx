'use client'
import Link from "next/link"
import { HoverEffect } from "@/app/components/ui/card-hover-effect";

function UpcomingWebinars() {

  const featuredWebinars = [
    {
      title: 'Understanding Stock Market Analysis',
      description:
        'Dive deep into the fundamentals of stock market analysis and enhance your investment skills.',
      slug: 'understanding-stock-market-analysis',
      isFeatured: true,
    },
    {
      title: 'The Art of Investment Strategies',
      description:
        'Learn the craft of investment strategies from experienced investors and financial analysts.',
      slug: 'the-art-of-investment-strategies',
      isFeatured: true,
    },
    {
      title: 'Mastering Trading Techniques',
      description:
        'Advanced techniques to master your trading skills in the stock market.',
      slug: 'mastering-trading-techniques',
      isFeatured: true,
    },
    {
      title: 'Financial Market Essentials',
      description:
        'Get started with understanding financial markets with this comprehensive overview.',
      slug: 'financial-market-essentials',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Risk Management Strategies',
      description:
        'Learn effective risk management strategies to protect your investments.',
      slug: 'risk-management-strategies',
      isFeatured: true,
    },
    {
      title: 'Introduction to Cryptocurrency',
      description:
        'Discover the world of cryptocurrency and its implications for investors.',
      slug: 'introduction-to-cryptocurrency',
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-black-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Investment Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars;
