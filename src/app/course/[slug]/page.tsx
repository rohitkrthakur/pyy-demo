import { Header } from '@/components/layout/header';
import { Breadcrumb } from '@/components/layout/breadcrumb';
import { CourseHeader } from '@/components/course/course-header';
import { CourseTabs } from '@/components/course/course-tabs';
import { BatchFeatures } from '@/components/course/batch-features';
import { CourseSidebar } from '@/components/course/course-sidebar';
import { courseData, batchPlans } from '@/data/course';

const breadcrumbItems = [
  { label: 'NEET', href: '/neet' },
  { label: 'CLASS 11', href: '/neet/class-11' },
  { label: 'BATCHES', href: '/neet/class-11/batches' },
  { label: 'Arjuna NEET 3.0 2026' }
];

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <CourseHeader course={courseData} />
            <CourseTabs />
            <BatchFeatures plans={batchPlans} />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <CourseSidebar course={courseData} />
          </div>
        </div>
      </main>
    </div>
  );
}
