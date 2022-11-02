import { AdminModule } from '@adminjs/nestjs';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Candidate } from './typeorm/entities/Candidate';
import { Login } from './typeorm/entities/Login';
import { Position } from './typeorm/entities/Position';
import { User } from './typeorm/entities/User';
import { Vote } from './typeorm/entities/Vote';
import { UsersModule } from './users/users.module';
import { VotesModule } from './votes/votes.module';

import { Database, Resource } from '@adminjs/typeorm'; // or any other adapter
import AdminJS from 'adminjs';
AdminJS.registerAdapter({ Database, Resource });

const DEFAULT_ADMIN = {
  email: 'admin@example.com',
  password: 'password',
};

const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }
  return null;
};

const LoginResource = {
  resource: Login,
  options: {
    id: 'auth',
  },
};

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Nickjames@2022#',
      database: 'election_db',
      entities: [Position, Login, User, Vote, Candidate],
      synchronize: true,
      // autoLoadEntities: true,
    }),

    AdminModule.createAdminAsync({
      useFactory: () => ({
        adminJsOptions: {
          rootPath: '/admin',
          dashboard: {
            component: AdminJS.bundle('./adminjs/components/Dashboard'),
          },
          resources: [
            {
              resource: Login,
              options: {
                properties: {
                  id: {
                    isVisible: false,
                  },
                },
              },
            },
            {
              resource: User,
              options: {
                properties: {
                  id: {
                    isVisible: false,
                  },
                  voted: {
                    isVisible: {
                      edit: false,
                      list: true,
                      show: true,
                      filter: true,
                    },
                  },
                },
              },
            },
            {
              resource: Candidate,
              options: {
                properties: {
                  id: {
                    isVisible: false,
                  },
                  photo: {
                    components: {
                      edit: AdminJS.bundle(
                        './adminjs/components/CandidateProfilePicker',
                      ),
                    },
                  },
                },
              },
            },
            {
              resource: Position,
              options: {
                properties: {
                  id: {
                    isVisible: false,
                  },
                  description: {
                    type: 'richtext',
                  },
                },
              },
            },
            // Vote,
          ],
          branding: {
            withMadeWithLove: false,
            companyName: 'Kanisa la Bwana',
            logo: false,
          },
        },
        // auth: {
        //   authenticate,
        //   cookieName: 'adminjs',
        //   cookiePassword: 'secret',
        // },
        // sessionOptions: {
        //   resave: true,
        //   saveUninitialized: true,
        //   secret: 'secret',
        // },
      }),
    }),

    UsersModule,
    VotesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
