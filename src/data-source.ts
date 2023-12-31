import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';

export const AppDataSource = new DataSource({
	type: 'mysql',
	host: 'localhost',
	port: 3306,
	username: 'root',
	password: 'qiu123456',
	database: 'typeorm_demo',
	synchronize: true,
	logging: false,
	entities: [`${__dirname}/entity/*.ts`],
	migrations: [],
	subscribers: [],
});
