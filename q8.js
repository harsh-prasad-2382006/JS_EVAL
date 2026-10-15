class CustomerSupportAgent{
    name
    employeeId
      department
experience

    constructor(name,employeeId,department,experience){
        this.name=name
        this.employeeId=employeeId
        this.department=department
        this.experience=experience
    }
    display(){
        console.log(this.name)
        console.log(this.employeeId)
        console.log(this.department)
        console.log(this.experience)
    }
}

const emp = new CustomerSupportAgent("Harsh",101,"IT","4 years")
emp.display()