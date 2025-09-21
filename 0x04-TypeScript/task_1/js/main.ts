// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Create teacher instances
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Additional examples to demonstrate the interface
const teacher1: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'New York',
  yearsOfExperience: 5,
};

const teacher2: Teacher = {
  firstName: 'Mike',
  lastName: 'Johnson',
  fullTimeEmployee: true,
  location: 'California',
  yearsOfExperience: 3,
  subject: 'Mathematics',
  salary: 50000,
};

console.log(teacher1);
console.log(teacher2);
