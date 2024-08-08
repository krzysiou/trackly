type Application = {
  id: string;
  name: string;
  owner: string;
  date: string;
};

type Page = {
  id: string;
  type: string;
  url: string;
};

type Target = {
  id: string;
  name: string;
  page: Page;
};

type NavigationType = 'refresh' | 'navigation' | 'history' | 'unknown';

interface Event {
  id: string;
  type: 'Engagement' | 'Impression';
  navigationType: NavigationType;
  actor: string;
  date: string;
  applicationId: string;
}

interface ImpressionEvent extends Event {
  type: 'Impression';
  action: 'view';
  target: Page | Target;
}

interface EngagementEvent extends Event {
  type: 'Engagement';
  action: 'click' | 'submit';
  target: Target;
}

export type { Application, ImpressionEvent, EngagementEvent };
