import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { Photo } from './Photo';

@Entity()
export class Author {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	/**
	 * 一对多关系
	 * 一个用户可以拥有多个图片
	 */
	@OneToMany(type => Photo, photo => photo.author, {
		// 自动保存相关对象 在保存其他对象的同时保存相关对象
		cascade: true,
	})
	photos: Photo[];
}
