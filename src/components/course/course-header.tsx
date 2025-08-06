import { FaUserGraduate, FaCalendarAlt } from 'react-icons/fa';
import { Course } from '@/types/course';

interface CourseHeaderProps {
  course: Course;
}

export function CourseHeader({ course }: CourseHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{course.title}</h1>
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-gray-600">
        <div className="flex items-center space-x-2">
          <FaUserGraduate className="h-5 w-5 text-indigo-600" />
          <span>{course.description}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <FaCalendarAlt className="h-5 w-5 text-indigo-600" />
          <span>Starts on {course.startDate} | Ends on {course.endDate}</span>
        </div>
      </div>
    </div>
  );
}
