import { getCurrentUrl } from '../../utils/get-current-url';
import { getNavigation } from '../../utils/get-navigation';
import { slugify } from '../../utils/slugify';

type TrackViewPageEventDataInput = {
  actor: string;
  targetType: string;
};

const composeViewPageEvent = (eventDataInput: TrackViewPageEventDataInput) => {
  const { actor, targetType } = eventDataInput;

  const targetId = slugify(targetType);
  const navigationType = getNavigation();
  const targetUrl = getCurrentUrl();

  return {
    actor,
    targetId,
    targetType,
    navigationType,
    targetUrl,
  };
};

export { composeViewPageEvent, type TrackViewPageEventDataInput };
