import 'reflect-metadata';
import { injectable } from 'inversify';
import Element from '../Element';

export type ConstructorParam = {
};

@injectable()
export default abstract class EBAttribute {
  abstract register (element: Element): void;
  abstract unregister (element: Element): void;
}
