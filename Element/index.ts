import Attribute from '../Attribute';
import Raw, { ConstructorParam as ParentConstructorParam } from './Raw';
import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';

export type ConstructorParam = {
  attributes?: Attribute[];
} & ParentConstructorParam;

@injectable()
export default class Element extends Raw {
  constructor (@unmanaged() payload: ConstructorParam) {
    super(payload);
    if (payload.attributes !== undefined)
      this.registerAttributes(payload.attributes);
  }

  registerAttributes (attributes: Attribute[]) {
    try {
      attributes.forEach((v) => { this.registerAttribute(v) });
    } catch (e) {
      console.log(e);
      throw Error('Element.registerAttributes failed');
    }
  }

  registerAttribute (attribute: Attribute) {
    try {
      attribute.register(this);
    } catch (e) {
      console.log(e);
      throw Error('Element.registerAttribute failed');
    }
  }
}
