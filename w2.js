let developer = [
    {
        name: "Nikol",
        surName: "Sava",
        salary: "230",
        experience: 3,
    },
    {
        name: "Alex",
        surName: "Sold",
        salary: "150",
        experience: 1,
    },
    {
        name: "Nik",
        surName: "Backats",
        salary: "300",
        experience: 4,
    },
    {
        name: "Elena",
        surName: "Mitukova",
        salary: "250",
        experience: 2,
    },
    {
        name: "Pol",
        surName: "Valder",
        salary: "450",
        experience: 7,
    },
    {
        name: "Jack",
        surName: "Dalson",
        salary: "440",
        experience: 6,
    },
    {
        name: "Ben",
        surName: "Afleck",
        salary: "550",
        experience: 7,
    },
    {
        name: "Nikola",
        surName: "Tesla",
        salary: "540",
        experience: 7,
    },
    {
        name: "Laura",
        surName: "Engels",
        salary: "500",
        experience: 6,
    },
    {
        name: "Sofi",
        surName: "Nikka",
        salary: "600",
        experience: 7,
    },
    {
        name: "01",
        surName: "02",
        salary: "440",
        experience: 1,
    },
];

let designer = [
    {
        name: "David",
        surName: "Guetta",
        salary: 1000,
        experience: 1,
        efficiency: 0.4,
    },
    {
        name: "Robert",
        surName: "Downe",
        salary: 1000,
        experience: 2,
        efficiency: 0.5,
    },
    {
        name: "Charles",
        surName: "Shreder",
        salary: 1000,
        experience: 3,
        efficiency: 0.6,
    },
    {
        name: "William",
        surName: "Uotson",
        salary: 1000,
        experience: 6,
        efficiency: 1,
    },
    {
        name: "Nik",
        surName: "Thomas",
        salary: 1000,
        experience: 3,
        efficiency: 0.6,
    },
    {
        name: "Julie",
        surName: "Angela",
        salary: 1000,
        experience: 4,
        efficiency: 0.7,
    },
    {
        name: "Margo",
        surName: "Illinois",
        salary: 1000,
        experience: 7,
        efficiency: 1,
    },
    {
        name: "Linda",
        surName: "Gamelton",
        salary: 1000,
        experience: 10,
        efficiency: 1,
    },
];

let manager = [
    {
        name: "Ryan",
        surName: "Berds",
        salary: 300,
        experience: 2,
        team: [{ developer: [developer[0]] }, { designer: [designer[0]] }],
    },
    {
        name: "Nicholas",
        surName: "Bokhe",
        salary: 320,
        experience: 5,
        team: [
            { developer: [developer[1], developer[2], developer[6]] },
            { designer: [designer[1], designer[4]] },
        ],
    },
    {
        name: "Eric",
        surName: "Buttons",
        salary: 400,
        experience: 10,
        team: [
            {
                developer: [
                    developer[3],
                    developer[4],
                    developer[5],
                    developer[7],
                    developer[8],
                    developer[9],
                    developer[10],
                ],
            },
            {
                designer: [
                    designer[2],
                    designer[3],
                    designer[5],
                    designer[6],
                    designer[7],
                ],
            },
        ],
    },
];

let department = {
    manager: manager,
    giveSalary: function () {
        this.manager.map((m) => {
            this.createCard(m, "Manager");
            m.team.map((e) => {
                if (Object.keys(e) == "developer") {
                    e.developer.map((e) => {
                        this.createCard(e, "Developer");
                    });
                } else
                    e.designer.map((d) => {
                        this.createCard(d, "Designer");
                    });
            });
        });
    },

    createCard: function (empl, position) {
        console.log(position);
        console.log(`Name: ${empl.name}`);
        console.log(`Surname: ${empl.surName}`);
        console.log(`The salary: ${this.countedSalary(empl)} Sheqel \n\n`);
    },

    countedSalary: function (empoyee) {
        if (empoyee.efficiency) {
            empoyee.salary *= empoyee.efficiency;
        }
        if (empoyee.team) {
            let countEmpl = 0;
            let coefMostDev = 1;
            let dev = 0;
            let des = 0;
            empoyee.team.map((e) => {
                if (e.developer) {
                    countEmpl += e.developer.length;
                    dev = e.developer.length;
                } else {
                    countEmpl += e.designer.length;
                    des = e.designer.length;
                }
            });
            if (dev > des) {
                coefMostDev = 1.1;
            }

            if (countEmpl > 5 && countEmpl <= 10) {
                empoyee.salary += 200;
            }
            if (countEmpl > 10) {
                empoyee.salary += 300;
            } else {
                empoyee.salary;
            }
            empoyee.salary *= coefMostDev;
        }
        if (empoyee.experience > 2 && empoyee.experience <= 5) {
            return +empoyee.salary + 200;
        }
        if (empoyee.experience > 5) {
            return +empoyee.salary * 1.2 + 500;
        } else return empoyee.salary;
    },
};

department.giveSalary();
