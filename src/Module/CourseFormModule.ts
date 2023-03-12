import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CourseFormEntity } from "./CourseForm.entity";





@Module({
imports: [TypeOrmModule.forFeature([CourseFormEntity])],
controllers: [],
providers: [],

})

export class CourseFormModule {}