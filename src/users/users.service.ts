import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { User } from "@prisma/client";
import * as bcrypt from "bcryptjs";

@Injectable()
export class UsersService {
  // constructor(private prisma: PrismaService) {}

  // async create(username: string, password: string): Promise<User> {
  //   const hashedPassword = await bcrypt.hash(password, 10);
  //   return this.prisma.user.create({
  //     data: {
  //       username,
  //       password: hashedPassword,
  //     },
  //   });
  // }

  // async findOne(username: string): Promise<User | undefined> {
  //   return this.prisma.user.findUnique({ where: { username } });
  // }
}
