import {Composition} from 'remotion';
import {Spot} from './spot';

export const Root = () => <Composition id="CoffeeSpot" component={Spot} durationInFrames={360} fps={30} width={1080} height={1920} />;
