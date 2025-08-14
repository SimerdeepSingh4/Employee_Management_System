const employees = [
    {
        "id": 1,
        "name": "John Doe",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_title": "Design Login Page",
                "task_description": "Create a responsive login page using TailwindCSS.",
                "task_date": "2025-08-12",
                "category": "Design"
            },
            {
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false,
                "task_title": "Fix Navbar Bug",
                "task_description": "Resolve navbar collapse issue on mobile devices.",
                "task_date": "2025-08-10",
                "category": "Development"
            },
            {
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": true,
                "task_title": "Update API Endpoints",
                "task_description": "Update all outdated API endpoints to match the new backend version.",
                "task_date": "2025-08-11",
                "category": "Backend"
            }
        ]
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_title": "Write Documentation",
                "task_description": "Prepare documentation for the new payment gateway integration.",
                "task_date": "2025-08-15",
                "category": "Documentation"
            },
            {
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false,
                "task_title": "Optimize Images",
                "task_description": "Compress images on the landing page for faster load time.",
                "task_date": "2025-08-09",
                "category": "Performance"
            },
            {
                "active": false,
                "new_task": false,
                "completed": false,
                "failed": true,
                "task_title": "Database Backup",
                "task_description": "Failed to backup the database due to connection timeout.",
                "task_date": "2025-08-07",
                "category": "Database"
            },
            {
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false,
                "task_title": "Test User Registration",
                "task_description": "Perform QA testing on the new user registration flow.",
                "task_date": "2025-08-14",
                "category": "Testing"
            }
        ]
    },
    {
        "id": 3,
        "name": "Bob Johnson",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_title": "Create Dashboard UI",
                "task_description": "Design a new dashboard interface with charts and analytics.",
                "task_date": "2025-08-13",
                "category": "Design"
            },
            {
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false,
                "task_title": "Refactor CSS",
                "task_description": "Clean up unused CSS classes and improve structure.",
                "task_date": "2025-08-08",
                "category": "Development"
            },
            {
                "active": false,
                "new_task": false,
                "completed": false,
                "failed": true,
                "task_title": "Fix Payment Gateway Bug",
                "task_description": "Payment fails when using coupon codes.",
                "task_date": "2025-08-05",
                "category": "Backend"
            },
            {
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false,
                "task_title": "Improve SEO",
                "task_description": "Add meta tags and improve heading structure.",
                "task_date": "2025-08-16",
                "category": "SEO"
            },
            {
                "active": false,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_title": "Customer Feedback Form",
                "task_description": "Add a feedback form on the contact page.",
                "task_date": "2025-08-17",
                "category": "Frontend"
            }
        ]
    },
    {
        "id": 4,
        "name": "Alice Brown",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_title": "Integrate Email Service",
                "task_description": "Set up email notifications for order confirmation.",
                "task_date": "2025-08-18",
                "category": "Backend"
            },
            {
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false,
                "task_title": "Add Dark Mode",
                "task_description": "Implement dark mode for the application.",
                "task_date": "2025-08-09",
                "category": "Frontend"
            },
            {
                "active": false,
                "new_task": false,
                "completed": false,
                "failed": true,
                "task_title": "Server Migration",
                "task_description": "Failed to migrate due to insufficient permissions.",
                "task_date": "2025-08-06",
                "category": "DevOps"
            }
        ]
    },
    {
        "id": 5,
        "name": "David Lee",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_title": "Create Blog Layout",
                "task_description": "Design a responsive blog layout for articles.",
                "task_date": "2025-08-19",
                "category": "Design"
            },
            {
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false,
                "task_title": "Add Search Feature",
                "task_description": "Implement search functionality with autocomplete.",
                "task_date": "2025-08-08",
                "category": "Frontend"
            },
            {
                "active": false,
                "new_task": false,
                "completed": false,
                "failed": true,
                "task_title": "Security Patch",
                "task_description": "Failed to apply security patch due to server error.",
                "task_date": "2025-08-07",
                "category": "Security"
            },
            {
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false,
                "task_title": "Social Media Integration",
                "task_description": "Link social media accounts to the user profile page.",
                "task_date": "2025-08-15",
                "category": "Backend"
            }
        ]
    }
]

const admins = [
    {
        "id": 1,
        "name": "Simerdeep",
        "email": "admin@example.com",
        "password": "123"
    }
]

export const setLocalStorage = () =>{
    if(!localStorage.getItem('employees')){
        localStorage.setItem('employees', JSON.stringify(employees))
    }
    if(!localStorage.getItem('admins')){
        localStorage.setItem('admins', JSON.stringify(admins))
    }
}

export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admins = JSON.parse(localStorage.getItem('admins'))
    
    return {employees, admins}
    
}