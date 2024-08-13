export abstract class INotesRepository {
  abstract create(data: any): Promise<any>;
}
