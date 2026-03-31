import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';

const schedule = [
  { time: '06:00 AM', monday: 'CrossFit', tuesday: 'Boxing', wednesday: 'CrossFit', thursday: 'Yoga', friday: 'CrossFit', saturday: 'Rest', sunday: 'Rest' },
  { time: '08:00 AM', monday: 'Yoga', tuesday: 'Spin Class', wednesday: 'Yoga', thursday: 'Boxing', friday: 'Spin Class', saturday: 'CrossFit', sunday: 'Rest' },
  { time: '12:00 PM', monday: 'HIIT', tuesday: 'HIIT', wednesday: 'HIIT', thursday: 'HIIT', friday: 'HIIT', saturday: 'Yoga', sunday: 'Open Gym' },
  { time: '05:00 PM', monday: 'Powerlifting', tuesday: 'CrossFit', wednesday: 'Powerlifting', thursday: 'CrossFit', friday: 'Powerlifting', saturday: 'Rest', sunday: 'Open Gym' },
  { time: '07:00 PM', monday: 'Boxing', tuesday: 'Yoga', wednesday: 'Boxing', thursday: 'Yoga', friday: 'Boxing', saturday: 'Rest', sunday: 'Rest' },
];

export function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Class Schedule" 
          subtitle="Find the perfect time to sweat. Our comprehensive schedule is designed to fit your busy lifestyle."
        />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto mt-12 bg-gray-950 rounded-xl border border-gray-800 shadow-xl"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-900/50">
                <th className="py-6 px-4 font-heading font-semibold text-white uppercase tracking-wider text-sm border-b border-gray-800">Time</th>
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                  <th key={day} className="py-6 px-4 font-heading font-semibold text-white uppercase tracking-wider text-sm border-b border-gray-800">{day}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-sm">
              {schedule.map((slot, idx) => (
                <tr key={idx} className="hover:bg-gray-900/50 transition-colors">
                  <td className="py-6 px-4 font-medium text-primary whitespace-nowrap">{slot.time}</td>
                  {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(day => (
                    <td key={day} className="py-6 px-4 text-gray-300">
                      {slot[day] !== 'Rest' && slot[day] !== 'Open Gym' ? (
                        <div className="bg-gray-800/50 rounded px-3 py-1.5 inline-block font-medium border border-gray-700">
                          {slot[day]}
                        </div>
                      ) : (
                        <span className="text-gray-500 italic">{slot[day]}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
