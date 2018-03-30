import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
  class Person {
    constructor(name = 'Anonymous', age = 0) {
      this.name = name;
      this.age = age;
    }
    getGreeting() {
      return `Hi! I am ${this.name}.`;
    }
    getPersonDescription() {
      return `${this.name} is ${this.age} year(s) old.`;
    }
  }

  class Employee extends Person {
    constructor(name, age, title) {
      super(name, age);
      this.title = title;
    }
    getGreeting() {
      if (this.title) {
        return `Hi! I am ${this.name}. I work as a ${this.title}.`;
      } else {
        return super.getGreeting();
      }
    }
    hasJob() {
      return !!this.title;
    }
  }

  class Programmer extends Person {
    constructor(name, age, preferredLanguage = 'assembly') {
      super(name, age);
      this.preferredLanguage = preferredLanguage;
    }
    getGreeting() {
      return `Hi! I am ${this.name}. I am a ${this.preferredLanguage} developer.`;
    }
  }

  let userOne = new Programmer();
  console.log(userOne.getGreeting());
});
