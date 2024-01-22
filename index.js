// Write your solution in this file!
const employee = {
    name: "gary",
    streetAddress: "16411 globetrotter"
};

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    const newObj = { ...employee };
    newObj[key] = value;
    return newObj;
};

const newEmployeeWithName = updateEmployeeWithKeyAndValue(employee, "name", "loverboy");
const newEmployeeWithStreetAddress = updateEmployeeWithKeyAndValue(newEmployeeWithName, "streetAddress", "1122 loverboylane");

console.log(newEmployeeWithStreetAddress);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value 
    return employee
}

const employee1 = destructivelyUpdateEmployeeWithKeyAndValue(employee,"name", "Davy jones")
const employee1WithAddress = destructivelyUpdateEmployeeWithKeyAndValue(employee1, "streetAddress", "111 davy jones drive")

console.log(employee1WithAddress)


function deleteFromEmployeeByKey(employee, key) {
    const newObj = { ...employee1 };
    delete newObj[key]
    return newObj;

}
console.log(employee)
console.log(deleteFromEmployeeByKey(employee, "name"))


const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];
    return employee
};


// Example usage
const newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');



