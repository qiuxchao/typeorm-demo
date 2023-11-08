import { AppDataSource } from './data-source';
import { Photo } from './entity/Photo';
import { PhotoMetadata } from './entity/PhotoMetadata';
import { User } from './entity/User';
import { Author } from './entity/Author';

AppDataSource.initialize()
	.then(async () => {
		// 获取实体 repositories
		const photoRepository = AppDataSource.getRepository(Photo);
		const authorRepository = AppDataSource.getRepository(Author);

		const author = new Author();
		// author.name = '作者1';
		// await authorRepository.save(author);

		const author1 = await authorRepository.findOne({
			where: {
				name: '作者1',
			},
			relations: ['photos'],
		});
		console.log(author1);

		const photo7 = await photoRepository.findOne({
			where: {
				name: '图片7',
			},
			relations: ['author'],
			relationLoadStrategy: 'join',
		});
		console.log(photo7);

		const photo6 = await photoRepository.findOne({
			where: {
				name: '图片6',
			},
			relationLoadStrategy: 'join',
			relations: ['author'],
		});
		console.log(photo6);
		// photo6.author = author1;
		// photo7.author = author1;
		// await photoRepository.remove(photo6);

		// 创建 photo
		// const photo = new Photo();
		// photo.name = '图片8';
		// photo.description = '这是第八张图片';
		// photo.filename = 'photo8.jpg';
		// photo.isPublished = true;
		// photo.views = 1;
		// photo.albums = [];
		// photo.author = author;
		// await photoRepository.save(photo);
	})
	.catch(error => console.log(error));
