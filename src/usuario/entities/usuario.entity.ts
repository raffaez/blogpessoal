import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { MessagesHelper } from 'src/helpers/messages.helper';
import { RegExHelper } from 'src/helpers/regex.helper';
import { Postagem } from 'src/postagem/entities/postagem.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'tb_usuarios'})
export class Usuario{

    @PrimaryGeneratedColumn()
    public id: number;
    
    @IsNotEmpty()
    @Column({ nullable: false })
    public nome: string;

    @IsNotEmpty()
    @Column({ nullable: false })
    public sobrenome: string;

    @IsEmail()
    @Column()
    public email: string;

    @IsNotEmpty()
    @Column()
    @Matches(RegExHelper.password, { message: MessagesHelper.PASSWORD_VALID })
    public senha: string;

    @Column({ length: 5000, default: 'default.jpg'})
    public foto: string;

    @OneToMany(() => Postagem, (postagem) => postagem.usuario)
    postagem: Postagem[];
}