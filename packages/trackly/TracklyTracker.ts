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
  private observer: IntersectionObserver | null = null;

  constructor(appId: string, url: string) {
    this.sendRequest = sendRequestProvider(url, appId);
  }

  public trackViewPage = (eventDataInput: TrackViewPageEventDataInput) => {
    const eventDataOutput = composeViewPageEvent(eventDataInput);

    this.sendRequest(Endpoint.ImpressionPage, eventDataOutput);
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

  public registerViewElementTracking = ({ actor }: { actor: string }) => {
    if (this.observer) {
      this.unregisterViewElementTracking();
    }

    const trackedElements = new Set<HTMLElement>();

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetElement = entry.target as HTMLElement;

          if (trackedElements.has(targetElement)) {
            return;
          }

          const targetName = targetElement.getAttribute('data-target-name');
          const targetPageType = targetElement.getAttribute(
            'data-target-page-type'
          );

          if (targetName && targetPageType) {
            const eventDataInput: TrackViewElementEventDataInput = {
              actor,
              targetName,
              targetPageType,
            };

            const eventDataOutput = composeViewElementEvent(eventDataInput);

            this.sendRequest(Endpoint.ImpressionElement, eventDataOutput);

            trackedElements.add(targetElement);
          }
        }
      });
    });

    const elements = document.querySelectorAll(
      '[data-target-name][data-target-page-type]'
    );
    elements.forEach((element) => this.observer?.observe(element));
  };

  public unregisterViewElementTracking = () => {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  };
}

export { TracklyTracker };
