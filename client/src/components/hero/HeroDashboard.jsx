import { useRef, useEffect, useState } from 'react';
import StatsCard from './StatsCard';
import LeadCard from './LeadCard';
import PipelineCard from './PipelineCard';
import AnalyticsCard from './AnalyticsCard';
import NotificationCard from './NotificationCard';

export default function HeroDashboard() {
  const ref = useRef(null);
  const [parallax, setParallax] = useState({ top: 0, left: 0, right: 0, bottom: 0, center: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = (rect.top + rect.height / 2) / viewH;
      const offset = (progress - 0.5) * 120;
      setParallax({
        top: offset * 1,
        left: offset * 0.7,
        right: offset * 1.4,
        bottom: offset * 1.8,
        center: offset * 0.4,
      });
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div ref={ref} className="relative w-full h-full min-h-[520px] md:min-h-[580px]">
      <div
        className="absolute top-0 left-0 w-[75%] z-20 animate-[float_6s_ease-in-out_infinite]"
        style={{ marginTop: parallax.top }}
      >
        <div className="shadow-2xl rounded-2xl hover:-translate-y-1 transition-transform duration-300">
          <StatsCard />
        </div>
      </div>

      <div
        className="absolute top-2 right-0 w-[58%] z-30 animate-[float_8s_ease-in-out_infinite_0.5s]"
        style={{ marginTop: parallax.right }}
      >
        <div className="shadow-xl rounded-2xl hover:-translate-y-1 transition-transform duration-300">
          <LeadCard />
        </div>
      </div>

      <div
        className="absolute top-[46%] left-[8%] w-[55%] z-10 animate-[float_7s_ease-in-out_infinite_1s]"
        style={{ marginTop: parallax.left }}
      >
        <div className="shadow-lg rounded-2xl hover:-translate-y-1 transition-transform duration-300">
          <AnalyticsCard />
        </div>
      </div>

      <div
        className="absolute top-[38%] right-[4%] w-[52%] z-10 animate-[float_9s_ease-in-out_infinite_1.5s]"
        style={{ marginTop: parallax.center }}
      >
        <div className="shadow-lg rounded-2xl hover:-translate-y-1 transition-transform duration-300">
          <PipelineCard />
        </div>
      </div>

      <div
        className="absolute top-[65%] right-[12%] w-[60%] z-30 animate-[float_6s_ease-in-out_infinite_2s]"
        style={{ marginTop: parallax.bottom }}
      >
        <div className="shadow-xl rounded-2xl hover:-translate-y-1 transition-transform duration-300">
          <NotificationCard />
        </div>
      </div>
    </div>
  );
}
