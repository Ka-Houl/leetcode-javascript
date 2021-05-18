class dbStudentData {
  constructor() {
    this.scoreList = []
  }
  add(score) {
    this.scoreList.push(score)
  }
  del(score) {
    this.scoreList.pop(score)
  }
  getMin() {
    return Math.min(...this.scoreList)
  }
}

var a = new dbStudentData()
debugger
var b = a