import { TracklyTracker } from 'trackly';
import { config } from './config/config';

const { trackingId, trackingUrl } = config;

const tracker = new TracklyTracker(trackingId, trackingUrl);

export { tracker };
