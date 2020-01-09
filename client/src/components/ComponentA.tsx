/**
 * ComponentA is a sample component. It belongs
 * to the First SPA and uses BaseComponent
 * to render self.
 */
import React from "react";

import { Navigation, BaseComponent } from '../components';

type ComponentAProps = {};

const Description: React.FC<ComponentAProps> = () => {
  return (
    <>
      <p>
        <code>ComponentA</code> is used by <code>first.tsx</code> which has been
        set as an 'entry point' of the 'first' JS bundle by <code>
        webpack.config.js</code>. Because of that the <code>ComponentA</code> and
        its dependencies (if any) are packaged into the 'first' JS bundle,
        except for components under <code>node_modules/</code> separated into the
        'vendor' bundle.
      </p>
    </>
  );
};

export const ComponentA: React.FC = _props => {
  return (
      <BaseComponent leftComponent={Navigation} rightComponent={Description} />
  );
};
