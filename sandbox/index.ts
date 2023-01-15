import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
    await client.hSet('Mercedes', {
        color: 'Blue',
        year: '1915',
    })

    await client.hSet('Hyundai', {
        color: 'Red',
        year: '1925',
    })

    await client.hSet('Ford', {
        color: 'Green',
        year: '1935',
    })

    const commands = ['Mercedes', 'Hyundai', 'Ford'].map((cars) => {
        return client.hGetAll(cars)
    })

    const results = await Promise.all(commands)

    console.log(results);
};
run();
