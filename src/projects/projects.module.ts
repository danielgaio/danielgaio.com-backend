import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';

@Module({
  imports: [],
  providers: [ProjectsService],
  controllers: [ProjectsController]
})
export class ProjectsModule {}
