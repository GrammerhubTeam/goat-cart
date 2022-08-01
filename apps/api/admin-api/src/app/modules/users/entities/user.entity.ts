import { Entity, Column } from "typeorm";

@Entity("users")
export class User {
    @Column({
        unique: true
    })
    id: "uuid" | unique

    @Column({
        unique: true
    })
    username: string | unique

    @Column({
        nullable: false
    })
    password: string

    @Column({
        nullable: false
    })
    createdDate: Date

    @Column({
        nullable: false
    })
    updatedAt: Date

    @Column({
        unique: true
    })
    email: string | unique
}
