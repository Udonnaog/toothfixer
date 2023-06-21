import { Module } from '@nestjs/common';
import { PatientRecordsService } from './patient-records.service';
import { PatientRecordsController } from './patient-records.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientRecord } from './entities/patient-record.entity';
@Module({
imports: [TypeOrmModule.forFeature([PatientRecord])],
controllers: [PatientRecordsController],
providers: [PatientRecordsService]
})
export class PatientRecordsModule {}