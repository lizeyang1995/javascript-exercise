// TODO 17: 在这里写实现代码
import Person from './person';

export default class Worker extends Person {
  introduce() {
    return `My name is ${this.name}. I am ${this.age} years old. I am a Worker. I have a job.`;
  }
}
