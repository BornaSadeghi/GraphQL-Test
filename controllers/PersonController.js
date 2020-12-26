class Person {
    constructor (id, { firstName, lastName, age, gender, email, isLeftHanded, balance }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.isLeftHanded = isLeftHanded;
        this.balance = balance;
    }
}

export default Person;