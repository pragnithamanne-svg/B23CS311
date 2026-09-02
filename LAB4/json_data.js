const student = {
  name: "Tejaswi",
  age: 20,
  course: "FSD",
  marks: 85,
};

const jsonData = JSON.stringify(student);

console.log("JSON String:");
console.log(jsonData);

const obj = JSON.parse(jsonData);

console.log("\nJavaScript Object:");
console.log(obj);

console.log("\nStudent Name:", obj.name);
console.log("Course:", obj.course);
console.log("Marks:", obj.marks);
