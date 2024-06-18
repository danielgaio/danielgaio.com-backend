import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Project } from "./project.entity";
import { User } from "../users/user.entity";

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectsRepository: Repository<Project>
  ) {}

  async create(
    name: string,
    description: string,
    url: string,
    user: User
  ): Promise<Project> {
    const project = this.projectsRepository.create({
      name,
      description,
      url,
      user,
    });
    return this.projectsRepository.save(project);
  }

  async findAll(): Promise<Project[]> {
    return this.projectsRepository.find({ relations: ["user"] });
  }
}
