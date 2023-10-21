import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, ManyToMany } from 'typeorm';
import { PhotoMetadata } from './PhotoMetadata';
import { Author } from './Author';
import { Album } from './Album';

@Entity()
export class Photo {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		length: 100,
	})
	name: string;

	@Column('text')
	description: string;

	@Column()
	filename: string;

	@Column('double')
	views: number;

	@Column()
	isPublished: boolean;

	/**
	 * 双向一对一关系
	 */
	@OneToOne(type => PhotoMetadata, photoMetadata => photoMetadata.photo, {
		// 自动保存相关对象 在保存其他对象的同时保存相关对象
		cascade: true,
	})
	metadata: PhotoMetadata;

	/**
	 * 多对一关系
	 * 多张图片对应一个用户
	 */
	@ManyToOne(type => Author, author => author.photos)
	author: Author;

	/**
	 * 多对多关系
	 * 多张图片可以放在多个相册 多个相册可以存入多张图片
	 */
	@ManyToMany(type => Album, album => album.photos)
	albums: Album[];
}
