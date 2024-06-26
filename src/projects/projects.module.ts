import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { ProjectRepository } from './project.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Project, ProjectRepository])],
  providers: [ProjectsService],
  controllers: [ProjectsController]
})
export class ProjectsModule {}
