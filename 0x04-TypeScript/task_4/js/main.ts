/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/Java.ts" />
/// <reference path="subjects/React.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Teacher.ts" />

namespace Subjects {
  export const cpp = new Cpp();
  export const java = new Java();
  export const react = new React();

  export const creacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10
  };

  console.log("C++");
  cpp.setTeacher(creacher);
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());

  console.log("Java");
  java.setTeacher(creacher);
  console.log(java.getRequirements());
  console.log(java.getAvailableTeacher());

  console.log("React");
  react.setTeacher(creacher);
  console.log(react.getRequirements());
  console.log(react.getAvailableTeacher());
}
