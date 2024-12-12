import AppDataSource from './cli-runner';
import CustomersSeed from '../src/database/seeds/customer.seeds';

async function runSeeds() {
  await AppDataSource.initialize();
  const seeder = new CustomersSeed(AppDataSource);

  await seeder.seed();
  await AppDataSource.destroy();
}

runSeeds().catch(console.error);
