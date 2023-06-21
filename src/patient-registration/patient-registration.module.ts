import { Module } from '@nestjs/common';
import { PatientRecordsModule } from './patient-records/patient-records.module';
import { ClinicalRecordsModule } from './clinical-records/clinical-records.module';

@Module({
  imports: [PatientRecordsModule, ClinicalRecordsModule]
})
export class PatientRegistrationModule {}
