import { Provider } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

export const databaseProvider: Provider = {
  provide: 'DATABASE_CONNECTION',
  useFactory: async () => await MongooseModule.forRoot('mongodb://localhost:27017/my-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }),
};

