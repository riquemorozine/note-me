export abstract class IUserRepository {
  abstract create(data: any): Promise<any>;
}
