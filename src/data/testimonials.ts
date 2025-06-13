export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Johnson",
    role: "Full-time Trader",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "After struggling for years, the strategies I learned helped me quit my 9-5 job and become a full-time trader. I'm now consistently profitable and have the freedom I always wanted.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Part-time Trader",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "As a busy professional, I needed a trading approach that didn't require hours of screen time. This course taught me how to trade effectively in just 1-2 hours per day. I'm now making more from trading part-time than from my main job!",
    rating: 5,
  },
  {
    id: 3,
    name: "David Chen",
    role: "Former Stock Trader",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "Coming from stock trading, I found forex intimidating. This mentorship program broke everything down and gave me a clear path to follow. The 1-on-1 guidance was invaluable in helping me adapt my skills to the forex market.",
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Beginner Trader",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "I started with zero trading experience, and was honestly skeptical of online trading courses. But the step-by-step approach and supportive community helped me go from complete novice to consistently profitable in just 6 months.",
    rating: 5,
  },
  {
    id: 5,
    name: "James Wilson",
    role: "Institutional Trader",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "Even with my background in institutional trading, I picked up several new techniques that significantly improved my performance. The advanced order flow concepts and risk management strategies are top-notch.",
    rating: 5,
  },
];