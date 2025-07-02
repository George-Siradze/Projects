/*
მოცემულია IT კომპანიის თანამშრომლების მასივი მათი უნარებით, ხელფასებით და პროექტებით.
განახორციელეთ შემდეგი ფუნქციები:

1. getEmployeeProfiles(employees)
   - შექმენით თითოეული თანამშრომლის პროფილი
   - დააბრუნეთ ობიექტი რომელიც შეიცავს: სრული სახელი, განყოფილება, უნარების სია (დაყოფილი მძიმით)
   - [{fullName: "John Smith", department: "Frontend", skillsText: "React, TypeScript, CSS"}]

2. getHighPerformers(employees, salaryThreshold, minProjects)
   - გაფილტრეთ თანამშრომლები რომლებსაც აქვთ ხელფასი >= salaryThreshold და მინიმუმ minProjects პროექტი
   - დააბრუნეთ მხოლოდ მათი სრული სახელები
   - ["Alice Johnson", "Bob Wilson", ...]

3. getDepartmentAnalytics(employees)
   - გამოთვალეთ თითოეული განყოფილების სტატისტიკა
   - დააბრუნეთ ობიექტი სადაც key არის განყოფილების სახელი და value არის:
     {employeeCount: რაოდენობა, averageSalary: საშუალო ხელფასი, totalProjects: პროექტების ჯამი}
   - {Frontend: {employeeCount: 5, averageSalary: 75000, totalProjects: 23}, ...}

4. getSkillExperts(employees, requiredSkills)
   - იპოვეთ თანამშრომლები რომლებსაც აქვთ ყველა მოთხოვნილი უნარი
   - requiredSkills არის სტრიქონების მასივი
   - დააბრუნეთ მასივი ობიექტებით: {name: სრული სახელი, matchingSkills: რამდენი უნარი ემთხვევა}
   - [{name: "Alice Johnson", matchingSkills: 3}, ...]

5. getSkillsReport(employees, targetSkills)
   - შექმენით რეპორტი მოცემული უნარების შესახებ
   - targetSkills არის სტრიქონი, უნარები დაყოფილი მძიმით
   - დააბრუნეთ ობიექტი რომელიც შეიცავს:
     * totalEmployees: ჯამური თანამშრომლების რაოდენობა
     * skillCoverage: ობიექტი სადაც key არის უნარი, value არის რამდენ ადამიანს აქვს ეს უნარი
     * expertsPerSkill: ობიექტი სადაც key არის უნარი, value არის ამ უნარის მქონე ადამიანების სახელების სია (დაყოფილი მძიმით)
   - {totalEmployees: 26, skillCoverage: {React: 4, CSS: 8}, expertsPerSkill: {React: "Alice Johnson,Frank Taylor,Maya Garcia,Tina Young"}}

მოთხოვნები:
- არ შეცვალოთ ორიგინალი მონაცემები
*/

