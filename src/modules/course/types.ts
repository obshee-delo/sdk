import { Response } from '../../types';


export type Course = {
    id: string,
    name: string,
    category: string
}

export type CourseFindByCategoryRequest = {
    category: string
};

export type CourseFindByCategoryResponse = Response<Course[]>;
