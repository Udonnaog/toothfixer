import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
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
@Column()
dateOfBirth: Date;
@Column({nullable: true})
ProcedureUndertaken: string
@Column()
dateOfNextAppointment: Date;
}