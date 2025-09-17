import React from 'react';
import { Link } from 'react-router-dom';

export default function StickyCTA() {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!visible) return null;
  return (
    <div className="fixed bottom-4 right-4 z-[60]">
      <Link to="/order" className="px-5 py-3 rounded-full bg-brand-red text-white font-semibold shadow-lg">Оставить заявку</Link>
    </div>
  );
}


