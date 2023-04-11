import { ApiAdapter } from "../../adapter";
import { CrudService } from "../../service";
import { Course, CourseFindByCategoryRequest, CourseFindByCategoryResponse } from "./types";


export class CourseService extends CrudService<Course> {
    constructor(adapter: ApiAdapter) {
        super(adapter, 'course');
    }

    public findByCategory(parameters: CourseFindByCategoryRequest): Promise<CourseFindByCategoryResponse> {
        return this.adapter.post(`course/category/${parameters.category}`);
    }
}
