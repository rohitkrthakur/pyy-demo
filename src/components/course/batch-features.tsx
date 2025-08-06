import { FaCheck } from 'react-icons/fa';
import { BatchPlan } from '@/types/course';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface BatchFeaturesProps {
  plans: BatchPlan[];
}

export function BatchFeatures({ plans }: BatchFeaturesProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-6 md:p-8">
      <h2 className="text-3xl font-bold text-white mb-8">Batch Features</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={cn(
              "relative rounded-lg p-6 transition-transform hover:scale-105",
              plan.bgColor
            )}
          >
            {plan.isRecommended && (
              <div className="absolute -top-3 left-6">
                <Badge variant="warning" className="bg-orange-500 text-black font-semibold">
                  Recommended
                </Badge>
              </div>
            )}
            
            <div className="text-center mb-6">
              <h3 className={cn("text-xl font-semibold mb-2", plan.textColor)}>
                {plan.name}
              </h3>
              <div className={cn("text-3xl font-bold", plan.textColor)}>
                ₹{plan.price.toLocaleString()}
              </div>
            </div>
            
            <ul className="space-y-3">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <FaCheck className={cn("h-4 w-4 mt-1 flex-shrink-0", plan.textColor)} />
                  <span className={cn("text-sm", plan.textColor)}>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
