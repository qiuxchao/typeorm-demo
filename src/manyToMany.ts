import { AppDataSource } from './data-source';
import { Album } from './entity/Album';
import { Photo } from './entity/Photo';
import { PhotoMetadata } from './entity/PhotoMetadata';
import { User } from './entity/User';

// 多对多关系 多张图片可以放在多个相册 多个相册可以存入多张图片
AppDataSource.initialize()
	.then(async () => {
		const albumRepository = AppDataSource.manager.getRepository(Album);
		const photoRepository = AppDataSource.manager.getRepository(Photo);

		// 相册1
		const album1 = new Album();
		album1.name = '相册1';
		await albumRepository.save(album1);

		// 相册2
		const album2 = new Album();
		album2.name = '相册2';
		await albumRepository.save(album2);

		// 创建照片
		const photo = new Photo();
		photo.name = '图片6';
		photo.description = '这是第六张图片';
		photo.filename = 'photo6.jpg';
		photo.isPublished = true;
		photo.views = 1;
		photo.albums = [album1, album2];
		await photoRepository.save(photo);

		// 查询图片时附加图片相关联的相册
		const loadedPhoto = await photoRepository.findOne({
			where: {
				name: '图片6',
			},
			relations: ['albums'],
		});

		console.log(loadedPhoto);
	})
	.catch(error => console.log(error));
