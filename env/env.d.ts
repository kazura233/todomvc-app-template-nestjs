declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    SERVER_PORT: string;
    MYSQL_HOST: string;
    MYSQL_PORT: string;
    MYSQL_USERNAME: string;
    MYSQL_PASSWORD: string;
    MYSQL_DATABASE: string;
    MYSQL_TABLE_PREFIX: string;
  }
}
