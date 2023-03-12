export class Resource {
  id?: number;
}
export interface Serializer {
  toJson(resource: Resource): any;
}
