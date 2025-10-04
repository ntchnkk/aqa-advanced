const users = [
    { firstName: 'John', lastName: 'Lennon', instruments: ['vocals', 'guitar', 'keyboards', 'harmonica'] },
    { firstName: 'Paul', lastName: 'McCartney', instruments: ['vocals', 'bassguitar', 'guitar', 'keyboards', 'drums'] },
    { firstName: 'George', lastName: 'Harrison', instruments: ['guitar', 'vocals', 'sitar', 'keyboards'] },
    { firstName: 'Ringo', lastName: 'Starr', instruments: ['drums', 'vocals'] }
];

for (const user of users) {
    console.log(user);
};

for (const {firstName, lastName, instruments} of users) {
    console.log(`${firstName} ${lastName} is a legendary musician known for his ${instruments.join(", ")} skills.`);
};