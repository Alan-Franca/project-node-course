class Person {
    constructor(name) {
        this.name = name;
    }

    sayMyName() {
        return 'The name of Nextage is ' + this.name + '!';
    }
}

module.exports = {
    Person,
};