const employees = [
  {
    firstName: "Alice",
    lastName: "Johnson",
    department: "Frontend",
    salary: 85000,
    skills: ["React", "TypeScript", "CSS", "JavaScript", "HTML"],
    projectsCompleted: 12
  },
  {
    firstName: "Bob",
    lastName: "Wilson",
    department: "Backend",
    salary: 92000,
    skills: ["Node.js", "Python", "MongoDB", "PostgreSQL", "Docker"],
    projectsCompleted: 15
  },
  {
    firstName: "Carol",
    lastName: "Davis",
    department: "Frontend",
    salary: 78000,
    skills: ["Vue.js", "JavaScript", "CSS", "HTML", "Sass"],
    projectsCompleted: 8
  },
  {
    firstName: "David",
    lastName: "Miller",
    department: "DevOps",
    salary: 95000,
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
    projectsCompleted: 10
  },
  {
    firstName: "Emma",
    lastName: "Brown",
    department: "Backend",
    salary: 88000,
    skills: ["Java", "Spring", "MySQL", "Redis", "Kafka"],
    projectsCompleted: 13
  },
  {
    firstName: "Frank",
    lastName: "Taylor",
    department: "Frontend",
    salary: 82000,
    skills: ["React", "JavaScript", "CSS", "Redux", "HTML"],
    projectsCompleted: 9
  },
  {
    firstName: "Grace",
    lastName: "Anderson",
    department: "Mobile",
    salary: 90000,
    skills: ["React Native", "iOS", "Swift", "JavaScript", "TypeScript"],
    projectsCompleted: 11
  },
  {
    firstName: "Henry",
    lastName: "Thomas",
    department: "Backend",
    salary: 87000,
    skills: ["Python", "Django", "PostgreSQL", "Redis", "Celery"],
    projectsCompleted: 14
  },
  {
    firstName: "Ivy",
    lastName: "Jackson",
    department: "Frontend",
    salary: 79000,
    skills: ["Angular", "TypeScript", "RxJS", "CSS", "HTML"],
    projectsCompleted: 7
  },
  {
    firstName: "Jack",
    lastName: "White",
    department: "DevOps",
    salary: 93000,
    skills: ["Azure", "Docker", "Ansible", "Python", "Bash"],
    projectsCompleted: 12
  },
  {
    firstName: "Kate",
    lastName: "Harris",
    department: "Mobile",
    salary: 86000,
    skills: ["Flutter", "Dart", "Firebase", "iOS", "Android"],
    projectsCompleted: 10
  },
  {
    firstName: "Liam",
    lastName: "Martin",
    department: "Backend",
    salary: 91000,
    skills: ["Go", "gRPC", "PostgreSQL", "Docker", "Kubernetes"],
    projectsCompleted: 16
  },
  {
    firstName: "Maya",
    lastName: "Garcia",
    department: "Frontend",
    salary: 84000,
    skills: ["React", "Next.js", "TypeScript", "GraphQL", "CSS"],
    projectsCompleted: 11
  },
  {
    firstName: "Noah",
    lastName: "Rodriguez",
    department: "Backend",
    salary: 89000,
    skills: ["Ruby", "Rails", "PostgreSQL", "Redis", "Sidekiq"],
    projectsCompleted: 13
  },
  {
    firstName: "Olivia",
    lastName: "Lopez",
    department: "Mobile",
    salary: 88000,
    skills: ["Kotlin", "Android", "Firebase", "Java", "SQLite"],
    projectsCompleted: 9
  },
  {
    firstName: "Paul",
    lastName: "Lee",
    department: "DevOps",
    salary: 96000,
    skills: ["GCP", "Terraform", "Kubernetes", "Prometheus", "Grafana"],
    projectsCompleted: 14
  },
  {
    firstName: "Quinn",
    lastName: "Walker",
    department: "Frontend",
    salary: 81000,
    skills: ["Svelte", "JavaScript", "CSS", "HTML", "Webpack"],
    projectsCompleted: 8
  },
  {
    firstName: "Ruby",
    lastName: "Hall",
    department: "Backend",
    salary: 90000,
    skills: ["C#", ".NET", "SQL Server", "Azure", "Docker"],
    projectsCompleted: 12
  },
  {
    firstName: "Sam",
    lastName: "Allen",
    department: "Mobile",
    salary: 87000,
    skills: ["React Native", "Expo", "JavaScript", "Firebase", "Redux"],
    projectsCompleted: 10
  },
  {
    firstName: "Tina",
    lastName: "Young",
    department: "Frontend",
    salary: 83000,
    skills: ["React", "TypeScript", "Styled Components", "GraphQL", "Jest"],
    projectsCompleted: 13
  },
  {
    firstName: "Uma",
    lastName: "King",
    department: "Backend",
    salary: 94000,
    skills: ["Scala", "Akka", "PostgreSQL", "Kafka", "Docker"],
    projectsCompleted: 15
  },
  {
    firstName: "Victor",
    lastName: "Wright",
    department: "DevOps",
    salary: 97000,
    skills: ["AWS", "Terraform", "Jenkins", "Docker", "ELK Stack"],
    projectsCompleted: 16
  },
  {
    firstName: "Wendy",
    lastName: "Green",
    department: "Mobile",
    salary: 85000,
    skills: ["Swift", "UIKit", "Core Data", "iOS", "Xcode"],
    projectsCompleted: 11
  },
  {
    firstName: "Xander",
    lastName: "Adams",
    department: "Backend",
    salary: 92000,
    skills: ["Rust", "Actix", "PostgreSQL", "Redis", "Docker"],
    projectsCompleted: 14
  },
  {
    firstName: "Yara",
    lastName: "Nelson",
    department: "Frontend",
    salary: 86000,
    skills: ["Vue.js", "Nuxt.js", "TypeScript", "Vuex", "CSS"],
    projectsCompleted: 12
  },
  {
    firstName: "Zoe",
    lastName: "Carter",
    department: "Mobile",
    salary: 89000,
    skills: ["Flutter", "Dart", "BLoC", "Firebase", "SQLite"],
    projectsCompleted: 13
  }
];

