export default class Intern {
  public courses: [];
  public internId: Number;
  public mentor: [];
  public person: [];
  constructor(courses: [], internId: number, mentor: [], person: []) {
    this.courses = courses;
    this.internId = internId;
    this.mentor = mentor;
    this.person = person;
  }
}
