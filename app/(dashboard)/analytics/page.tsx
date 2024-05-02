// utils
import { cn } from '@/lib/utils';

// Custom Components
import Activity from '@/components/analytics/activity';
import AnalyticsUpgradeCta from '@/components/analytics/analytics-upgrade-cta';
import { DatePickerWithRange } from '@/components/common/date-range-picker';

// icons
import { CircleHelp } from 'lucide-react';

// shadcn
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

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
      <DatePickerWithRange className='max-w-[40rem] w-11/12 md:w-[40rem] ' />

      {/* Upgrade CTA */}
      <div className='my-6'>
        <AnalyticsUpgradeCta />
      </div>

      <div className='space-y-4 mx-2'>
        <div className='flex space-x-2 justify-start items-center'>
          <h3 className='text-xl font-bold'>Activity</h3>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <CircleHelp
                  size={18}
                  strokeWidth={1.5}
                  className='cursor-pointer'
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Link Activity</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* link activity - chart */}
        <div>
          <div className='flex flex-wrap space-x-16 items-center justify-evenly bg-white rounded-lg p-4'>
            {stats_chart.map((props) => (
              <Stat key={props.name} {...props} />
            ))}
          </div>
        </div>
        <Activity />

        {/* World Map view */}
        <div className='space-y-4 mx-2 my-6'>
          <div className='flex space-x-2 justify-start items-center'>
            <h3 className='text-xl font-bold'>Top Locations</h3>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <CircleHelp
                    size={18}
                    strokeWidth={1.5}
                    className='cursor-pointer'
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Link Activity By Region</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
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

const stats_chart = [
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
];