function getEmployeeProfiles(employees) {
  return employees.map(employee => ({
    fullName: `${employee.firstName} ${employee.lastName}`,
    department: employee.department,
    skillsText: employee.skills.join(', ')
  }));
}

function getHighPerformers(employees, salaryThreshold, minProjects) {
  return employees
    .filter(employee => employee.salary >= salaryThreshold && employee.projectsCompleted >= minProjects)
    .map(employee => `${employee.firstName} ${employee.lastName}`);
}

function getDepartmentAnalytics(employees) {
  return employees.reduce((analytics, employee) => {
    if (!analytics[employee.department]) {
      analytics[employee.department] = { employeeCount: 0, averageSalary: 0, totalProjects: 0 };
    }
    const dept = analytics[employee.department];
    dept.employeeCount += 1;
    dept.averageSalary += employee.salary;
    dept.totalProjects += employee.projectsCompleted;
    return analytics;
  }, {});
}

function getSkillExperts(employees, requiredSkills) {
  return employees.map(employee => ({
    name: `${employee.firstName} ${employee.lastName}`,
    matchingSkills: requiredSkills.filter(skill => employee.skills.includes(skill)).length
  })).filter(expert => expert.matchingSkills === requiredSkills.length);
}

function getSkillsReport(employees, targetSkills) {
  const skillsArray = targetSkills.split(',');
  const report = {
    totalEmployees: employees.length,
    skillCoverage: {},
    expertsPerSkill: {}
  };

  skillsArray.forEach(skill => {
    report.skillCoverage[skill] = 0;
    report.expertsPerSkill[skill] = [];
  });

  employees.forEach(employee => {
    skillsArray.forEach(skill => {
      if (employee.skills.includes(skill)) {
        report.skillCoverage[skill] += 1;
        report.expertsPerSkill[skill].push(`${employee.firstName} ${employee.lastName}`);
      }
    });
  });

  for (const skill in report.expertsPerSkill) {
    report.expertsPerSkill[skill] = report.expertsPerSkill[skill].join(',');
  }

  return report;
}

// ტესტები
console.log("=== Employee Profiles ===");
console.log(getEmployeeProfiles(employees));

console.log("\n=== High Performers (Salary >= 90000, Projects >= 12) ===");
console.log(getHighPerformers(employees, 90000, 12));

console.log("\n=== Department Analytics ===");
console.log(getDepartmentAnalytics(employees));

console.log("\n=== Skill Experts (React, TypeScript, CSS) ===");
console.log(getSkillExperts(employees, ["React", "TypeScript", "CSS"]));

console.log("\n=== Skills Report (React, CSS, Docker, Python) ===");
console.log(getSkillsReport(employees, "React,CSS,Docker,Python"));