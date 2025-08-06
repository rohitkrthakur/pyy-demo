import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Course } from '@/types/course';

interface CourseSidebarProps {
  course: Course;
}

export function CourseSidebar({ course }: CourseSidebarProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-24">
      {/* Course Image */}
      <div className="relative">
<Image
  src="/images/banner.png"
  alt={course.title}
  width={400}
  height={250}
  className="w-full h-48 object-cover"
/>
        <div className="absolute top-4 left-4">
          <Badge variant="info" className="bg-indigo-600 text-white font-semibold">
            {course.isOnline ? 'ONLINE' : 'OFFLINE'}
          </Badge>
        </div>
      </div>

      {/* Course Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-semibold text-lg flex-1">{course.title}</h3>
          <div className="flex flex-col items-end space-y-1 ml-2">
            {course.isNew && (
              <Badge variant="warning" className="bg-yellow-500 text-black font-semibold">
                New
              </Badge>
            )}
            <span className="text-sm text-gray-600">{course.language}</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-2xl font-bold text-indigo-600">
              ₹{course.price.toLocaleString()}
            </span>
            {course.originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                ₹{course.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          {course.discount && (
            <div className="flex items-center space-x-2">
              <Badge variant="success" className="bg-green-500 text-white font-semibold">
                Discount of {course.discount}% applied
              </Badge>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 text-lg font-semibold transition-colors">
          Continue with Batch
        </Button>
      </div>
    </div>
  );
}
