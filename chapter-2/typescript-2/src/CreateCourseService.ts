/*
* name -> string
* duration -> number
* educator -> string
*/


interface Course {
    name: String;
    duration: Number;
    educator: String;
}
class CreateCourseService {
    execute({ name, duration, educator }: Course) {
        console.log(name, duration, educator);
    }

}
export default new CreateCourseService();