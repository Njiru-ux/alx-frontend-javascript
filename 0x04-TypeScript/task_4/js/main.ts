/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/Java.ts" />
/// <reference path="subjects/React.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Teacher.ts" />

namespace Subjects {
  // Export constants for each subject
  export const cpp = new Cpp();
  export const java = new Java();
  export const react = new React();

  // Export teacher object with experienceTeachingC = 10
  export const cTeacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10
  };

  // For Cpp subject
  console.log("C++");
  cpp.setTeacher(cTeacher);
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());

  // For Java subject
  console.log("Java");
  java.setTeacher(cTeacher);
  console.log(java.getRequirements());
  console.log(java.getAvailableTeacher());

  // For React subject
  console.log("React");
  react.setTeacher(cTeacher);
  console.log(react.getRequirements());
  console.log(react.getAvailableTeacher());
}
