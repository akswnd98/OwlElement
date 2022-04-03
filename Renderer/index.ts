import Raw from '../Element/Raw';

export default abstract class Renderer {
  abstract render (element: Raw): void;
}
