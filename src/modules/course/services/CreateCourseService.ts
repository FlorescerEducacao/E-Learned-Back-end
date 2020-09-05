import { injectable, inject } from 'tsyringe';
import ICoursesRepository from '../repository/ICoursesRepository';
import Course from '../infra/typeorm/entities/Course';

interface IRequest {
  name: string;
  description: string;
  price: string;
  videoLink: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('CoursesRepository')
    private coursesRepository: ICoursesRepository,
  ) {}

  public async execute({
    name,
    description,
    price,
    videoLink,
  }: IRequest): Promise<Course | undefined> {
    const course = await this.coursesRepository.create({
      name,
      description,
      price: Number(price),
      videoLink,
    });

    return course;
  }
}

export default CreateUserService;
