/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { SkillService } from '../skill/skill.service';
import { Skill } from '../skill/entities/skill.entity';
import { randSkill } from '@ngneat/falso';
import { Cv } from '../cv/entities/cv.entity';
import { randFirstName } from '@ngneat/falso';
import { randEmail } from '@ngneat/falso';
import { randJobTitle } from '@ngneat/falso';
import { CvService } from '../cv/cv.service';
async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const skillService = app.get(SkillService);
  const skills: Skill[] = [];
  for (let i = 0; i < 50; i++) {
    const skill = new Skill();
    skill.designation = randSkill();
    await skillService.create(skill);
    skills[i]=skill;
  }
  const cvService = app.get(CvService);
  for (let i = 0; i < 50; i++) {
    const cv = new Cv();
    cv.firstName = randFirstName();
    cv.job = randJobTitle();
    await cvService.create(cv);

  }

  await app.close();
  
}

bootstrap();
