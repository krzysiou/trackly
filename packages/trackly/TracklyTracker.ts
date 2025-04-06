import type { SendRequest } from './http/send-request';
import type { TrackViewPageEventDataInput } from './events/impression/track-view-page';
import type { TrackViewElementEventDataInput } from './events/impression/track-view-element';
import type { TrackSubmitFormEventDataInput } from './events/engagement/track-submit-form';
import type { TrackClickElementEventDataInput } from './events/engagement/track-click-element';

import { Endpoint } from './consts/endpoint';
import { sendRequestProvider } from './http/send-request';
import { composeViewPageEvent } from './events/impression/track-view-page';
import { composeViewElementEvent } from './events/impression/track-view-element';
import { composeSubmitFormEvent } from './events/engagement/track-submit-form';
import { composeClickElementEvent } from './events/engagement/track-click-element';

class TracklyTracker {
  private sendRequest: SendRequest;

  constructor(appId: string, url: string) {
    this.sendRequest = sendRequestProvider(url, appId);
  }

  public trackViewPage = (eventDataInput: TrackViewPageEventDataInput) => {
    const eventDataOutput = composeViewPageEvent(eventDataInput);

    this.sendRequest(Endpoint.ImpressionPage, eventDataOutput);
  };

  public trackViewElement = (
    eventDataInput: TrackViewElementEventDataInput
  ) => {
    const eventDataOutput = composeViewElementEvent(eventDataInput);

    this.sendRequest(Endpoint.ImpressionElement, eventDataOutput);
  };

  public trackClickElement = (
    eventDataInput: TrackClickElementEventDataInput
  ) => {
    const eventDataOutput = composeClickElementEvent(eventDataInput);

    this.sendRequest(Endpoint.EngagementClick, eventDataOutput);
  };

  public trackSubmitForm = (eventDataInput: TrackSubmitFormEventDataInput) => {
    const eventDataOutput = composeSubmitFormEvent(eventDataInput);

    this.sendRequest(Endpoint.EngagementSubmit, eventDataOutput);
  };
}

export { TracklyTracker };
