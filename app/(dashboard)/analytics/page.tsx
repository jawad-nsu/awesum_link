import AnalyticsUpgradeCta from '@/components/analytics/analytics-upgrade-cta';
import { DatePickerWithRange } from '@/components/common/date-range-picker';
import { cn } from '@/lib/utils';

const Analytics = () => {
  return (
    <div className='p-2 grid place-items-center gap-6'>
      {/* Lifetime Analytics */}
      <div className='w-11/12 mx-auto p-6 flex flex-col items-center bg-white rounded-xl space-y-8'>
        <h3 className='text-center font-bold text-xl'>Lifetime Analytics</h3>

        {/* stats */}
        <div className='flex flex-wrap space-x-16 items-center'>
          {stats.map((props) => (
            <Stat key={props.name} {...props} />
          ))}
        </div>
      </div>

      {/* Date Range Picker */}
      <DatePickerWithRange />

      {/* Upgrade CTA */}
      <AnalyticsUpgradeCta />
    </div>
  );
};

export default Analytics;

const Stat = ({
  name,
  color,
  value,
}: {
  name: string;
  color: string;
  value: number;
}) => {
  return (
    <div className='flex flex-col items-center '>
      <div className='flex items-center space-x-2'>
        <div className={cn('rounded-[50%] w-2 h-2', color)} />
        <p>{name}:</p>
      </div>
      <h6 className='font-semibold text-lg'>{value}</h6>
    </div>
  );
};

const stats = [
  {
    name: 'Views',
    color: 'bg-green-500',
    value: 2,
  },
  {
    name: 'Clicks',
    color: 'bg-purple-500',
    value: 0,
  },
  {
    name: 'Subscribers',
    color: 'bg-yellow-500',
    value: 0,
  },
];
