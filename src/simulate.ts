import { EnzymePropSelector, ReactWrapper } from 'enzyme';

/**
 * A simulate helper function that triggers an event on an enzyme wrapper
 *
 * @param {ReactWrapper} wrapper - Enzyme component wrapper
 * @param {EnzymePropSelector} name - Input name
 * @param {any} value - Input value
 * @param {string} event - Event name
 * @param {...args} targetValues - Values you need in the target object
 */
export default function simulate(
  wrapper: ReactWrapper,
  name: EnzymePropSelector,
  value: any,
  event: string,
  ...targetValues: any
) {
  wrapper
    .find(name)
    .simulate(event, {
      target: { name, value, ...targetValues },
    });
}
