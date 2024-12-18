/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Dashboards',
        // subtitle: 'Unique dashboard designs',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'dashboards.dashboard',
                title: 'Dashboard',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-check',
                link : '/dashboards/project'
            },

        ]
    },
    {
        id  : 'divider-1',
        type: 'divider'
    },
    {
        id      : 'apps',
        title   : 'Applications',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'apps.user',
                title: 'User',
                type : 'collapsable',
                icon : 'heroicons_outline:user-circle',
                children: [
                    {
                        id   : 'apps.user.alluser',
                        title: 'All Users',
                        type : 'basic',
                        link : '/apps/user/alluser'
                    },
                    {
                        id   : 'apps.user.usertype',
                        title: 'User Type',
                        type : 'basic',
                        link : '/apps/user/usertype'
                    },
                    {
                        id   : 'apps.user.userstatus',
                        title: 'User Status',
                        type : 'basic',
                        link : '/apps/user/userstatus'
                    },

                          ]
            },
            {
                id   : 'apps.course',
                title: 'All Courses',
                type : 'basic',
                icon : 'mat_outline:note',
                link : '/apps/course/viewcourse'
            },
            {
                id   : 'apps.location',
                title: 'Location',
                type : 'collapsable',
                icon : 'mat_outline:location_on',
                children: [
                    {
                        id   : 'apps.location.country',
                        title: 'Country',
                        type : 'basic',
                        link : '/apps/location/country'
                    },
                    {
                        id   : 'apps.location.state',
                        title: 'State',
                        type : 'basic',
                        link : '/apps/location/state'
                    },
                    {
                        id   : 'apps.location.city',
                        title: 'City',
                        type : 'basic',
                        link : '/apps/location/city'
                    },

                          ]
            },
            {
                id   : 'apps.college',
                title: 'College',
                type : 'collapsable',
                icon : 'mat_outline:maps_home_work',
                children: [
                    {
                        id   : 'apps.college.collegetype',
                        title: 'College Types',
                        type : 'basic',
                        link : '/apps/college/collegetype'
                    },
                    {
                        id   : 'apps.college.category',
                        title: 'Category',
                        type : 'basic',
                        link : '/apps/college/category'
                    },

                    {
                        id   : 'apps.college.subcategory',
                        title: 'Subcategory',
                        type : 'basic',
                        link : '/apps/college/subcategory'
                    },
                    {
                        id   : 'apps.college.facilities',
                        title: 'Facilities',
                        type : 'basic',
                        link : '/apps/college/facilities'
                    },
                    {
                        id   : 'apps.college.rankcategory',
                        title: 'Rank Category',
                        type : 'basic',
                        link : '/apps/college/rankcategory'
                    },
                    {
                        id   : 'apps.college.colleges',
                        title: 'Colleges',
                        type : 'basic',
                        link : '/apps/college/colleges'
                    },
                    {
                        id   : 'apps.college.reviewlist',
                        title: 'Reviews',
                        type : 'basic',
                        link : '/apps/college/reviewlist'
                     },
                    // {
                    //     id   : 'apps.college.courseoffered',
                    //     title: 'Courses Offered In Same Group',
                    //     type : 'basic',
                    //     link : '/apps/college/courseoffered'
                    // },

                    ]
            },

            {
                id   : 'apps.college',
                title: 'Cut-Off',
                type : 'collapsable',
                icon : 'mat_outline:cases',
                children: [
                    {
                        id   : 'apps.college.collegetype',
                        title: 'KCET',
                        type : 'basic',
                       link : '/apps/cutoffkcet/kcetcutofflist'
                    },
                    {
                        id   : 'apps.college.comedklist',
                        title: 'COMEDK',
                        type : 'basic',
                        link : '/apps/comedk/comedklist'
                    },

                ]


            },
            {
                id   : 'apps.event',
                title: 'Events',
                type : 'collapsable',
                icon : 'mat_outline:event',
                children: [
                    {
                        id   : 'apps.event.eventcategory',
                        title: 'Category',
                        type : 'basic',
                        link : '/apps/event/eventcategory'
                    },
                    {
                        id   : 'apps.event.viewevents',
                        title: 'View Events',
                        type : 'basic',
                        link : '/apps/event/viewevents'
                    },
                ]
            },
            {
                id   : 'apps.blog',
                title: 'Articles',
                type : 'collapsable',
                icon : 'mat_outline:chat_bubble_outline',
                children: [
                    {
                        id   : 'apps.blog.blogcategory',
                        title: 'Category',
                        type : 'basic',
                        link : '/apps/blog/blogcategory'
                    },
                    {
                        id   : 'apps.blog.viewblogs',
                        title: 'View Articles',
                        type : 'basic',
                        link : '/apps/blog/viewblogs'
                    },
                ]
            },
            // {
            //     id   : 'apps.package',
            //     title: 'Package',
            //     type : 'basic',
            //     icon : 'mat_outline:money',
            //     link : '/apps/package/packagelist'
            // },
            {
                id   : 'apps.loans',
                title: 'Loan',
                type : 'basic',
                icon : 'mat_outline:note',
                link : '/apps/loans/loanlist'
            },

            {
                id   : 'apps.scholerships',
                title: 'Scholarship',
                type : 'basic',
                icon : 'feather:award',
                link : '/apps/scholerships/scholershiplist'
            },

            {
                id   : 'apps.careers',
                title: 'Careers',
                type : 'collapsable',
                icon : 'mat_outline:school',
                children: [
                    {
                        id   : 'apps.careers.careerscategory',
                        title: 'Category',
                        type : 'basic',
                        link : '/apps/careers/careerscategory'
                    },
                    {
                        id   : 'apps.careers.careerlist',
                        title: 'View Careers',
                        type : 'basic',
                        link : '/apps/careers/careerlist'
                    },
                 ]
            },
            {
                id   : 'apps.exams',
                title: 'Exams',
                type : 'collapsable',
                icon : 'mat_outline:mode',
                children: [
                    // {
                    //     id   : 'apps.exams.examscategory',
                    //     title: 'Category',
                    //     type : 'basic',
                    //     link : '/apps/exams/examscategory'
                    // },
                    {
                        id   : 'apps.exams.examlist',
                        title: 'View Exams',
                        type : 'basic',
                        link : '/apps/exams/examlist'
                    },
                ]
            },
            {
                id   : 'apps.counsellingfee',
                title: 'Counselling Fee',
                type : 'basic',
                icon : 'mat_outline:money',
                link : '/apps/counsellingfee/counsellingfeelist'
            },
            {
                id   : 'apps.faqs',
                title: 'FAQs',
                type : 'collapsable',
                icon : 'mat_outline:quiz',
                children: [
                    {
                        id   : 'apps.faqs.faqscategory',
                        title: 'Category',
                        type : 'basic',
                        link : '/apps/faqs/faqscategory'
                    },
                    {
                        id   : 'apps.faqs.faqslist',
                        title: 'View FAQs',
                        type : 'basic',
                        link : '/apps/faqs/faqslist'
                    },
                ]
            },
            {
                id   : 'apps.enquiry',
                title: 'Enquiry',
                type : 'basic',
                icon : 'mat_outline:wifi_calling_3',
                link : '/apps/enquiry/enquirylist'
            },
            {
                id   : 'apps.Application',
                title: 'Application',
                type : 'basic',
                icon : 'mat_outline:assignment',
                link : '/apps/application/applicationlist'
            },


            {
                id   : 'apps.CourseEquiry',
                title: 'Course Enquiry',
                type : 'basic',
                icon : 'mat_outline:content_paste',
                link : '/apps/courseenquiry/courseenquirylist'
            },
            {
                id   : 'apps.predict',
                title: 'Predict Admission',
                type : 'basic',
                icon : 'mat_outline:post_add',
                link : '/apps/predict/predictlist'
            },
            {
                id   : 'apps.reports',
                title: 'Reports',
                type : 'collapsable',
                icon : 'mat_outline:report',
                children: [
                    {
                        id   : 'apps.reports.useractivity',
                        title: 'User Activity',
                        type : 'basic',
                        link : '/apps/reports/useractivity'
                    },
                    {
                        id   : 'apps.reports.teamreport',
                        title: 'Team Report',
                        type : 'basic',
                        link : '/apps/reports/teamreport'
                    },
                    {
                        id   : 'apps.reports.collegereport',
                        title: 'College Report',
                        type : 'basic',
                        link : '/apps/reports/collegereport'
                    }
                ]
            },
            {
                id   : 'apps.certification',
                title: 'certification',
                type : 'basic',
                icon : 'mat_solid:local_library',
                link : '/apps/certification/certificationlist'
            },
            {
                id   : 'apps.specilisation',
                title: 'Specializations',
                type : 'basic',
                icon : 'mat_outline:book',
                link : '/apps/specilisation/specilisationlist'
            },
            {
                id   : 'apps.Questionsandans',
                title: 'Q&A',
                type : 'basic',
                icon : 'mat_solid:question_answer',
                link : '/apps/questionsandans/questionandanslist'
            },



        ]
    },

    {
        id  : 'divider-1',
        type: 'divider'
    },

];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Dashboards',
        tooltip : 'Dashboards',
        type    : 'aside',
        icon    : 'heroicons_outline:home',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'apps',
        title   : 'Apps',
        tooltip : 'Apps',
        type    : 'aside',
        icon    : 'heroicons_outline:qrcode',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    // {
    //     id      : 'pages',
    //     title   : 'Pages',
    //     tooltip : 'Pages',
    //     type    : 'aside',
    //     icon    : 'heroicons_outline:document-duplicate',
    //     children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    // },
    // {
    //     id      : 'user-interface',
    //     title   : 'UI',
    //     tooltip : 'UI',
    //     type    : 'aside',
    //     icon    : 'heroicons_outline:collection',
    //     children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    // },
    // {
    //     id      : 'navigation-features',
    //     title   : 'Navigation',
    //     tooltip : 'Navigation',
    //     type    : 'aside',
    //     icon    : 'heroicons_outline:menu',
    //     children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    // }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'DASHBOARDS',
        type    : 'group',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'apps',
        title   : 'APPS',
        type    : 'group',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id   : 'others',
        title: 'OTHERS',
        type : 'group'
    },
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'aside',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'user-interface',
        title   : 'User Interface',
        type    : 'aside',
        icon    : 'heroicons_outline:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Navigation Features',
        type    : 'aside',
        icon    : 'heroicons_outline:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Dashboards',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'apps',
        title   : 'Apps',
        type    : 'group',
        icon    : 'heroicons_outline:qrcode',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'group',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'user-interface',
        title   : 'UI',
        type    : 'group',
        icon    : 'heroicons_outline:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Misc',
        type    : 'group',
        icon    : 'heroicons_outline:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
