import { injectable, unmanaged } from 'inversify';
import Attribute, { ConstructorParam as ParentConstructorParam } from '..';

@injectable()
export default abstract class Handler<Event extends keyof WindowEventMap> extends Attribute {
  abstract eventName: Event;
  registeredHandler?: (event: WindowEventMap[Event]) => void;

  constructor () {
    super();
  }

  register () {
    this.registeredHandler = (event: WindowEventMap[Event]) => { this.handle(event); };
    window.addEventListener(this.eventName, this.registeredHandler);
  }

  unregister() {
    if (this.registeredHandler === undefined) return;
    window.removeEventListener(this.eventName, this.registeredHandler);
    this.registeredHandler = undefined;
  }

  abstract handle (event: WindowEventMap[Event]): Promise<void>;
}
