import { makeAutoObservable } from 'mobx'

export class User {
  name = '哈哈'
  age = 18
  constructor() {
    makeAutoObservable(this)
  }
  addition() {
    this.age += 1
  }
}
