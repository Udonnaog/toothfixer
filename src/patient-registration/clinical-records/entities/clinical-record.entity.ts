import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { PatientRecord } from "src/patient-registration/patient-records/entities/patient-record.entity";
@Entity()
export class ClinicalRecord {
@PrimaryGeneratedColumn()
id: number;
@Column()
clinicalDate: Date;
@Column()
NatureofAilment: string;
@Column({nullable: true})
MedicinePrescribed: string;
@Column({nullable: true})
ProcedureUndertaken: string
@Column()
dateOfNextAppointment: Date;
}
export {PatientRecord}