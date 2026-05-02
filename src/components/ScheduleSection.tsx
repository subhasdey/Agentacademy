const cohorts = [
  { month:'MAY', day:'5', title:'Spring Weekend Cohort', meta:'Saturdays & Sundays · 10:00 AM – 1:00 PM IST · 12 weeks', tags:['Weekend','IST / EST','Live'], seats:'8 seats remaining', urgent:true },
  { month:'MAY', day:'12', title:'Weekday Evening Cohort', meta:'Mon / Wed / Fri · 7:00 PM – 9:00 PM IST · 12 weeks', tags:['Weekday','IST','Live'], seats:'15 seats remaining', urgent:true },
  { month:'JUN', day:'2', title:'Summer Intensive', meta:'Daily · 9:00 AM – 12:00 PM IST · 4 weeks accelerated', tags:['Intensive','4 Weeks','Live'], seats:'24 seats available', urgent:false },
  { month:'ANY', day:'—', title:'Self-Paced Access', meta:'Start anytime · Work at your own pace · No live sessions', tags:['Self-Paced','Any Timezone','Async'], seats:'Always available', urgent:false },
];

const ScheduleSection = () => (
  <section id="schedule" className="py-28 bg-white">
    <div className="max-w-[1240px] mx-auto px-6 md:px-12">
      <div className="mb-16">
        <span className="section-label mb-3">10 — Schedule</span>
        <h2 className="font-display font-bold text-black leading-[1.15]" style={{ fontSize: 'clamp(32px,4vw,48px)' }}>Upcoming Cohorts & Dates</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-0.5 bg-gray-200">
        {cohorts.map(c => (
          <div key={c.title} className="bg-white p-10 hover:bg-gray-50 transition-colors cursor-pointer"
            style={{ borderLeft: c.urgent ? '3px solid #0a0a0a' : '3px solid transparent' }}>
            <div className="bg-black text-white inline-block px-5 py-3 mb-7 text-center">
              <div className="text-[10px] font-bold tracking-[0.16em] uppercase text-white/50 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>{c.month}</div>
              <div className="font-display font-black text-white leading-none" style={{ fontSize: '36px' }}>{c.day}</div>
            </div>
            <h3 className="font-display font-bold text-[22px] text-black mb-2.5">{c.title}</h3>
            <p className="text-gray-500 text-[13px] leading-[1.6] mb-5" style={{ fontFamily: 'Inter, sans-serif' }}>{c.meta}</p>
            <div className="flex gap-2 flex-wrap mb-5">
              {c.tags.map(t=>(
                <span key={t} className="border border-gray-200 text-[10px] font-bold uppercase tracking-widest text-gray-500 px-3 py-1.5" style={{ fontFamily: 'Inter, sans-serif' }}>{t}</span>
              ))}
            </div>
            <div className="text-[12px] font-bold uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif', color: c.urgent ? '#c0392b' : '#9ca3af' }}>
              {c.seats}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default ScheduleSection;
