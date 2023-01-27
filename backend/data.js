import bcrypt from 'bcryptjs'

const data = {
    admins: [
        { 
            adminId: 1993,
            adminName: "Miljan Peric",
            adminPassword: bcrypt.hashSync('miljan'),
            adminIs: true
        }, {
            adminId: 2609,
            adminName: "Ricpe",
            adminPassword: bcrypt.hashSync('ricpe'),
            adminIs: true
        }, 
    ],
    users: [
        {
            userId: 2584,
            firstName: "Miljan",
            lastName: "Peric",
            email: "miljanperic@gmail.com",
            mobile: "+381/000-0000",
            role: "Full-Stack WebDeveloper",
            roleType: "Employee",
            password: bcrypt.hashSync('miljan')
        },
        {
            userId: 3424,
            firstName: "John",
            lastName: "Deep",
            email: "deep@gmail.com",
            mobile: "+381/111-0000",
            role: "Boss",
            roleType: "Super Admin",
            password: bcrypt.hashSync('john')
        },
        {
            userId: 6456,
            firstName: "Ana",
            lastName: "Simic",
            email: "ana@gmail.com",
            mobile: "+381/111-1111",
            role: "HR",
            roleType: "HR Admin",
            password: bcrypt.hashSync('ana')
        }
    ],
    departments: [
        {
            departmentName: "Web Development",
            departmentHead: "Miljan Peric",
            totalEmployee: 50,
        },
        {
            departmentName: "Marketing",
            departmentHead: "John Deep",
            totalEmployee: 13,
        },
        {
            departmentName: "App Development",
            departmentHead: "Frank Camly",
            totalEmployee: 21,
        },
        {
            departmentName: "Support",
            departmentHead: "Gary Camara",
            totalEmployee: 85,
        }
    ],

    employee: [
        {
            employeeId: "6554",
            firstName: "Miljan",
            lastName: "Ricpe",
            email: "miljan@gmail.com",
            phone: "+381/555-5555",
            role: "FullStack WebDeveloper"
        },
        {
            employeeId: "53452",
            firstName: "Frank",
            lastName: "Lampard",
            email: "frank@gmail.com",
            phone: "+381/888-8888",
            role: "Node Developer"
        },
        {
            employeeId: "76762",
            firstName: "Milan",
            lastName: "Gasic",
            email: "milan@gmail.com",
            phone: "+381/587-5578",
            role: "WordPress Developer"
        }
    ],

    activity: [
        {
            title: "Title One",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia praesentium dolores! Consequuntur similique iusto quam quae perspiciatis doloribus exercitationem voluptas, saepe voluptatibus nulla quisquam sunt explicabo fuga dignissimos sapiente. Amet, magni suscipit. Ab, consectetur ratione. Culpa error modi a neque, id beatae esse aperiam necessitatibus voluptas veniam hic dolor quidem rerum voluptates numquam impedit praesentium reiciendis quam provident qui.",
            author: "Ricpe",
        },
        {
            title: "Title Two",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia praesentium dolores! Consequuntur similique iusto quam quae perspiciatis doloribus exercitationem voluptas, saepe voluptatibus nulla quisquam sunt explicabo fuga dignissimos sapiente. Amet, magni suscipit. Ab, consectetur ratione. Culpa error modi a neque, id beatae esse aperiam necessitatibus voluptas veniam hic dolor quidem rerum voluptates numquam impedit praesentium reiciendis quam provident qui.",
            author: "Ricpe",
        },
    ],

    holidays: [
        {
            day: "Sunday",
            date: "01.01.2023",
            holiday: "New Year"
        }, 
        {
            day: "Saturday",
            date: "07.01.2023",
            holiday: "Christmas"
        }, 
        {
            day: "Wednesday",
            date: "15.02.2023",
            holiday: "National Day"
        }, 
        {
            day: "Friday",
            date: "14.04.2023",
            holiday: "Great Friday"
        }, 
        {
            day: "Sunday",
            date: "16.04.2023",
            holiday: "Easter"
        }, 
        {
            day: "Monday",
            date: "17.04.2023",
            holiday: "Easter Monday"
        }, 
        {
            day: "Monday",
            date: "01.05.2023",
            holiday: "Labor Day"
        }, 
        {
            day: "Saturday",
            date: "11.11.2023",
            holiday: "Armistice Day in the First World War"
        }, 
    ],

    accounts: [
        {
            invoiceNo: "ricpe-3242",
            clients: "Google",
            type: "VISA",
            amount: "$4500.00"
        },
        {
            invoiceNo: "ricpe-55844",
            clients: "BT Technology",
            type: "PayPal",
            status: true,
            amount: "$1340.00"
        },
    ],
    events: [
        {
            startAt: '2021-11-21T18:00:00.000Z',
            endAt: '2021-11-21T19:00:00.000Z',
            summary: 'test',
            color: 'blue',
        },
        {
            startAt: '2021-11-21T18:00:00.000Z',
            endAt: '2021-11-21T19:00:00.000Z',
            summary: 'test',
            color: 'blue'
        }
        ,
        {
            startAt: '2022-09-25T18:00:00.000Z',
            endAt: '2022-10-20T19:00:00.000Z',
            timezoneStartAt: 'Europe/Berlin', // optional
            summary: 'We are starting work for a client from America',
            color: 'red'
        }
        ,
        {
            startAt: '2022-10-25T18:00:00.000Z',
            endAt: '2022-10-27T19:00:00.000Z',
            summary: 'Test',
            color: 'green'
        }
    ],
    projects: [
        {
            clientName: "Gabby George",
            project: "Admin Panel",
            projectCost: 800,
            payment: "Done",
            status: "Delivered"
        },
        {
            clientName: "Aiden Lloyd",
            project: "One Page For Portfolio",
            projectCost: 500,
        },
        {
            clientName: "Jaden Collins",
            project: "WebSite for Caffee",
            projectCost: 900,
        }
    ],

    salaryChart: [
        {
            label: 'Income',
            data: [3430, 4302, 2345, 4330, 4322, 2990, 1890],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Expense',
            data: [2500, 4302, 1900, 2654, 5434, 4564, 2200],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
            label: 'January',
            salaryIncome: 3430,
            salaryExpense: 2500
        },
        {
            label: 'February',
            salaryIncome: 4302,
            salaryExpense: 4302
        },
        {
            label: 'March',
            salaryIncome: 2345,
            salaryExpense: 1900
        },
        {
            label: 'April',
            salaryIncome: 4330,
            salaryExpense: 2654
        },
        {
            label: 'May',
            salaryIncome: 4322,
            salaryExpense: 5434
        },
        {
            label: 'June',
            salaryIncome: 2990,
            salaryExpense: 4564
        },
        {
            label: 'July',
            salaryIncome: 1890,
            salaryExpense: 2200
        },
    ]
}

export default data;