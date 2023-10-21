import { AppDataSource } from './data-source';
import { Photo } from './entity/Photo';
import { PhotoMetadata } from './entity/PhotoMetadata';
import { User } from './entity/User';

AppDataSource.initialize()
	.then(async () => {})
	.catch(error => console.log(error));
