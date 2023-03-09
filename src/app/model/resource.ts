export class Resource {
  id?: number;
}
export interface Serializer {
  fromJson(json: any): Resource;
  toJson(resource: Resource): any;
}
